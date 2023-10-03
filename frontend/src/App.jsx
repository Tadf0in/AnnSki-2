import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Events from './components/Events/Events'
import Shop from './components/Shop/Shop'
import Profile from './components/Profile/Profile'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/events' element={<Events />} />      
        <Route path='/shop' element={<Shop />} />  
        <Route path='/profile' element={<Profile />} />      
      </Routes>
    </div>
  )
}

export default App
