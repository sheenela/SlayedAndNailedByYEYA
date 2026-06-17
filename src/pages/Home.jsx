import { Link } from 'react-router-dom'
import { Star, ChevronDown, Sparkles, Heart, Award, ArrowRight, Check, Quote, Clock } from 'lucide-react'

const services = [
  { id: 'manicures', name: 'Manicures', description: 'Luxury hand treatments', image: 'https://images.pexels.com/photos/3997371/pexels-photo-3997371.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 'pedicures', name: 'Pedicures', description: 'Relaxing foot treatments', image: 'https://images.pexels.com/photos/4957787/pexels-photo-4957787.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 'gel-x', name: 'Gel X Nails', description: 'Long-lasting extensions', image: 'https://images.pexels.com/photos/2849742/pexels-photo-2849742.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 'acrylics', name: 'Acrylic Nails', description: 'Custom sculpted nails', image: 'https://images.pexels.com/photos/3997373/pexels-photo-3997373.jpeg?auto=compress&cs=tinysrgb&w=400' },
]

const reviews = [
  { name: 'Maria P.', rating: 5, text: 'Absolutely amazing! YeYa is incredibly talented and my nails have never looked better.', service: 'Gel X Nails' },
  { name: 'Alicia J.', rating: 5, text: 'Best nail salon in Saint Lucia! The attention to detail is unmatched.', service: 'Acrylic Nails' },
  { name: 'Tanya S.', rating: 5, text: 'Love the luxury experience! I was treated like royalty.', service: 'Nail Art' },
]

const faqs = [
  { question: 'How long do Gel X nails last?', answer: 'Gel X nails typically last 3-4 weeks with proper care. They are durable, lightweight, and maintain their shape throughout.' },
  { question: 'What should I expect during my first appointment?', answer: 'Your first appointment includes a consultation, followed by your chosen service. We ensure a relaxing, luxurious experience.' },
  { question: 'Do you offer custom nail art?', answer: 'Yes! We specialize in custom nail art. Bring your inspiration or let us create something unique for you.' },
  { question: 'How do I book an appointment?', answer: 'Book online through our website, WhatsApp us, or call directly. We recommend booking in advance.' },
]

const galleryImages = [
  { src: 'https://images.pexels.com/photos/3997373/pexels-photo-3997373.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Elegant nails', span: 'col-span-2 row-span-2' },
  { src: 'https://images.pexels.com/photos/2849742/pexels-photo-2849742.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'Gel polish', span: '' },
  { src: 'https://images.pexels.com/photos/4957787/pexels-photo-4957787.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'Pedicure', span: '' },
  { src: 'https://images.pexels.com/photos/3997371/pexels-photo-3997371.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'Manicure', span: '' },
  { src: 'https://images.pexels.com/photos/4957805/pexels-photo-4957805.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Nail art', span: 'col-span-2' },
]

const pricingItems = [
  { name: 'Classic Manicure', price: 'From $45' },
  { name: 'Luxury Pedicure', price: 'From $55' },
  { name: 'Gel X Full Set', price: 'From $85' },
  { name: 'Acrylic Full Set', price: 'From $90' },
  { name: 'Nail Art (per nail)', price: 'From $10' },
  { name: 'Soak Off', price: 'From $25' },
]

function Home() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/ChatGPT_Image_Jun_16,_2026,_09_48_20_PM.png" alt="Nail salon" className="w-full h-full object-cover object-center" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/60 via-transparent to-[#EC4899]/50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="space-y-6 md:space-y-8">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full shadow-sm">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">Luxury Nail Salon in Saint Lucia</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair font-bold leading-tight">
              <span className="text-white">Slayed & Nailed</span>
              <br />
              <span className="text-white/90">by YeYa</span>
            </h1>

            <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/90">
              Where luxury meets nail artistry. Experience premium nail services designed to pamper, perfect, and polish.
            </p>

            <div className="flex items-center justify-center space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-gold-400 text-gold-400" />
              ))}
              <span className="ml-2 text-sm text-white/90">200+ Happy Clients</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Link to="/booking" className="w-full sm:w-auto px-8 py-4 bg-white text-[#8B5CF6] rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                Book Your Appointment
              </Link>
              <Link to="/services" className="w-full sm:w-auto px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-full font-semibold text-lg shadow-md hover:shadow-lg hover:bg-white/30 transition-all duration-300 border border-white/30">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block px-4 py-1.5 bg-white/90 backdrop-blur-sm text-[#8B5CF6] rounded-full text-sm font-medium mb-4">Our Services</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-white mb-4">Premium Nail Services</h2>
            <p className="text-white/80 max-w-2xl mx-auto">Discover our range of luxury nail treatments</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {services.map((service) => (
              <Link key={service.id} to={`/services#${service.id}`} className="group relative bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                <div className="aspect-square overflow-hidden">
                  <img src={service.image} alt={service.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-playfair font-semibold text-white mb-1">{service.name}</h3>
                  <p className="text-white/80 text-sm">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="inline-flex items-center space-x-2 px-6 py-3 bg-white/90 backdrop-blur-sm text-[#8B5CF6] rounded-full font-medium shadow-md hover:shadow-lg hover:bg-white transition-all duration-200">
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img src="https://images.pexels.com/photos/4957805/pexels-photo-4957805.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Nail artist" className="w-full aspect-[4/5] object-cover" loading="lazy" />
                </div>
                <div className="absolute -bottom-6 -right-6 md:bottom-8 md:right-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 max-w-xs">
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-playfair font-bold text-2xl text-gray-800">200+</p>
                      <p className="text-sm text-gray-600">Happy Clients</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <span className="inline-block px-4 py-1.5 bg-[#F3E8FF] text-[#8B5CF6] rounded-full text-sm font-medium mb-4">About Us</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-gray-800 mb-6">
                  Where Artistry Meets<br /><span className="text-[#8B5CF6]">Luxury</span>
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Welcome to Slayed and Nailed by YeYa, your premier destination for luxury nail services in Saint Lucia. Our talented team combines creativity and precision for stunning results.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    { icon: Heart, title: 'Passion for Beauty', description: 'Every nail is a canvas' },
                    { icon: Sparkles, title: 'Premium Products', description: 'Highest quality nail products' },
                    { icon: Award, title: 'Expert Techniques', description: 'Years of experience' },
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#F3E8FF] flex items-center justify-center">
                        <feature.icon className="w-5 h-5 text-[#8B5CF6]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">{feature.title}</h4>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Link to="/about" className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-white rounded-full font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200">
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block px-4 py-1.5 bg-white/90 backdrop-blur-sm text-[#8B5CF6] rounded-full text-sm font-medium mb-4">Our Work</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-white mb-4">Nail Gallery</h2>
            <p className="text-white/80 max-w-2xl mx-auto">Browse our portfolio of stunning nail designs</p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {galleryImages.map((image, index) => (
                <div key={index} className={`relative overflow-hidden rounded-xl md:rounded-2xl aspect-square group ${image.span}`}>
                  <img src={image.src} alt={image.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/gallery" className="inline-flex items-center space-x-2 px-6 py-3 bg-white/90 backdrop-blur-sm text-[#8B5CF6] rounded-full font-medium shadow-md hover:shadow-lg hover:bg-white transition-all duration-200">
              <span>View Full Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block px-4 py-1.5 bg-white/90 backdrop-blur-sm text-[#8B5CF6] rounded-full text-sm font-medium mb-4">Testimonials</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-white/80 max-w-2xl mx-auto">Real reviews from happy clients</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-shadow duration-300">
                <Quote className="absolute top-6 right-6 w-8 h-8 text-[#8B5CF6]/20" />
                <div className="flex space-x-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">{review.text}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-800">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.service}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">{review.name.charAt(0)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 bg-[#FEF3C7] text-[#92400E] rounded-full text-sm font-medium mb-4">Pricing</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-gray-800 mb-6">
                  Luxury Services at<br /><span className="text-[#8B5CF6]">Fair Prices</span>
                </h2>
                <p className="text-gray-600 mb-8">Premium quality services at accessible prices.</p>

                <div className="space-y-4">
                  {pricingItems.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-[#F3E8FF]/50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <span className="font-medium text-gray-800">{item.name}</span>
                      <span className="text-[#8B5CF6] font-semibold">{item.price}</span>
                    </div>
                  ))}
                </div>

                <Link to="/pricing" className="inline-flex items-center space-x-2 mt-8 px-6 py-3 bg-white text-[#8B5CF6] rounded-full font-medium shadow-md hover:shadow-lg hover:bg-[#F3E8FF] transition-all duration-200 border border-[#8B5CF6]/20">
                  <span>View Full Pricing</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img src="https://images.pexels.com/photos/2849742/pexels-photo-2849742.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Beautiful nails" className="w-full aspect-square object-cover" loading="lazy" />
                </div>
                <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full rounded-2xl bg-gradient-to-br from-[#8B5CF6]/30 to-[#EC4899]/30"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-white/90 backdrop-blur-sm text-[#8B5CF6] rounded-full text-sm font-medium mb-4">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-white/80">Got questions? We have answers!</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm overflow-hidden group open:shadow-md">
                <summary className="px-6 py-5 cursor-pointer list-none font-semibold text-gray-800 flex justify-between items-center hover:bg-[#F3E8FF]/50 transition-colors">
                  <span>{faq.question}</span>
                  <ChevronDown className="w-5 h-5 text-[#8B5CF6] transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-5 text-gray-600">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#F3E8FF] rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[#8B5CF6]" />
              <span className="text-[#8B5CF6] text-sm font-medium">Ready to Get Slayed?</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-gray-800 mb-6">Book Your Appointment Today</h2>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
              Transform your nails into stunning works of art. Our expert team is ready to pamper you.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/booking" className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>Book Online Now</span>
              </Link>
              <a href="tel:+17587270420" className="w-full sm:w-auto px-8 py-4 bg-white text-[#8B5CF6] rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2 border border-[#8B5CF6]/20">
                <span>Call Us</span>
              </a>
            </div>

            <p className="mt-8 text-gray-500 text-sm">Open Monday - Saturday, 9:00 AM - 6:00 PM</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
