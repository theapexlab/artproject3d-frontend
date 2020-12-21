import React from 'react'
import './App.css'

function App(): JSX.Element {
  return (
    <div className="App">
      <div className="m-6 p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div>
          <div className="text-xl font-medium text-black">tailwindcss</div>
          <p className="text-gray-500">It is workin!</p>
        </div>
      </div>
    </div>
  )
}

export default App
