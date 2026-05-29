import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/pricing', label: 'Pricing' },
  { path: '/blog', label: 'Blog' },
  { path: '/reviews', label: 'Reviews' },
  { path: '/contact', label: 'Contact' },
]

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-lavender-400 to-blush-400 flex items-center justify-center">
              <span className="text-white font-playfair font-bold text-lg md:text-xl">Y</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg md:text-xl font-playfair font-bold leading-tight text-gray-800">
                Slayed & Nailed
              </h1>
              <p className="text-xs text-lavender-600 -mt-1">by YeYa</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                  location.pathname === link.path
                    ? 'text-lavender-600 bg-lavender-50'
                    : 'text-gray-700 hover:text-lavender-600 hover:bg-lavender-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/booking"
              className="ml-4 px-5 py-2.5 bg-gradient-to-r from-lavender-500 to-blush-500 text-white rounded-full font-medium text-sm hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              Book Now
            </Link>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-lavender-50 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white px-4 py-6 space-y-2 border-t border-gray-100">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                location.pathname === link.path
                  ? 'text-lavender-600 bg-lavender-50'
                  : 'text-gray-700 hover:text-lavender-600 hover:bg-lavender-50'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/booking"
            className="block mt-4 px-6 py-3 bg-gradient-to-r from-lavender-500 to-blush-500 text-white rounded-full font-medium text-center hover:shadow-lg transition-all duration-200"
          >
            Book Your Appointment
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
