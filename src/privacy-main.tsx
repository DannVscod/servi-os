import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PrivacyApp from './PrivacyApp'
import './styles/fonts.css'
import './styles/global.css'
import './styles/refinements.css'

createRoot(document.getElementById('root')!).render(<StrictMode><PrivacyApp /></StrictMode>)
