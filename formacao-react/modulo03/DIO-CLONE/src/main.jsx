import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter , RouterProvider } from 'react-router-dom'

import Home from './pages/home/home'
import Login from './pages/login/login'
import Registro from './pages/registro/registro'
import App from './App'
import HomeLogado from './pages/home-logado/home-logado'

import GlobalStyles from "./global";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/registro",
    element: <Registro />
  },
  {
    path: "/logado",
    element: <HomeLogado />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
