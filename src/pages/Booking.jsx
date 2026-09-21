import { useState } from 'react'
import { Calendar, Clock, User, Mail, Phone, MessageSquare, CheckCircle, Plane, Utensils, Users } from 'lucide-react'
import { Link } from 'react-router-dom'

const partySizes = [
  { id: '1', name: '1 person' },
  { id: '2', name: '2 people' },
  { id: '3-4', name: '3-4 people' },
  { id: '5-6', name: '5-6 people' },
  { id: '7+', name: '7+ (large group)' },
]

const visitTypes = [
  { id: 'dine-in', name: 'Dine In' },
  { id: 'takeout', name: 'Takeout / Pickup' },
  { id: 'large-order', name: 'Large Group Order' },
  { id: 'drinks-only', name: 'Drinks Only' },
]

const timeSlots = ['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM']

function Booking() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    visitType: '',
    partySize: '',
    date: '',
    time: '',
    notes: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    const submitData = new FormData(e.target)
    submitData.append('form-name', 'booking')

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(submitData).toString(),
      })
      setIsSubmitted(true)
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="pt-16 md:pt-20">
      <section className="relative py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-flex items-center space-x-2 px-4 py-1.5 bg-[#f59e0b]/20 text-[#fbbf24] rounded-full text-sm font-medium mb-4 border border-[#f59e0b]/30">
            <Plane className="w-4 h-4" />
            <span>Reserve or Order Ahead</span>
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6">Reserve a Table</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">Got a flight to catch? Reserve your table or order ahead so your food is ready when you arrive.</p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#2a1f17] rounded-2xl p-6 md:p-8 lg:p-10 shadow-xl border border-[#f59e0b]/20">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-playfair font-bold text-white mb-4">Request Received!</h2>
                <p className="text-gray-400 mb-6 max-w-md mx-auto">Thank you! We'll confirm your reservation or order within a few hours. See you upstairs at Hewanorra!</p>
                <div className="inline-flex items-center space-x-2 px-6 py-3 bg-[#f59e0b]/20 text-[#fbbf24] rounded-full text-sm border border-[#f59e0b]/30">
                  <Mail className="w-4 h-4" />
                  <span>Check your email for confirmation</span>
                </div>
              </div>
            ) : (
              <form netlify name="booking" method="POST" data-netlify="true" onSubmit={handleSubmit}>
                <input type="hidden" name="form-name" value="booking" />
                <p className="hidden">
                  <label>
                    Don't fill this out: <input name="bot-field" />
                  </label>
                </p>

                <div className="mb-10">
                  <h3 className="text-xl font-playfair font-bold text-white mb-6 flex items-center space-x-2">
                    <User className="w-5 h-5 text-[#fbbf24]" />
                    <span>Your Information</span>
                  </h3>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
                      <input type="text" id="name" name="name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-[#f59e0b]/20 focus:border-[#f59e0b] focus:ring-2 focus:ring-[#f59e0b]/20 transition-all outline-none bg-[#1a1410] text-white" placeholder="Jane Doe" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Phone Number *</label>
                      <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-[#f59e0b]/20 focus:border-[#f59e0b] focus:ring-2 focus:ring-[#f59e0b]/20 transition-all outline-none bg-[#1a1410] text-white" placeholder="+1 (758) 000-0000" />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
                      <input type="email" id="email" name="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-[#f59e0b]/20 focus:border-[#f59e0b] focus:ring-2 focus:ring-[#f59e0b]/20 transition-all outline-none bg-[#1a1410] text-white" placeholder="jane@example.com" />
                    </div>
                  </div>
                </div>

                <div className="mb-10">
                  <h3 className="text-xl font-playfair font-bold text-white mb-6 flex items-center space-x-2">
                    <Utensils className="w-5 h-5 text-[#fbbf24]" />
                    <span>Visit Type</span>
                  </h3>
                  <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                    {visitTypes.map((type) => (
                      <label
                        key={type.id}
                        className={`flex items-center justify-center p-4 rounded-xl cursor-pointer transition-all text-center ${
                          formData.visitType === type.id ? 'bg-gradient-to-br from-[#f59e0b]/20 to-[#b45309]/20 border-2 border-[#f59e0b]' : 'bg-[#1a1410] border-2 border-transparent hover:bg-[#f59e0b]/5'
                        }`}
                      >
                        <input type="radio" name="visitType" value={type.id} checked={formData.visitType === type.id} onChange={(e) => setFormData({ ...formData, visitType: e.target.value })} className="sr-only" />
                        <span className="text-sm font-medium text-gray-300">{type.name}</span>
                      </label>
                    ))}
                  </div>

                  <h3 className="text-xl font-playfair font-bold text-white mb-6 flex items-center space-x-2">
                    <Users className="w-5 h-5 text-[#fbbf24]" />
                    <span>Party Size</span>
                  </h3>
                  <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-3">
                    {partySizes.map((size) => (
                      <label
                        key={size.id}
                        className={`flex items-center justify-center p-4 rounded-xl cursor-pointer transition-all text-center ${
                          formData.partySize === size.id ? 'bg-gradient-to-br from-[#f59e0b]/20 to-[#b45309]/20 border-2 border-[#f59e0b]' : 'bg-[#1a1410] border-2 border-transparent hover:bg-[#f59e0b]/5'
                        }`}
                      >
                        <input type="radio" name="partySize" value={size.id} checked={formData.partySize === size.id} onChange={(e) => setFormData({ ...formData, partySize: e.target.value })} className="sr-only" />
                        <span className="text-sm font-medium text-gray-300">{size.name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="mb-10">
                  <h3 className="text-xl font-playfair font-bold text-white mb-6 flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-[#fbbf24]" />
                    <span>Date & Time</span>
                  </h3>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-gray-300 mb-2">Preferred Date *</label>
                      <input type="date" id="date" name="date" required value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} min={new Date().toISOString().split('T')[0]} className="w-full px-4 py-3 rounded-xl border border-[#f59e0b]/20 focus:border-[#f59e0b] focus:ring-2 focus:ring-[#f59e0b]/20 transition-all outline-none bg-[#1a1410] text-white" />
                    </div>
                    <div>
                      <label htmlFor="time" className="block text-sm font-medium text-gray-300 mb-2">Preferred Time *</label>
                      <select id="time" name="time" required value={formData.time} onChange={(e) => setFormData({ ...formData, time: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-[#f59e0b]/20 focus:border-[#f59e0b] focus:ring-2 focus:ring-[#f59e0b]/20 transition-all outline-none bg-[#1a1410] text-white">
                        <option value="">Select a time</option>
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>{slot}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-playfair font-bold text-white mb-6 flex items-center space-x-2">
                    <MessageSquare className="w-5 h-5 text-[#fbbf24]" />
                    <span>Order Details or Notes</span>
                  </h3>
                  <textarea id="notes" name="notes" rows={4} value={formData.notes} onChange={(e) => setFormData({ ...formData, notes: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-[#f59e0b]/20 focus:border-[#f59e0b] focus:ring-2 focus:ring-[#f59e0b]/20 transition-all outline-none resize-none bg-[#1a1410] text-white" placeholder="Pre-order specific dishes, dietary needs, flight time, or special requests"></textarea>
                </div>

                <button type="submit" disabled={isSubmitting} className="w-full py-4 bg-gradient-to-r from-[#f59e0b] to-[#b45309] text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>{isSubmitting ? 'Submitting...' : 'Submit Request'}</span>
                </button>

                <p className="text-center text-sm text-gray-500 mt-4">We'll confirm your reservation or order within a few hours</p>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#2a1f17] rounded-2xl p-8 shadow-lg text-center border border-[#f59e0b]/10">
            <h3 className="text-xl font-playfair font-semibold text-white mb-4">In a Rush?</h3>
            <p className="text-gray-400 mb-6">Call us or WhatsApp to order ahead so your food is ready when you land.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:+17587270420" className="inline-flex items-center space-x-2 px-6 py-3 bg-[#1a1410] text-[#fbbf24] rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-200 border border-[#f59e0b]/30">
                <Phone className="w-5 h-5" />
                <span>Call Us</span>
              </a>
              <a href="https://wa.me/17587270420" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 px-6 py-3 bg-green-500 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-200">
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Booking
