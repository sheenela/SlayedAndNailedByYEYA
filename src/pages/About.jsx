import { Link } from 'react-router-dom'
import { Flame, Utensils, Wine, Users, CheckCircle, Plane, Coffee, Heart } from 'lucide-react'

const values = [
  { icon: Flame, title: 'Fast & Fresh', description: 'Quick service without cutting corners on quality.' },
  { icon: Heart, title: 'Local Flavor', description: 'Authentic St. Lucian recipes made with love.' },
  { icon: Wine, title: 'Full Bar', description: 'Ice-cold drinks and tropical cocktails on tap.' },
  { icon: Users, title: 'Welcoming Vibes', description: 'A relaxed spot for travelers and locals alike.' },
]

const benefits = [
  'Conveniently located upstairs at Hewanorra Airport',
  'Fast service for travelers on the go',
  'Authentic local St. Lucian dishes alongside fast food classics',
  'Full bar with beer, rum, and signature cocktails',
  'Comfortable lounge seating with tarmac views',
  'Open daily from 8 AM to 10 PM',
  'Affordable prices for every budget',
  'Friendly, local staff who know the island',
]

function About() {
  return (
    <div className="pt-16 md:pt-20">
      <section className="relative py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#2a1f17] rounded-2xl p-8 md:p-12 shadow-lg border border-[#f59e0b]/10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 bg-[#f59e0b]/20 text-[#fbbf24] rounded-full text-sm font-medium mb-4 border border-[#f59e0b]/30">Our Story</span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6">
                  About The<br /><span className="gradient-text">Tarmac Lounge</span>
                </h1>
                <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                  Born from a simple idea: travelers deserve great food, not just overpriced airport snacks. The Tarmac Lounge is a fast food restaurant, bar, and snacket upstairs at Hewanorra International Airport in Vieux Fort, Saint Lucia.
                </p>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  We serve up hearty fast food classics alongside authentic local St. Lucian dishes. Whether you're flying out, picking someone up, or just craving a good meal with a cold drink, come upstairs and join us.
                </p>
                <Link to="/booking" className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-[#f59e0b] to-[#b45309] text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <span>Reserve a Table</span>
                </Link>
              </div>

              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img src="https://images.pexels.com/photos/2612114/pexels-photo-2612114.jpeg?auto=compress&cs=tinysrgb&w=800" alt="The Tarmac Lounge" className="w-full aspect-[4/5] object-cover" loading="lazy" />
                </div>
                <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full rounded-2xl bg-gradient-to-br from-[#f59e0b]/30 to-[#b45309]/30"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-4">What We Stand For</h2>
            <p className="text-white/70 max-w-2xl mx-auto">The values that guide everything we serve</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 md:p-8 bg-[#2a1f17] rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-[#f59e0b]/10">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#f59e0b] to-[#b45309] flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-playfair font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#2a1f17] rounded-2xl p-8 md:p-12 shadow-lg border border-[#f59e0b]/10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <img src="https://images.pexels.com/photos/5041495/pexels-photo-5041495.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Local dish" className="w-full rounded-xl shadow-lg" loading="lazy" />
                    <img src="https://images.pexels.com/photos/2271107/pexels-photo-2271107.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Burger and fries" className="w-full rounded-xl shadow-lg" loading="lazy" />
                  </div>
                  <div className="space-y-4 mt-8">
                    <img src="https://images.pexels.com/photos/24868933/pexels-photo-24868933.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Cocktails" className="w-full rounded-xl shadow-lg" loading="lazy" />
                    <img src="https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Chicken wings" className="w-full rounded-xl shadow-lg" loading="lazy" />
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <span className="inline-block px-4 py-1.5 bg-[#f59e0b]/20 text-[#fbbf24] rounded-full text-sm font-medium mb-4 border border-[#f59e0b]/30">Why Choose Us</span>
                <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-6">The Tarmac Lounge Difference</h2>
                <p className="text-gray-400 mb-8">We go above and beyond to make sure every visit hits the spot.</p>

                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#fbbf24] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#f59e0b] to-[#b45309] rounded-2xl p-8 md:p-12 shadow-lg text-center">
            <Plane className="w-12 h-12 text-white mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-6">Come Eat With Us</h2>
            <p className="text-lg text-white/90 mb-8">Reserve a table or just walk in. We're upstairs at Hewanorra Airport, open daily.</p>
            <Link to="/booking" className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-[#b45309] rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              <Coffee className="w-5 h-5" />
              <span>Reserve a Table</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
