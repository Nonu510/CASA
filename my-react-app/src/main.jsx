import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Error from './pages/error/index.jsx'
import Header from './components/Header/index.jsx'
import Informations from './pages/informations/index.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Header />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="*" element={<Error />} />
                <Route path="/Informations" element={<Informations />} />
            </Routes>
    </Router>
    
  </StrictMode>,
)
