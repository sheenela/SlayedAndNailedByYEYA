import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

const contactInfo = [
  { icon: Phone, title: 'Phone', value: '+1 (758) 727-0420', link: 'tel:+17587270420' },
  { icon: Mail, title: 'Email', value: 'info@slayedandnailed.com', link: 'mailto:info@slayedandnailed.com' },
  { icon: MapPin, title: 'Location', value: 'Saint Lucia, Caribbean', link: null },
  { icon: Clock, title: 'Hours', value: 'Mon - Sat: 9AM - 6PM', link: null },
]

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    const formData = new FormData(e.target)
    formData.append('form-name', 'contact')

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-white/90 backdrop-blur-sm text-[#8B5CF6] rounded-full text-sm font-medium mb-4">Get In Touch</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6">Contact Us</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">Have questions? Send us a message and we'll respond as soon as possible.</p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-10 shadow-lg">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              <div>
                <h2 className="text-2xl md:text-3xl font-playfair font-bold text-gray-800 mb-8">Let's Connect</h2>

                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-[#F3E8FF]/50 rounded-xl">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">{info.title}</p>
                        {info.link ? (
                          <a href={info.link} className="text-gray-600 hover:text-[#8B5CF6] transition-colors">{info.value}</a>
                        ) : (
                          <p className="text-gray-600">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-100 rounded-2xl overflow-hidden aspect-video">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126672.49852665597!2d-61.02424602499999!3d13.909444299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c43c8c4c4c4c4c4%3A0x1234567890abcdef!2sSaint%20Lucia!5e0!3m2!1sen!2s!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Location Map"
                  ></iframe>
                </div>
              </div>

              <div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center">
                        <CheckCircle className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-playfair font-bold text-gray-800 mb-4">Message Sent!</h3>
                      <p className="text-gray-600 mb-6">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                      <button onClick={() => setIsSubmitted(false)} className="text-[#8B5CF6] font-medium hover:text-[#7C3AED] transition-colors">
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <>
                      <h3 className="text-xl font-playfair font-bold text-gray-800 mb-6">Send Us a Message</h3>
                      <form netlify name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit} className="space-y-5">
                        <input type="hidden" name="form-name" value="contact" />
                        <p className="hidden">
                          <label>
                            Don't fill this out: <input name="bot-field" />
                          </label>
                        </p>

                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name *</label>
                          <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/20 transition-all outline-none bg-white" placeholder="Jane Doe" />
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                          <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/20 transition-all outline-none bg-white" placeholder="jane@example.com" />
                        </div>

                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                          <input type="tel" id="phone" name="phone" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/20 transition-all outline-none bg-white" placeholder="+1 (758) 000-0000" />
                        </div>

                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                          <select id="subject" name="subject" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/20 transition-all outline-none bg-white">
                            <option value="">Select a subject</option>
                            <option value="General Inquiry">General Inquiry</option>
                            <option value="Booking Question">Booking Question</option>
                            <option value="Service Information">Service Information</option>
                            <option value="Feedback">Feedback</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>

                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                          <textarea id="message" name="message" required rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/20 transition-all outline-none resize-none bg-white" placeholder="How can we help you?"></textarea>
                        </div>

                        <button type="submit" disabled={isSubmitting} className="w-full py-4 bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-white rounded-xl font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2">
                          <Send className="w-5 h-5" />
                          <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
