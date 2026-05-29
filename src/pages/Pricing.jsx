import { Link } from 'react-router-dom'
import { Check, Sparkles } from 'lucide-react'

const pricingCategories = [
  {
    title: 'Manicures',
    items: [
      { name: 'Classic Manicure', price: '$45', description: 'Shaping, cuticle care, polish' },
      { name: 'Gel Manicure', price: '$55', description: 'Long-lasting gel polish' },
      { name: 'Spa Manicure', price: '$65', description: 'Paraffin treatment, massage' },
      { name: 'Deluxe Manicure', price: '$75', description: 'Full spa experience' },
    ],
  },
  {
    title: 'Pedicures',
    items: [
      { name: 'Classic Pedicure', price: '$55', description: 'Soak, exfoliation, polish' },
      { name: 'Gel Pedicure', price: '$65', description: 'Long-lasting gel polish' },
      { name: 'Luxury Spa Pedicure', price: '$85', description: 'Extended massage, paraffin' },
      { name: 'Deluxe Pedicure', price: '$95', description: 'Ultimate pampering' },
    ],
  },
  {
    title: 'Nail Enhancements',
    items: [
      { name: 'Gel X Full Set', price: '$85', description: 'Soft gel extensions' },
      { name: 'Gel X Fill', price: '$55', description: 'Maintenance for Gel X' },
      { name: 'Acrylic Full Set', price: '$90', description: 'Custom sculpted nails' },
      { name: 'Acrylic Fill', price: '$60', description: 'Maintenance for acrylics' },
      { name: 'Ombre/Gradient', price: '+$15', description: 'Beautiful gradient effect' },
      { name: 'French Tips', price: '+$10', description: 'Classic or colored French' },
    ],
  },
  {
    title: 'Nail Art',
    items: [
      { name: 'Simple Design', price: '$8', description: 'Per nail, simple patterns' },
      { name: 'Complex Design', price: '$15', description: 'Per nail, detailed art' },
      { name: 'Character Art', price: '$20', description: 'Per nail, custom characters' },
      { name: '3D Art', price: '$25', description: 'Per nail, 3D elements' },
      { name: 'Chrome Finish', price: '+$15', description: 'Mirrored finish (full set)' },
      { name: 'Glitter Overlay', price: '+$10', description: 'Sparkling finish (full set)' },
    ],
  },
  {
    title: 'Treatments',
    items: [
      { name: 'Soak Off (Gel)', price: '$25', description: 'Professional gel removal' },
      { name: 'Soak Off (Acrylic)', price: '$30', description: 'Professional acrylic removal' },
      { name: 'Nail Repair', price: '$8', description: 'Per nail, crack repair' },
      { name: 'Fungal Treatment', price: '$60', description: 'Consultation + treatment' },
      { name: 'Cuticle Oil', price: '$15', description: 'Intensive treatment' },
    ],
  },
  {
    title: 'Add-Ons',
    items: [
      { name: 'Paraffin Treatment', price: '$15', description: 'Hands or feet' },
      { name: 'Hand Massage (15 min)', price: '$20', description: 'Extended massage' },
      { name: 'Foot Massage (15 min)', price: '$25', description: 'Extended massage' },
      { name: 'Hot Stone Therapy', price: '$20', description: 'Soothing stone massage' },
      { name: 'Nail Strengthening', price: '$15', description: 'Strengthening overlay' },
    ],
  },
]

const popularCombo = [
  { name: 'The Essential', price: '$90', value: '$110', services: ['Classic Manicure', 'Classic Pedicure', 'Cuticle Oil'], popular: false },
  { name: 'The Slay Package', price: '$140', value: '$175', services: ['Gel Manicure', 'Luxury Spa Pedicure', 'Paraffin', 'Hand Massage'], popular: true },
  { name: 'The Full Slay', price: '$185', value: '$230', services: ['Gel X Full Set', 'Luxury Spa Pedicure', 'Nail Art (4 nails)', 'Foot Massage'], popular: false },
]

function Pricing() {
  return (
    <div className="pt-16 md:pt-20">
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-gold-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-gold-100 text-gold-700 rounded-full text-sm font-medium mb-4">Transparent Pricing</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-gray-800 mb-6">Service Pricing</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Premium nail services at fair prices. No hidden fees.</p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-800 mb-4">Popular Packages</h2>
            <p className="text-gray-600">Save with our curated treatment packages</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {popularCombo.map((pkg, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-6 md:p-8 ${
                  pkg.popular ? 'bg-gradient-to-br from-lavender-500 to-blush-500 text-white shadow-xl scale-105' : 'bg-gray-50 shadow-md hover:shadow-lg'
                } transition-all duration-300`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="inline-flex items-center space-x-1 px-4 py-1.5 bg-gold-400 text-white rounded-full text-sm font-medium">
                      <Sparkles className="w-4 h-4" />
                      <span>Most Popular</span>
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className={`text-2xl font-playfair font-bold mb-2 ${pkg.popular ? 'text-white' : 'text-gray-800'}`}>{pkg.name}</h3>
                  <div className="flex items-baseline justify-center space-x-2">
                    <span className={`text-4xl font-bold ${pkg.popular ? 'text-white' : 'text-lavender-600'}`}>{pkg.price}</span>
                    <span className={`text-lg line-through ${pkg.popular ? 'text-white/60' : 'text-gray-400'}`}>{pkg.value}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.services.map((service, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <Check className={`w-5 h-5 flex-shrink-0 ${pkg.popular ? 'text-gold-300' : 'text-lavender-500'}`} />
                      <span className={pkg.popular ? 'text-white/90' : 'text-gray-700'}>{service}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/booking" className={`block w-full py-3 rounded-full font-semibold text-center transition-all duration-200 ${pkg.popular ? 'bg-white text-lavender-600 hover:shadow-lg' : 'bg-gradient-to-r from-lavender-500 to-blush-500 text-white hover:shadow-lg hover:scale-105'}`}>
                  Book Package
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gradient-to-b from-white to-lavender-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-800 mb-4">Full Service Menu</h2>
            <p className="text-gray-600">All services include expert consultation and premium products</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {pricingCategories.map((category, catIndex) => (
              <div key={catIndex} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-playfair font-semibold text-gray-800 mb-6 pb-3 border-b border-gray-100">{category.title}</h3>
                <ul className="space-y-4">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex justify-between items-start">
                      <div className="flex-1 mr-4">
                        <p className="font-medium text-gray-800">{item.name}</p>
                        <p className="text-sm text-gray-500">{item.description}</p>
                      </div>
                      <span className="font-semibold text-lavender-600">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-lavender-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-playfair font-semibold text-gray-800 mb-3">Custom Pricing Available</h3>
          <p className="text-gray-600 mb-6">Have a specific design in mind? Contact us for personalized pricing.</p>
          <Link to="/contact" className="inline-flex items-center space-x-2 px-6 py-3 bg-white text-lavender-600 rounded-full font-medium shadow-md hover:shadow-lg hover:bg-lavender-50 transition-all duration-200 border border-lavender-200">
            <span>Get Custom Quote</span>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Pricing
