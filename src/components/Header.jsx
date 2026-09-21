import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Plane } from 'lucide-react'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/menu', label: 'Menu' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/pricing', label: 'Prices' },
  { path: '/blog', label: 'News' },
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
        isScrolled || isMenuOpen ? 'bg-[#1a1410]/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-gradient-to-br from-[#f59e0b] to-[#b45309]">
              <Plane className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className={`text-lg md:text-xl font-playfair font-bold leading-tight ${isScrolled || isMenuOpen ? 'text-white' : 'text-white'}`}>
                THE TARMAC LOUNGE
              </h1>
              <p className={`text-xs -mt-1 ${isScrolled || isMenuOpen ? 'text-[#f59e0b]' : 'text-[#fbbf24]'}`}>
                Eat • Drink • Fly
              </p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                  location.pathname === link.path
                    ? (isScrolled ? 'text-[#f59e0b] bg-[#f59e0b]/10' : 'text-[#fbbf24] bg-white/10')
                    : (isScrolled ? 'text-gray-300 hover:text-[#f59e0b] hover:bg-[#f59e0b]/10' : 'text-white/80 hover:text-white hover:bg-white/10')
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/booking"
              className="ml-4 px-5 py-2.5 bg-gradient-to-r from-[#f59e0b] to-[#b45309] text-white rounded-full font-medium text-sm hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              Reserve a Table
            </Link>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${isScrolled || isMenuOpen ? 'text-gray-300 hover:bg-[#f59e0b]/10' : 'text-white hover:bg-white/10'}`}
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
        <div className="bg-[#1a1410]/95 backdrop-blur-sm px-4 py-6 space-y-2 border-t border-[#f59e0b]/20">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                location.pathname === link.path
                  ? 'text-[#f59e0b] bg-[#f59e0b]/10'
                  : 'text-gray-300 hover:text-[#f59e0b] hover:bg-[#f59e0b]/10'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/booking"
            className="block mt-4 px-6 py-3 bg-gradient-to-r from-[#f59e0b] to-[#b45309] text-white rounded-full font-medium text-center hover:shadow-lg transition-all duration-200"
          >
            Reserve a Table
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
