import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { getYouTubeLink, getYouTubeTitle } from '../youtubeLinks'

export default function PathDetailPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const { pathId } = useParams()

  // Prefer state passed from navigation; fallback to a minimal reconstruction
  const path = location.state?.path || {
    id: pathId,
    title: pathId?.replace(/-/g, ' ') || 'Learning Path',
    description: 'Curated resources and projects to master this path.',
    duration: '—',
    difficulty: '—',
    skills: [],
    color: 'from-indigo-500 to-purple-500',
    icon: '🎯'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 text-indigo-600 hover:text-indigo-700 font-semibold"
        >
          ← Back to Learning Plans
        </button>

        <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8">
          <div className="flex items-center mb-4">
            <div className={`w-12 h-12 bg-gradient-to-r ${path.color} rounded-xl flex items-center justify-center mr-4`}>
              <span className="text-2xl">{path.icon}</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">{path.title}</h1>
              <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                <span>{path.duration}</span>
                <span>•</span>
                <span>{path.difficulty}</span>
              </div>
            </div>
          </div>

          <p className="text-gray-700 mb-6">{path.description}</p>

          <h2 className="text-xl font-semibold text-gray-800 mb-3">Start with these skills</h2>
          {path.skills && path.skills.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {path.skills.map((skill, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-800">{skill}</h3>
                      <p className="text-sm text-gray-600">{getYouTubeTitle(skill)}</p>
                    </div>
                    <a
                      href={getYouTubeLink(skill)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 rounded-lg text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-sm"
                    >
                      Open Playlist
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-gray-600">No skills found for this path. Use the main page to select a predefined path.</div>
          )}
        </div>
      </main>
    </div>
  )
}



