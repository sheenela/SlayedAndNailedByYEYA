import { Link, useLocation } from 'react-router-dom'
import { Calendar } from 'lucide-react'

function StickyBookingCTA() {
  const location = useLocation()

  if (location.pathname === '/booking') {
    return null
  }

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-lg px-4 py-3">
      <Link
        to="/booking"
        className="flex items-center justify-center space-x-2 w-full py-3 bg-gradient-to-r from-lavender-500 to-blush-500 text-white rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-200"
      >
        <Calendar size={20} />
        <span>Book Your Appointment</span>
      </Link>
    </div>
  )
}

export default StickyBookingCTA
