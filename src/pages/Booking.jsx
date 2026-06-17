import { useState } from 'react'
import { Calendar, Clock, User, Mail, Phone, MessageSquare, CheckCircle, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  { id: 'manicure', name: 'Manicure' },
  { id: 'pedicure', name: 'Pedicure' },
  { id: 'gel-manicure', name: 'Gel Manicure' },
  { id: 'gel-pedicure', name: 'Gel Pedicure' },
  { id: 'gel-x-full', name: 'Gel X Full Set' },
  { id: 'gel-x-fill', name: 'Gel X Fill' },
  { id: 'acrylic-full', name: 'Acrylic Full Set' },
  { id: 'acrylic-fill', name: 'Acrylic Fill' },
  { id: 'nail-art', name: 'Nail Art' },
  { id: 'soak-off', name: 'Soak Off' },
  { id: 'spa-pedicure', name: 'Luxury Spa Pedicure' },
  { id: 'other', name: 'Other' },
]

const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM']

function Booking() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: [],
    date: '',
    time: '',
    notes: '',
  })

  const handleCheckboxChange = (serviceId) => {
    setFormData((prev) => ({
      ...prev,
      service: prev.service.includes(serviceId) ? prev.service.filter((id) => id !== serviceId) : [...prev.service, serviceId],
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    const submitData = new FormData(e.target)
    submitData.append('form-name', 'booking')
    submitData.set('service', formData.service.join(', '))

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
          <span className="inline-flex items-center space-x-2 px-4 py-1.5 bg-white/90 backdrop-blur-sm text-[#8B5CF6] rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Book Your Appointment</span>
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6">Schedule Your Visit</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">Ready to get beautiful nails? Fill out the form below and we'll confirm within 24 hours.</p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 lg:p-10 shadow-xl border border-white/20">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-playfair font-bold text-gray-800 mb-4">Booking Request Received!</h2>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">Thank you for your booking request! We'll contact you within 24 hours to confirm.</p>
                <div className="inline-flex items-center space-x-2 px-6 py-3 bg-[#F3E8FF] text-[#8B5CF6] rounded-full text-sm">
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
                  <h3 className="text-xl font-playfair font-bold text-gray-800 mb-6 flex items-center space-x-2">
                    <User className="w-5 h-5 text-[#8B5CF6]" />
                    <span>Your Information</span>
                  </h3>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <input type="text" id="name" name="name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/20 transition-all outline-none bg-white" placeholder="Jane Doe" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                      <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/20 transition-all outline-none bg-white" placeholder="+1 (758) 000-0000" />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <input type="email" id="email" name="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/20 transition-all outline-none bg-white" placeholder="jane@example.com" />
                    </div>
                  </div>
                </div>

                <div className="mb-10">
                  <h3 className="text-xl font-playfair font-bold text-gray-800 mb-6 flex items-center space-x-2">
                    <Sparkles className="w-5 h-5 text-[#EC4899]" />
                    <span>Services Needed</span>
                  </h3>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {services.map((service) => (
                      <label
                        key={service.id}
                        className={`flex items-center p-4 rounded-xl cursor-pointer transition-all ${
                          formData.service.includes(service.id) ? 'bg-gradient-to-br from-[#F3E8FF] to-[#FCE7F3] border-2 border-[#8B5CF6]' : 'bg-gray-50 border-2 border-transparent hover:bg-gray-100'
                        }`}
                      >
                        <input type="checkbox" name="service-checkbox" value={service.id} checked={formData.service.includes(service.id)} onChange={() => handleCheckboxChange(service.id)} className="sr-only" />
                        <span className="text-sm font-medium text-gray-700">{service.name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="mb-10">
                  <h3 className="text-xl font-playfair font-bold text-gray-800 mb-6 flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-[#92400E]" />
                    <span>Date & Time</span>
                  </h3>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">Preferred Date *</label>
                      <input type="date" id="date" name="date" required value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} min={new Date().toISOString().split('T')[0]} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/20 transition-all outline-none bg-white" />
                    </div>
                    <div>
                      <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">Preferred Time *</label>
                      <select id="time" name="time" required value={formData.time} onChange={(e) => setFormData({ ...formData, time: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/20 transition-all outline-none bg-white">
                        <option value="">Select a time</option>
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>{slot}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-playfair font-bold text-gray-800 mb-6 flex items-center space-x-2">
                    <MessageSquare className="w-5 h-5 text-[#8B5CF6]" />
                    <span>Additional Notes</span>
                  </h3>
                  <textarea id="notes" name="notes" rows={4} value={formData.notes} onChange={(e) => setFormData({ ...formData, notes: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/20 transition-all outline-none resize-none bg-white" placeholder="Any special requests, nail design ideas, or allergies?"></textarea>
                </div>

                <button type="submit" disabled={isSubmitting || formData.service.length === 0} className="w-full py-4 bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>{isSubmitting ? 'Submitting...' : 'Request Appointment'}</span>
                </button>

                <p className="text-center text-sm text-gray-500 mt-4">We'll contact you within 24 hours to confirm your booking</p>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg text-center">
            <h3 className="text-xl font-playfair font-semibold text-gray-800 mb-4">Need Immediate Assistance?</h3>
            <p className="text-gray-600 mb-6">Prefer to book by phone? Give us a call or send us a WhatsApp.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:+17587270420" className="inline-flex items-center space-x-2 px-6 py-3 bg-white text-[#8B5CF6] rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-200">
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
