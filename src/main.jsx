import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { myRoute } from './Routs/Routs'
import AuthProvider from './Providers/AuthProvider'
import { HelmetProvider } from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>

      <HelmetProvider>
        <RouterProvider router={myRoute} />
     </HelmetProvider>
    </AuthProvider>

  </React.StrictMode>,
)
