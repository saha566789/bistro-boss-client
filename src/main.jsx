import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { router } from './Routes/Routes.jsx'
import {
  
  RouterProvider,
} from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import AuthProviders from './Providers/AuthProviders.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProviders>
    
  <div className='max-w-screen-xl mx-auto'>
    <HelmetProvider>
    <RouterProvider router={router} />
    </HelmetProvider>
    </div>
  </AuthProviders>
  </React.StrictMode>,
)
