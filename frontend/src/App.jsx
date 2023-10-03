import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element='home' />      
      </Routes>
    </div>
  )
}

export default App
