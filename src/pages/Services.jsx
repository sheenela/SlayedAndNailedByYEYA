import { Link } from 'react-router-dom'
import { Clock, ArrowRight, Check } from 'lucide-react'

const services = [
  { id: 'manicures', name: 'Manicures', description: 'Luxury hand treatments with precision nail care and relaxation.', image: 'https://images.pexels.com/photos/3997371/pexels-photo-3997371.jpeg?auto=compress&cs=tinysrgb&w=800', duration: '45-60 mins', features: ['Classic Manicure', 'Gel Manicure', 'Spa Manicure', 'Paraffin Treatment'], startsAt: '$45' },
  { id: 'pedicures', name: 'Pedicures', description: 'Relaxing foot treatments for soft, beautiful feet with expert care.', image: 'https://images.pexels.com/photos/4957787/pexels-photo-4957787.jpeg?auto=compress&cs=tinysrgb&w=800', duration: '60-75 mins', features: ['Classic Pedicure', 'Gel Pedicure', 'Luxury Spa Pedicure', 'Callus Treatment'], startsAt: '$55' },
  { id: 'gel-x', name: 'Gel X Nails', description: 'Durable, long-lasting gel extensions with natural-looking results.', image: 'https://images.pexels.com/photos/2849742/pexels-photo-2849742.jpeg?auto=compress&cs=tinysrgb&w=800', duration: '90-120 mins', features: ['Full Set', 'Fill', 'Custom Shapes', 'Ombre & French Tips'], startsAt: '$85' },
  { id: 'acrylics', name: 'Acrylic Nails', description: 'Custom sculpted nail enhancements for length and durability.', image: 'https://images.pexels.com/photos/3997373/pexels-photo-3997373.jpeg?auto=compress&cs=tinysrgb&w=800', duration: '90-150 mins', features: ['Full Set', 'Fill', 'Custom Lengths', '3D Nail Art'], startsAt: '$90' },
  { id: 'nail-art', name: 'Nail Art', description: 'Creative designs for every occasion, from subtle to extravagant.', image: 'https://images.pexels.com/photos/4957805/pexels-photo-4957805.jpeg?auto=compress&cs=tinysrgb&w=800', duration: '30-90 mins', features: ['Hand-Painted Designs', 'Glitter & Gems', 'Character Art', 'Custom Designs'], startsAt: '$10' },
  { id: 'gel-polish', name: 'Gel Polish', description: 'High-gloss, chip-resistant color that lasts for weeks.', image: 'https://images.pexels.com/photos/2849742/pexels-photo-2849742.jpeg?auto=compress&cs=tinysrgb&w=800', duration: '45-60 mins', features: ['Solid Colors', 'French Tips', 'Ombre Styles', 'Chrome Finishes'], startsAt: '$50' },
  { id: 'soak-off', name: 'Soak Off', description: 'Safe and gentle removal of gel or acrylic nails.', image: 'https://images.pexels.com/photos/3997371/pexels-photo-3997371.jpeg?auto=compress&cs=tinysrgb&w=800', duration: '30-45 mins', features: ['Gel Removal', 'Acrylic Removal', 'Dip Removal', 'Basic Manicure After'], startsAt: '$25' },
  { id: 'fungal-treatment', name: 'Fungal Treatment', description: 'Professional treatment for nail health and fungal concerns.', image: 'https://images.pexels.com/photos/4957787/pexels-photo-4957787.jpeg?auto=compress&cs=tinysrgb&w=800', duration: '45-60 mins', features: ['Consultation', 'Treatment Plan', 'Nail Strengthening', 'Health Tips'], startsAt: '$60' },
]

function Services() {
  return (
    <div className="pt-16 md:pt-20">
      <section className="relative py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-white/90 backdrop-blur-sm text-[#8B5CF6] rounded-full text-sm font-medium mb-4">Our Services</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6">Premium Nail Services</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">Discover our range of luxury nail treatments designed to pamper, perfect, and polish.</p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 md:space-y-24">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-10 shadow-lg">
                <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                      <img src={service.image} alt={service.name} className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-[#8B5CF6]" />
                        <span className="text-sm font-medium text-gray-800">{service.duration}</span>
                      </div>
                    </div>
                  </div>

                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <span className="inline-block px-3 py-1 bg-[#F3E8FF] text-[#8B5CF6] rounded-full text-sm font-medium mb-4">Starting at {service.startsAt}</span>
                    <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-800 mb-4">{service.name}</h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                    <div className="grid grid-cols-2 gap-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] flex items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link to="/booking" className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-white rounded-full font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200">
                      <span>Book This Service</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-800 mb-6">Ready to Get Slayed?</h2>
            <p className="text-lg text-gray-600 mb-8">Book your appointment today.</p>
            <Link to="/booking" className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              <span>Book Now</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
