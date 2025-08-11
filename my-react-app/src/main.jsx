import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Error from './pages/error/Error.jsx'
import Header from './components/Header/Header.jsx'
import Informations from './pages/informations/Info.jsx'
import Footer from './components/Footer/Footer.jsx'
import Appartement from './pages/Appartement/Appartement.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Header />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="*" element={<Error />} />
                <Route path="/informations" element={<Informations />} />
                <Route path="/appartement/:id" element={<Appartement />} />
            </Routes>
      <Footer />
    </Router>
    
  </StrictMode>,
)
