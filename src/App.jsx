import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import AboutPage from './pages/About/About'
import ServicesPage from './pages/Services/Services'
import ProjectsPage from './pages/Projects/Projects'
import ProjectDetails from './pages/ProjectDetails/ProjectDetails'
import DressingRoomPage from './pages/DressingRoom/DressingRoom'
import ContactPage from './pages/Contact/Contact'

function App() {
  return (
    <LanguageProvider>
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="projects" element={<ProjectsPage />} />
              <Route path="projects/:id" element={<ProjectDetails />} />
              <Route path="dressing-room" element={<DressingRoomPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </div>
    </Router>
    </LanguageProvider>
  )
}

export default App
