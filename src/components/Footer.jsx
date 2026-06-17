import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Instagram, Facebook, Clock } from 'lucide-react'

const quickLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/gallery', label: 'Gallery' },
]

const serviceLinks = [
  { path: '/services#manicures', label: 'Manicures' },
  { path: '/services#pedicures', label: 'Pedicures' },
  { path: '/services#acrylics', label: 'Acrylic Nails' },
  { path: '/services#gel', label: 'Gel X Nails' },
]

function Footer() {
  return (
    <footer className="bg-white/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/image.png" alt="Slayed and Nailed by YeYa" className="h-16 object-contain" />
              <div>
                <h3 className="text-xl font-playfair font-bold text-gray-800">Slayed & Nailed</h3>
                <p className="text-sm text-[#8B5CF6]">by YeYa</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Your premier destination for luxury nail services in Saint Lucia. Where beauty meets excellence.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] flex items-center justify-center text-white hover:shadow-lg hover:scale-110 transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] flex items-center justify-center text-white hover:shadow-lg hover:scale-110 transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-playfair font-semibold text-gray-800 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-600 hover:text-[#8B5CF6] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-playfair font-semibold text-gray-800 mb-4">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-600 hover:text-[#8B5CF6] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-playfair font-semibold text-gray-800 mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+17587270420"
                  className="flex items-center space-x-2 text-gray-600 hover:text-[#8B5CF6] transition-colors text-sm"
                >
                  <Phone size={16} className="text-[#8B5CF6]" />
                  <span>+1 (758) 727-0420</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@slayedandnailed.com"
                  className="flex items-center space-x-2 text-gray-600 hover:text-[#8B5CF6] transition-colors text-sm"
                >
                  <Mail size={16} className="text-[#8B5CF6]" />
                  <span>info@slayedandnailed.com</span>
                </a>
              </li>
              <li className="flex items-start space-x-2 text-gray-600 text-sm">
                <MapPin size={16} className="text-[#8B5CF6] mt-0.5 flex-shrink-0" />
                <span>Saint Lucia, Caribbean</span>
              </li>
              <li className="flex items-start space-x-2 text-gray-600 text-sm">
                <Clock size={16} className="text-[#8B5CF6] mt-0.5 flex-shrink-0" />
                <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              &copy; {new Date().getFullYear()} Slayed and Nailed by YeYa. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm">
              <Link to="/contact" className="text-gray-500 hover:text-[#8B5CF6] transition-colors">
                Contact
              </Link>
              <Link to="/booking" className="text-gray-500 hover:text-[#8B5CF6] transition-colors">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
