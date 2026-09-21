import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Instagram, Facebook, Clock, Plane } from 'lucide-react'

const quickLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/menu', label: 'Menu' },
  { path: '/gallery', label: 'Gallery' },
]

const menuLinks = [
  { path: '/menu#fast-food', label: 'Fast Food' },
  { path: '/menu#local-dishes', label: 'Local Dishes' },
  { path: '/menu#bar', label: 'Bar & Drinks' },
  { path: '/menu#snackets', label: 'Snackets' },
]

function Footer() {
  return (
    <footer className="bg-[#120e0a]/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-gradient-to-br from-[#f59e0b] to-[#b45309]">
                <Plane className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-playfair font-bold text-white">THE TARMAC LOUNGE</h3>
                <p className="text-xs text-[#f59e0b]">Eat • Drink • Fly</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Your go-to spot upstairs at Hewanorra International Airport. Fast food, local dishes, cold drinks, and great vibes before you fly.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f59e0b] to-[#b45309] flex items-center justify-center text-white hover:shadow-lg hover:scale-110 transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f59e0b] to-[#b45309] flex items-center justify-center text-white hover:shadow-lg hover:scale-110 transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-playfair font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-[#f59e0b] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-playfair font-semibold text-white mb-4">On the Menu</h4>
            <ul className="space-y-2">
              {menuLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-[#f59e0b] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-playfair font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+17587270420"
                  className="flex items-center space-x-2 text-gray-400 hover:text-[#f59e0b] transition-colors text-sm"
                >
                  <Phone size={16} className="text-[#f59e0b]" />
                  <span>+1 (758) 727-0420</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@thetarmacounge.com"
                  className="flex items-center space-x-2 text-gray-400 hover:text-[#f59e0b] transition-colors text-sm"
                >
                  <Mail size={16} className="text-[#f59e0b]" />
                  <span>hello@thetarmacoounge.com</span>
                </a>
              </li>
              <li className="flex items-start space-x-2 text-gray-400 text-sm">
                <MapPin size={16} className="text-[#f59e0b] mt-0.5 flex-shrink-0" />
                <span>Upstairs, Hewanorra International Airport, Vieux Fort, Saint Lucia</span>
              </li>
              <li className="flex items-start space-x-2 text-gray-400 text-sm">
                <Clock size={16} className="text-[#f59e0b] mt-0.5 flex-shrink-0" />
                <span>Daily: 8:00 AM - 10:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-[#f59e0b]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              &copy; {new Date().getFullYear()} The Tarmac Lounge. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm">
              <Link to="/contact" className="text-gray-500 hover:text-[#f59e0b] transition-colors">
                Contact
              </Link>
              <Link to="/booking" className="text-gray-500 hover:text-[#f59e0b] transition-colors">
                Reserve
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
