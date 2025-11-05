import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { getYouTubeLink, getYouTubeTitle } from '../youtubeLinks'

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:8000'

export default function CareerAnalysisPage({ token, user }) {
  const location = useLocation()
  const navigate = useNavigate()
  const [selectedCareer, setSelectedCareer] = useState('')
  const [skills, setSkills] = useState([])
  const [gapResult, setGapResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [progress, setProgress] = useState({})

  useEffect(() => {
    // Get data from location state or redirect
    if (location.state?.selectedCareer && location.state?.skills) {
      setSelectedCareer(location.state.selectedCareer.career)
      setSkills(location.state.skills)
      analyzeCareerGap(location.state.selectedCareer.career, location.state.skills)
    } else {
      navigate('/career-recommendations')
    }
  }, [location.state, navigate])

  const analyzeCareerGap = async (career, currentSkills) => {
    if (!career) {
      alert('🎯 Please select a career first')
      return
    }
    
    try {
      setLoading(true)
      const res = await axios.post(`${API_BASE}/career-gap`, {
        target_career: career,
        current_skills: currentSkills
      }, {
        headers: { Authorization: `Bearer ${token}` }
      })
      
      setGapResult(res.data)
      // alert('📊 Career gap analysis complete!')
    } catch (error) {
      alert('❌ Gap analysis failed: ' + (error.response?.data?.detail || error.message))
    }
    setLoading(false)
  }

  const updateProgress = async (skill, videoTitle, completed) => {
    try {
      await axios.post(`${API_BASE}/update-progress`, {
        skill: skill,
        video_title: videoTitle,
        completed: completed
      }, {
        headers: { Authorization: `Bearer ${token}` }
      })
      
      // Update local progress state
      setProgress(prev => ({
        ...prev,
        [skill]: {
          ...prev[skill],
          [videoTitle]: completed
        }
      }))
    } catch (error) {
      console.error('Failed to update progress:', error)
    }
  }

  const isVideoCompleted = (skill, videoTitle) => {
    return progress[skill] && progress[skill][videoTitle] === true
  }

  const getProgressPercentage = (skill, videos) => {
    if (!videos || videos.length === 0) return 0
    const completed = videos.filter(video => isVideoCompleted(skill, video)).length
    return Math.round((completed / videos.length) * 100)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Explore Career Path</h2>
              <p className="text-gray-600">Get detailed analysis and learning plan for {selectedCareer}</p>
            </div>
          </div>

          {gapResult && (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
                <h3 className="text-xl font-bold text-purple-800 mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Career Analysis: {gapResult.target_career}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white rounded-lg p-4 border border-purple-200">
                    <div className="text-sm font-semibold text-purple-600 mb-2">Required Skills</div>
                    <div className="flex flex-wrap gap-1">
                      {gapResult.required_skills.map(skill => (
                        <span key={skill} className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border border-green-200">
                    <div className="text-sm font-semibold text-green-600 mb-2">Your Skills</div>
                    <div className="flex flex-wrap gap-1">
                      {gapResult.your_skills.length > 0 ? (
                        gapResult.your_skills.map(skill => (
                          <span key={skill} className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                            {skill}
                          </span>
                        ))
                      ) : (
                        <span className="text-xs text-gray-500">None detected</span>
                      )}
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border border-red-200">
                    <div className="text-sm font-semibold text-red-600 mb-2">Missing Skills</div>
                    <div className="flex flex-wrap gap-1">
                      {gapResult.missing_skills.length > 0 ? (
                        gapResult.missing_skills.map(skill => (
                          <span key={skill} className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs">
                            {skill}
                          </span>
                        ))
                      ) : (
                        <span className="text-xs text-green-600">None! 🎉</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {gapResult.personalized_plan && gapResult.personalized_plan.length > 0 && (
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                  <h4 className="text-lg font-bold text-blue-800 mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    Personalized Learning Plan
                  </h4>
                  <div className="space-y-6">
                    {gapResult.personalized_plan.map((item, index) => (
                      <div key={item.skill} className="bg-white rounded-lg p-6 border border-blue-200">
                        <div className="flex items-center justify-between mb-4">
                          <h5 className="font-bold text-blue-800 flex items-center">
                            <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm mr-3">
                              {index + 1}
                            </span>
                            {item.skill}
                          </h5>
                          <div className="text-sm text-gray-600">
                            Progress: {getProgressPercentage(item.skill, item.steps)}%
                          </div>
                        </div>

                        {/* Custom YouTube Playlist Link */}
                        <div className="mb-4 p-3 bg-red-50 rounded-lg border border-red-200">
                          <div className="flex items-center mb-2">
                            <svg className="w-5 h-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                            </svg>
                            <span className="font-semibold text-red-800">YouTube Playlist:</span>
                          </div>
                          <a 
                            href={getYouTubeLink(item.skill)} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-red-600 hover:text-red-800 underline font-medium"
                          >
                            {getYouTubeTitle(item.skill)}
                          </a>
                          <p className="text-xs text-gray-600 mt-1">
                            📝 <strong>Customize this link:</strong> Edit the URL in <code>frontend/src/youtubeLinks.js</code>
                          </p>
                        </div>

                        {/* Learning Topics Checklist */}
                        <div className="mb-4">
                          <h6 className="font-semibold text-gray-700 mb-3">📚 Learning Topics Checklist:</h6>
                          <div className="space-y-2 max-h-48 overflow-y-auto">
                            {item.steps.map((topic, topicIndex) => (
                              <div key={topicIndex} className="flex items-center p-2 bg-gray-50 rounded-lg">
                                <input
                                  type="checkbox"
                                  checked={isVideoCompleted(item.skill, topic)}
                                  onChange={(e) => updateProgress(item.skill, topic, e.target.checked)}
                                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                />
                                <span className={`ml-3 text-sm ${isVideoCompleted(item.skill, topic) ? 'line-through text-gray-500' : 'text-gray-700'}`}>
                                  {topic}
                                </span>
                                {isVideoCompleted(item.skill, topic) && (
                                  <span className="ml-auto text-green-600 text-sm">✅</span>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Projects */}
                        {item.projects && item.projects.length > 0 && (
                          <div>
                            <h6 className="font-semibold text-gray-700 mb-3">🚀 Practice Projects:</h6>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                              {item.projects.map((project, projectIndex) => (
                                <div key={projectIndex} className="p-2 bg-green-50 rounded-lg border border-green-200">
                                  <span className="text-sm text-green-800">{project}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {loading && (
            <div className="text-center py-8">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
              <p className="mt-2 text-gray-600">Analyzing career gap...</p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
