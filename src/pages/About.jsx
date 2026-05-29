import { Link } from 'react-router-dom'
import { Heart, Sparkles, Award, Users, CheckCircle } from 'lucide-react'

const values = [
  { icon: Heart, title: 'Passion', description: 'We love what we do and it shows in every detail.' },
  { icon: Sparkles, title: 'Quality', description: 'Only premium products for lasting results.' },
  { icon: Award, title: 'Excellence', description: 'Continuously perfecting our craft.' },
  { icon: Users, title: 'Community', description: 'Building lasting relationships with clients.' },
]

const benefits = [
  'Certified and experienced nail technicians',
  'Premium, high-quality nail products',
  'Sanitized tools for every client',
  'Relaxing, luxury salon atmosphere',
  'Personalized nail care consultations',
  'Latest nail trends and techniques',
]

function About() {
  return (
    <div className="pt-16 md:pt-20">
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-lavender-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-blush-100 text-blush-700 rounded-full text-sm font-medium mb-4">Our Story</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-gray-800 mb-6">
                About Slayed &<br /><span className="gradient-text">Nailed by YeYa</span>
              </h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded with a passion for nail artistry and commitment to excellence, we have become Saint Lucia's premier destination for luxury nail services.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our mission is to provide every client with an unforgettable pampering experience, combining expert techniques, premium products, and personalized care.
              </p>
              <Link to="/booking" className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-lavender-500 to-blush-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                <span>Book Your Experience</span>
              </Link>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img src="https://images.pexels.com/photos/4957805/pexels-photo-4957805.jpeg?auto=compress&cs=tinysrgb&w=800" alt="YeYa - Founder" className="w-full aspect-[4/5] object-cover" loading="lazy" />
              </div>
              <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full rounded-2xl bg-gradient-to-br from-lavender-200 to-blush-200"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-800 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">These core values guide everything we do</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 md:p-8 bg-gradient-to-b from-lavender-50 to-blush-50 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-lavender-400 to-blush-400 flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-playfair font-semibold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-lavender-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img src="https://images.pexels.com/photos/3997373/pexels-photo-3997373.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Nail art" className="w-full rounded-xl shadow-lg" loading="lazy" />
                  <img src="https://images.pexels.com/photos/2849742/pexels-photo-2849742.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Gel nails" className="w-full rounded-xl shadow-lg" loading="lazy" />
                </div>
                <div className="space-y-4 mt-8">
                  <img src="https://images.pexels.com/photos/4957787/pexels-photo-4957787.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Pedicure" className="w-full rounded-xl shadow-lg" loading="lazy" />
                  <img src="https://images.pexels.com/photos/3997371/pexels-photo-3997371.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Manicure" className="w-full rounded-xl shadow-lg" loading="lazy" />
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="inline-block px-4 py-1.5 bg-lavender-100 text-lavender-700 rounded-full text-sm font-medium mb-4">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-800 mb-6">The Slayed & Nailed Difference</h2>
              <p className="text-gray-600 mb-8">We go above and beyond to ensure every visit exceeds your expectations.</p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-lavender-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-r from-lavender-500 to-blush-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-6">Ready to Experience Luxury?</h2>
          <p className="text-lg text-white/90 mb-8">Book your appointment today and let us pamper you.</p>
          <Link to="/booking" className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-lavender-600 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            <span>Schedule Your Visit</span>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default About
