import { Link, useLocation } from 'react-router-dom'
import { Utensils } from 'lucide-react'

function StickyBookingCTA() {
  const location = useLocation()

  if (location.pathname === '/booking') {
    return null
  }

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#1a1410]/95 backdrop-blur-sm border-t border-[#f59e0b]/20 shadow-lg px-4 py-3">
      <Link
        to="/booking"
        className="flex items-center justify-center space-x-2 w-full py-3 bg-gradient-to-r from-[#f59e0b] to-[#b45309] text-white rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-200"
      >
        <Utensils size={20} />
        <span>Reserve a Table</span>
      </Link>
    </div>
  )
}

export default StickyBookingCTA
