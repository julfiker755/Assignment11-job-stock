import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UserContaxt from './Hooks/UserContaxt.jsx'
import {QueryClient,QueryClientProvider,} from '@tanstack/react-query'
import {HelmetProvider } from 'react-helmet-async';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <QueryClientProvider client={queryClient}>
    <UserContaxt>
    <App />
    </UserContaxt>
    </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
