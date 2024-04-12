import React, { useState } from 'react'
import './App.css'
import LoginForm from './Login'
import Dashboard from './Dashboard'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  
  const handleLogin = () =>{
    setLoggedIn(true);
  }

  const handleLogout = () =>{
    setLoggedIn(false);
  }

  return (
    <>
      {!loggedIn && <LoginForm onLogin={handleLogin}/>}
      {loggedIn && <Dashboard onLogout={handleLogout}/>}
    </>
  )
}

export default App
