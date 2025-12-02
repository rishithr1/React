import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// They have created root element. Render App component inside it.
createRoot(document.getElementById('root')).render(
    <App />
)
