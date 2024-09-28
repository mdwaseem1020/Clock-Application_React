import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Clock from "./Components/Clock.jsx";
import "./Style/Clock.css"
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Clock/>
  </StrictMode>
)
