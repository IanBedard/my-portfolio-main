import { StrictMode } from 'react'
import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import './index.css'
import './main.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(

    <App />
 
)
