import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import axios from 'axios'

// Import pages
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import ResumeUploadPage from './pages/ResumeUploadPage'
import CareerRecommendationsPage from './pages/CareerRecommendationsPage'
import CareerAnalysisPage from './pages/CareerAnalysisPage'
import LearningPlansPage from './pages/LearningPlansPage'
import PathDetailPage from './pages/PathDetailPage'

// Import components
import Navigation from './components/Navigation'

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:8000'

export default function App() {
  // Authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [token, setToken] = useState('')
  const [user, setUser] = useState(null)

  useEffect(() => {
    const savedToken = localStorage.getItem('token')
    if (savedToken) {
      setToken(savedToken)
      setIsAuthenticated(true)
      fetchUserProfile(savedToken)
    }
  }, [])

  const fetchUserProfile = async (authToken) => {
    try {
      const res = await axios.get(`${API_BASE}/whoami`, {
        headers: { Authorization: `Bearer ${authToken}` }
      })
      setUser(res.data)
    } catch (error) {
      console.error('Failed to fetch user profile:', error)
      // If token is invalid, clear auth state
      handleLogout()
    }
  }

  const handleLogin = (accessToken, userData) => {
    setToken(accessToken)
    setUser(userData)
    setIsAuthenticated(true)
    localStorage.setItem('token', accessToken)
  }

  const handleLogout = () => {
    setToken('')
    setIsAuthenticated(false)
    setUser(null)
    localStorage.removeItem('token')
  }

  // Protected Route Component
  const ProtectedRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" replace />
  }

  return (
    <Router>
      <div className="App">
        {isAuthenticated && <Navigation user={user} onLogout={handleLogout} />}
        
        <Routes>
          {/* Public Routes */}
          <Route 
            path="/login" 
            element={
              isAuthenticated ? 
                <Navigate to="/dashboard" replace /> : 
                <LoginPage onLogin={handleLogin} />
            } 
          />
          
          {/* Protected Routes */}
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <DashboardPage user={user} onLogout={handleLogout} />
              </ProtectedRoute>
            } 
          />
          
          <Route 
            path="/resume-upload" 
            element={
              <ProtectedRoute>
                <ResumeUploadPage token={token} user={user} />
              </ProtectedRoute>
            } 
          />
          
          <Route 
            path="/career-recommendations" 
            element={
              <ProtectedRoute>
                <CareerRecommendationsPage token={token} user={user} />
              </ProtectedRoute>
            } 
          />
          
          <Route 
            path="/career-analysis" 
            element={
              <ProtectedRoute>
                <CareerAnalysisPage token={token} user={user} />
              </ProtectedRoute>
            } 
          />
          
          <Route 
            path="/learning-plans" 
            element={
              <ProtectedRoute>
                <LearningPlansPage user={user} />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/learning-plans/:pathId" 
            element={
              <ProtectedRoute>
                <PathDetailPage />
              </ProtectedRoute>
            } 
          />
          
          {/* Default redirect */}
          <Route 
            path="/" 
            element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} replace />} 
          />
          
          {/* Catch all - redirect to dashboard */}
          <Route 
            path="*" 
            element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} replace />} 
          />
        </Routes>
      </div>
    </Router>
  )
}