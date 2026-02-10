import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import OurGym from './pages/OurGym'
import Membership from './pages/Membership'
import Training from './pages/Training'
import OurStory from './pages/OurStory'
import Contact from './pages/Contact'
import FreeTrial from './pages/FreeTrial'
import FAQ from './pages/FAQ'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/our-gym" element={<OurGym />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/training" element={<Training />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/free-trial" element={<FreeTrial />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
