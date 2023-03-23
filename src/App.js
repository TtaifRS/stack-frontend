import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Dashboard, LogIn, Sales, SignUp, Users } from './pages'
import ProtectedRoute from './utils/ProtectedRoute'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={
        <ProtectedRoute  >
          <Dashboard />
        </ProtectedRoute>
      } />
      <Route path="users" element={
        <ProtectedRoute  >
          <Users />
        </ProtectedRoute>
      } />
      <Route path="sales" element={
        <ProtectedRoute  >
          <Sales />
        </ProtectedRoute>
      } />

      < Route path="signup" element={< SignUp />} />
      < Route path="login" element={< LogIn />} />
    </Routes >
  )
}

export default App