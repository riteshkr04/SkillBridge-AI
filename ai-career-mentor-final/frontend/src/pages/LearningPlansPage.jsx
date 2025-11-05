import React from 'react'
import { useNavigate } from 'react-router-dom'
import { getYouTubeTitle } from '../youtubeLinks'

export default function LearningPlansPage({ user }) {
  const navigate = useNavigate()

  const learningPaths = [
    {
      id: 'data-science',
      title: 'Data Science Path',
      description: 'Master data analysis, machine learning, and statistical modeling',
      duration: '6-12 months',
      difficulty: 'Intermediate',
      skills: ['Python', 'R', 'SQL', 'Machine Learning', 'Statistics', 'Data Visualization'],
      color: 'from-blue-500 to-cyan-500',
      icon: '📊'
    },
    {
      id: 'web-development',
      title: 'Full-Stack Web Development',
      description: 'Build complete web applications with modern frameworks',
      duration: '4-8 months',
      difficulty: 'Beginner',
      skills: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'Database', 'APIs'],
      color: 'from-green-500 to-emerald-500',
      icon: '🌐'
    },
    {
      id: 'mobile-development',
      title: 'Mobile App Development',
      description: 'Create iOS and Android applications using modern tools',
      duration: '5-10 months',
      difficulty: 'Intermediate',
      skills: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'UI/UX', 'APIs'],
      color: 'from-purple-500 to-pink-500',
      icon: '📱'
    },
    {
      id: 'cloud-engineering',
      title: 'Cloud Engineering',
      description: 'Master cloud platforms and DevOps practices',
      duration: '6-12 months',
      difficulty: 'Advanced',
      skills: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD'],
      color: 'from-orange-500 to-red-500',
      icon: '☁️'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      description: 'Protect systems and data from cyber threats',
      duration: '8-15 months',
      difficulty: 'Advanced',
      skills: ['Network Security', 'Ethical Hacking', 'Risk Assessment', 'Compliance', 'Incident Response'],
      color: 'from-red-500 to-pink-500',
      icon: '🔒'
    },
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      description: 'Build intelligent systems and AI applications',
      duration: '8-18 months',
      difficulty: 'Advanced',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'Deep Learning', 'NLP', 'Computer Vision'],
      color: 'from-indigo-500 to-purple-500',
      icon: '🤖'
    }
  ]

  const handlePathSelect = (path) => {
    navigate(`/learning-plans/${path.id}`, { state: { path } })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Choose Your Learning Path 🚀
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Follow structured learning paths designed by industry experts. 
            Each path includes curated resources, hands-on projects, and real-world applications.
          </p>
        </div>

        {/* Learning Paths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {learningPaths.map((path) => (
            <div 
              key={path.id}
              className="group bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
              onClick={() => handlePathSelect(path)}
            >
              {/* Header */}
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${path.color} rounded-xl flex items-center justify-center mr-4`}>
                  <span className="text-2xl">{path.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">
                    {path.title}
                  </h3>
                  <div className="flex items-center space-x-4 mt-1">
                    <span className="text-sm text-gray-500">{path.duration}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      path.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                      path.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {path.difficulty}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {path.description}
              </p>

              {/* Skills */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Key Skills You'll Learn:</h4>
                <div className="flex flex-wrap gap-2">
                  {path.skills.slice(0, 4).map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 rounded-full text-xs font-medium border border-indigo-200">
                      {skill}
                    </span>
                  ))}
                  {path.skills.length > 4 && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                      +{path.skills.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Action Button: go to detailed path page */}
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); handlePathSelect(path) }}
                className="flex items-center justify-between w-full text-left"
                aria-label={`Start learning: ${path.title}`}
                title={getYouTubeTitle(path.skills[0] || path.title)}
              >
                <span className="text-indigo-600 font-semibold group-hover:text-indigo-700 transition-colors">
                  Start Learning
                </span>
                <svg className="w-4 h-4 text-indigo-600 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
          <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
            Upload your resume to get personalized career recommendations and a custom learning path tailored to your goals.
          </p>
          <button 
            onClick={() => navigate('/resume-upload')}
            className="px-8 py-4 bg-white text-indigo-600 rounded-xl hover:bg-indigo-50 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl font-semibold"
          >
            Get Started with Resume Analysis
          </button>
        </div>

        {/* Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Structured Learning</h4>
            <p className="text-gray-600 text-sm">Follow step-by-step curricula designed by industry experts</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Hands-on Projects</h4>
            <p className="text-gray-600 text-sm">Build real-world projects to showcase your skills</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">AI-Powered Guidance</h4>
            <p className="text-gray-600 text-sm">Get personalized recommendations based on your progress</p>
          </div>
        </div>
      </main>
    </div>
  )
}
