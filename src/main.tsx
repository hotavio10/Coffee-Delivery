import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Home } from './pages/Home'
import { Card } from './pages/Card'
import { Confirm } from './pages/Confirm'
import { App } from './App'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>,
)
