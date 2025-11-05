import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:8000'

export default function CareerRecommendationsPage({ token, user }) {
  const location = useLocation()
  const navigate = useNavigate()
  const [skills, setSkills] = useState([])
  const [careers, setCareers] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // Get skills from location state or redirect to resume upload
    if (location.state?.skills) {
      setSkills(location.state.skills)
    } else {
      navigate('/resume-upload')
    }
  }, [location.state, navigate])

  const recommend = async () => {
    if (skills.length === 0) {
      alert('📄 Please upload a resume first to get career recommendations')
      return
    }
    
    try {
      setLoading(true)
      const res = await axios.post(`${API_BASE}/recommend-careers`, {
        skills: skills
      }, {
        headers: { Authorization: `Bearer ${token}` }
      })
      
      setCareers(res.data)
      // alert('🎯 Career recommendations generated!')
    } catch (error) {
      alert('❌ Recommendation failed: ' + (error.response?.data?.detail || error.message))
    }
    setLoading(false)
  }

  const getMatchPercentage = (match, total) => {
    return Math.round((match / total) * 100)
  }

  const handleCareerSelect = (career) => {
    navigate('/career-analysis', { 
      state: { 
        selectedCareer: career,
        skills: skills
      } 
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Career Recommendations</h2>
              <p className="text-gray-600">Discover career paths that match your skills</p>
            </div>
          </div>

          {/* Skills Display */}
          {skills.length > 0 && (
            <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                Your Skills ({skills.length})
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map(s => (
                  <span key={s} className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 rounded-full text-sm font-medium border border-indigo-200">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}

          <button 
            onClick={recommend} 
            disabled={loading || skills.length === 0}
            className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none mb-8"
          >
            {loading ? '⏳ Analyzing Careers...' : '🎯 Get Career Recommendations'}
          </button>

          {careers.length > 0 && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Recommended Career Paths</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {careers.map((c, index) => (
                  <div key={c.career} className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                       onClick={() => handleCareerSelect(c)}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-800 mb-2">{c.career}</h4>
                        <p className="text-sm text-gray-600 mb-3">{c.reason}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-indigo-600">{c.match_count}/{c.required.length}</div>
                        <div className="text-xs text-gray-500">skills match</div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${getMatchPercentage(c.match_count, c.required.length)}%` }}
                        ></div>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">{getMatchPercentage(c.match_count, c.required.length)}% match</div>
                    </div>

                    {c.missing_skills.length > 0 && (
                      <div className="space-y-2">
                        <div className="text-sm font-semibold text-gray-700">Missing Skills:</div>
                        <div className="flex flex-wrap gap-1">
                          {c.missing_skills.slice(0, 3).map(skill => (
                            <span key={skill} className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs">
                              {skill}
                            </span>
                          ))}
                          {c.missing_skills.length > 3 && (
                            <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                              +{c.missing_skills.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    <div className="mt-4 text-center">
                      <span className="text-indigo-600 text-sm font-semibold hover:text-indigo-700">
                        Click to analyze this career →
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
