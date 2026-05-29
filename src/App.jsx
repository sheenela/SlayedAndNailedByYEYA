import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import Pricing from './pages/Pricing'
import Blog from './pages/Blog'
import Reviews from './pages/Reviews'
import Contact from './pages/Contact'
import Booking from './pages/Booking'
import WhatsAppButton from './components/WhatsAppButton'
import StickyBookingCTA from './components/StickyBookingCTA'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </Layout>
      <WhatsAppButton />
      <StickyBookingCTA />
    </Router>
  )
}

export default App
