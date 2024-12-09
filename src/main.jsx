import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {  RouterProvider } from 'react-router-dom'
import router from './Routes/Router'
import AuthProvider from './Providers/AuthProvider'
import { ToastContainer } from 'react-toastify'


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>
  <RouterProvider router={router}/>
    <ToastContainer/>
  </AuthProvider>
  </StrictMode>,
)