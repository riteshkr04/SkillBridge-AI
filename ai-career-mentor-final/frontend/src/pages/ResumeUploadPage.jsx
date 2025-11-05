import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:8000'

export default function ResumeUploadPage({ token, user }) {
  const navigate = useNavigate()
  const [file, setFile] = useState(null)
  const [extracted, setExtracted] = useState('')
  const [skills, setSkills] = useState([])
  const [loading, setLoading] = useState(false)

  const upload = async () => {
    if (!file) {
      alert('📄 Please choose a resume file first')
      return
    }
    
    try {
      setLoading(true)
      const formData = new FormData()
      formData.append('file', file)
      
      const res = await axios.post(`${API_BASE}/upload-resume`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        }
      })
      
      setExtracted(res.data.text)
      setSkills(res.data.skills)
      // alert('✅ Resume uploaded and analyzed successfully!')
    } catch (error) {
      alert('❌ Upload failed: ' + (error.response?.data?.detail || error.message))
    }
    setLoading(false)
  }

  const handleContinue = () => {
    if (skills.length > 0) {
      navigate('/career-recommendations', { 
        state: { 
          extracted, 
          skills 
        } 
      })
    } else {
      alert('Please upload and analyze your resume first!')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Upload Your Resume</h2>
              <p className="text-gray-600">Upload your resume to get started with AI-powered career analysis</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-indigo-400 transition-colors duration-200">
              <input 
                type="file" 
                onChange={(e)=>setFile(e.target.files[0])} 
                accept=".pdf,.doc,.docx"
                className="hidden"
                id="file-upload"
              />
              <label htmlFor="file-upload" className="cursor-pointer">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-8 h-8 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-700">
                      {file ? `📄 ${file.name}` : 'Click to upload your resume'}
                    </p>
                    <p className="text-sm text-gray-500">Supports PDF, DOC, and DOCX files</p>
                  </div>
                </div>
              </label>
            </div>

            <button 
              onClick={upload} 
              disabled={!file || loading}
              className="w-full py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl hover:from-indigo-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {loading ? '⏳ Analyzing Resume...' : '🚀 Upload & Analyze Resume'}
            </button>
          </div>

          {extracted && (
            <div className="mt-8 space-y-6">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Resume Analysis Complete
                </h3>
                <div className="bg-white rounded-lg p-4 max-h-48 overflow-auto border">
                  <pre className="text-sm text-gray-700 whitespace-pre-wrap">{extracted}</pre>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                  Detected Skills ({skills.length})
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.length === 0 ? (
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">No skills detected</span>
                  ) : (
                    skills.map(s => (
                      <span key={s} className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 rounded-full text-sm font-medium border border-indigo-200">
                        {s}
                      </span>
                    ))
                  )}
                </div>
              </div>

              {skills.length > 0 && (
                <div className="flex justify-center">
                  <button 
                    onClick={handleContinue}
                    className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl font-semibold"
                  >
                    Continue to Career Recommendations →
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
