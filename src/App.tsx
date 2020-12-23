import React, { useEffect, useState } from 'react'
import './App.css'

function App(): JSX.Element {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 15000)
  })
  return (
    <div style={{ display: 'flex', height: '100%' }}>
      {isLoading && (
        <div className="frame loading">
          <div className="loader" />
        </div>
      )}
      <div className="frame vertical" style={{ left: 0 }} />
      <div className="frame vertical" style={{ right: 0 }} />
      <div className="frame horizontal" style={{ top: 0 }} />
      <div className="frame horizontal" style={{ bottom: 0 }}>
        <div className="bottom">
          <div>Digital Art Agency - Ervin Hervé-Lóránth</div>
          <img src="logo.svg" />
        </div>
      </div>
      <iframe
        width="100%"
        height="100%"
        src="https://www.artsteps.com/embed/5fe1e519a725c8243536aa93/560/315"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default App
