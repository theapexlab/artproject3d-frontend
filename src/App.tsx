import React from 'react'
import './App.css'

function App(): JSX.Element {
  return (
    <div style={{ display: 'flex', height: '100%' }}>
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
