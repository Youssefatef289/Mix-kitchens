import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/globals.css'

// Initialize language settings on page load
const savedLanguage = localStorage.getItem('language') || 'ar'
document.documentElement.lang = savedLanguage
document.documentElement.dir = savedLanguage === 'ar' ? 'rtl' : 'ltr'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

