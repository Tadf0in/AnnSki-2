import './App.css'
import { createBrowserRouter, Outlet, RouterProvider, useRouteError} from 'react-router-dom'
import PageError from './errors/PageError'

import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Events from './components/Events/Events'
import Shop from './components/Shop/Shop'
import Profile from './components/Profile/Profile'
import Register from './components/Events/Register/Register'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <><Navbar /><PageError /></>,
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
])

function Root() {
  return <>
    <header className='sticky-top'>
      <Navbar />
    </header>
    <div className='App'>
      <Outlet />
    </div>
  </>
}

function App() {
  return <RouterProvider router={router} />
}

export default App
