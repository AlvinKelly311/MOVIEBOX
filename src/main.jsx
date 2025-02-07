import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './component/Home.jsx'
import Intro from './component/Intro.jsx'
import Login from './auth/Login.jsx'
import Signup from './auth/Signup.jsx'

const route = createBrowserRouter([
  {
    path:'/',
    element:<Intro />
  },
  {
    path:'/home',
    element:<Home />
  },
  {
    path:'/login',
    element:<Login />
  },
  {
    path:'/signup',
    element:<Signup />
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>,
)
