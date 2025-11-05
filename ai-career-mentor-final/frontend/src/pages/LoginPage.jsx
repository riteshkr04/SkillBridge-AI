import React, { useState } from 'react'
import axios from 'axios'

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:8000'

export default function LoginPage({ onLogin }) {
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
    name: ''
  })
  const [isLoginMode, setIsLoginMode] = useState(true)
  const [loginLoading, setLoginLoading] = useState(false)
  const [loginError, setLoginError] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoginLoading(true)
    setLoginError('')
    
    try {
      const res = await axios.post(`${API_BASE}/register`, {
        email: loginForm.email,
        password: loginForm.password || 'demo123',
        name: loginForm.name || 'User'
      })
      
      onLogin(res.data.access_token, { email: loginForm.email, name: loginForm.name })
      
      // Show success message
      const message = isLoginMode ? '🎉 Welcome back!' : '🚀 Account created successfully!'
      // alert(message)
      
    } catch (error) {
      setLoginError(error.response?.data?.detail || 'Authentication failed. Please try again.')
    }
    
    setLoginLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Logo and Title */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-2xl">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">
            SkillBridge AI
          </h1>
          <p className="text-indigo-200 text-lg">
            Your intelligent career guidance platform
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 p-8">
          <div className="flex items-center justify-center mb-6">
            <div className="flex bg-white/20 rounded-xl p-1">
              <button
                onClick={() => setIsLoginMode(true)}
                className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  isLoginMode 
                    ? 'bg-white text-indigo-600 shadow-lg' 
                    : 'text-white hover:text-indigo-200'
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => setIsLoginMode(false)}
                className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  !isLoginMode 
                    ? 'bg-white text-indigo-600 shadow-lg' 
                    : 'text-white hover:text-indigo-200'
                }`}
              >
                Sign Up
              </button>
            </div>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            {!isLoginMode && (
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={loginForm.name}
                  onChange={(e) => setLoginForm({...loginForm, name: e.target.value})}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your full name"
                  required={!isLoginMode}
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={loginForm.email}
                onChange={(e) => setLoginForm({...loginForm, email: e.target.value})}
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Password
              </label>
              <input
                type="password"
                value={loginForm.password}
                onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter your password"
              />
              <p className="text-xs text-white/60 mt-1">
                {isLoginMode ? 'Leave empty for demo access' : 'Password is optional for demo'}
              </p>
            </div>

            {loginError && (
              <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-3">
                <p className="text-red-200 text-sm">{loginError}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={loginLoading || !loginForm.email}
              className="w-full py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl hover:from-indigo-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none font-semibold"
            >
              {loginLoading ? (
                <div className="flex items-center justify-center">
                  <div className="spinner mr-2"></div>
                  {isLoginMode ? 'Signing In...' : 'Creating Account...'}
                </div>
              ) : (
                isLoginMode ? '🚀 Sign In' : '✨ Create Account'
              )}
            </button>
          </form>

          {/* Demo Info */}
          <div className="mt-6 p-4 bg-white/10 rounded-xl border border-white/20">
            <div className="flex items-start">
              <svg className="w-5 h-5 text-yellow-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="text-white text-sm font-semibold mb-1">Demo Access</p>
                <p className="text-white/70 text-xs">
                  Use any email address to get started instantly. No verification required for demo purposes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Preview */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-2">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-white font-semibold text-sm">Resume Analysis</h3>
            <p className="text-white/60 text-xs">AI-powered skill extraction</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-2">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-white font-semibold text-sm">Career Matching</h3>
            <p className="text-white/60 text-xs">Personalized recommendations</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-2">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-white font-semibold text-sm">Learning Plans</h3>
            <p className="text-white/60 text-xs">Step-by-step guidance</p>
          </div>
        </div>
      </div>
    </div>
  )
}

