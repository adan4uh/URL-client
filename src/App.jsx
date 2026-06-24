import axios from 'axios'
import './App.css'
import React, { useEffect } from 'react'
import Navbar from './components/navbar/Navbar'
import MainContent from './components/mainContent/MainContent'

const App = () => {
  return (
    <div className='App'>
      <div className="navbar">
        <Navbar/>
      </div>
      
      <div className="mainContent">
        <MainContent/>
      </div>
    </div>
  )
}

export default App