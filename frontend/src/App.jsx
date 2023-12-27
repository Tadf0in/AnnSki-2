import './App.css'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import PageError from './errors/PageError'

import Navbar from './components/Root/Navbar'
import Root from './components/Root/Root'
import Footer from './components/Root/Footer'

import Home from './components/Home/Home'
import Events from './components/Events/Events'
import Shop from './components/Shop/Shop'
import Profile from './components/Profile/Profile'
import Register from './components/Events/Register/Register'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <><Navbar /><PageError /><Footer/></>,
    children: [  
      { 
        path: '/',
        element: <Home />
      }, 
      { 
        path: '/sorties',
        element: <Events />
      }, 
      { 
        path: '/sorties/inscription/:event_id',
        element: <Register />
      }, 
      { 
        path: '/shop',
        element: <Shop />
      }, 
      { 
        path: '/profile',
        element: <Profile />
      }
    ]
  }
], {
  basename: "/"
})

function App() {
  return <RouterProvider router={router} />
}

export default App
