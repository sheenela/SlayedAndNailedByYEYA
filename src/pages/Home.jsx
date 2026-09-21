import { Link } from 'react-router-dom'
import { Star, ChevronDown, Flame, ArrowRight, Check, Quote, Clock, Plane, Utensils, Wine, Coffee } from 'lucide-react'

const featuredItems = [
  { id: 'fast-food', name: 'Burgers & Fries', description: 'Juicy grilled burgers', image: 'https://images.pexels.com/photos/20051316/pexels-photo-20051316.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 'local-dishes', name: 'Local Favorites', description: 'Authentic St. Lucian plates', image: 'https://images.pexels.com/photos/5041495/pexels-photo-5041495.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 'bar', name: 'Bar & Cocktails', description: 'Cold drinks & tropical cocktails', image: 'https://images.pexels.com/photos/24868933/pexels-photo-24868933.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 'snackets', name: 'Quick Snackets', description: 'Grab-and-go bites', image: 'https://images.pexels.com/photos/39143744/pexels-photo-39143744.jpeg?auto=compress&cs=tinysrgb&w=400' },
]

const reviews = [
  { name: 'Marcus T.', rating: 5, text: 'Best meal I had before my flight out of St. Lucia! The burger was incredible and the service was fast.', item: 'Cheeseburger & Fries' },
  { name: 'Alicia J.', rating: 5, text: 'Loved the local fish plate and a cold rum punch while watching planes land. Perfect airport spot!', item: 'Grilled Fish Plate' },
  { name: 'David R.', rating: 5, text: 'Great food, great vibes, great prices. The Tarmac Lounge is a hidden gem upstairs at Hewanorra.', item: 'Chicken Wings & Cocktails' },
]

const faqs = [
  { question: 'Where exactly is The Tarmac Lounge located?', answer: 'We are located upstairs at Hewanorra International Airport in Vieux Fort, Saint Lucia. Look for the signs after security.' },
  { question: 'Do I need a reservation?', answer: 'Walk-ins are always welcome! However, during peak travel times, we recommend reserving a table to guarantee your spot.' },
  { question: 'How fast is the service?', answer: 'Most fast food items are ready in 10-15 minutes. Local dishes may take 20-30 minutes as they are made fresh to order.' },
  { question: 'Do you serve alcohol?', answer: 'Yes! We have a full bar with beer, wine, rum, and signature tropical cocktails. Please drink responsibly.' },
]

const galleryImages = [
  { src: 'https://images.pexels.com/photos/2271107/pexels-photo-2271107.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Cheeseburger and fries', span: 'col-span-2 row-span-2' },
  { src: 'https://images.pexels.com/photos/5041495/pexels-photo-5041495.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'Caribbean seafood plate', span: '' },
  { src: 'https://images.pexels.com/photos/24868933/pexels-photo-24868933.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'Tropical cocktails', span: '' },
  { src: 'https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&w=400', alt: 'Grilled chicken wings', span: '' },
  { src: 'https://images.pexels.com/photos/39143744/pexels-photo-39143744.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Fried plantain chips', span: 'col-span-2' },
]

const popularPicks = [
  { name: 'Tarmac Cheeseburger', price: 'From $28' },
  { name: 'Grilled Fish Plate', price: 'From $45' },
  { name: 'Crispy Chicken Wings (6)', price: 'From $22' },
  { name: 'Rum Punch', price: 'From $15' },
  { name: 'Fried Plantains', price: 'From $12' },
  { name: 'Local Pepper Pot', price: 'From $38' },
]

function Home() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.pexels.com/photos/2271107/pexels-photo-2271107.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="The Tarmac Lounge food" className="w-full h-full object-cover object-center" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1410]/70 via-transparent to-[#b45309]/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="space-y-6 md:space-y-8">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full shadow-sm border border-[#f59e0b]/30">
              <Plane className="w-4 h-4 text-[#fbbf24]" />
              <span className="text-sm font-medium text-white">Upstairs at Hewanorra International Airport</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair font-bold leading-tight">
              <span className="text-white">THE TARMAC</span>
              <br />
              <span className="gradient-text">LOUNGE</span>
            </h1>

            <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/90">
              Fast food, local dishes, cold drinks, and great vibes. Your go-to spot before you fly, upstairs at Hewanorra Airport in St. Lucia.
            </p>

            <div className="flex items-center justify-center space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-[#fbbf24] text-[#fbbf24]" />
              ))}
              <span className="ml-2 text-sm text-white/90">Loved by travelers & locals</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Link to="/booking" className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#f59e0b] to-[#b45309] text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                Reserve a Table
              </Link>
              <Link to="/menu" className="w-full sm:w-auto px-8 py-4 bg-white/15 backdrop-blur-sm text-white rounded-full font-semibold text-lg shadow-md hover:shadow-lg hover:bg-white/25 transition-all duration-300 border border-white/30">
                View Menu
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu Categories */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block px-4 py-1.5 bg-[#f59e0b]/20 text-[#fbbf24] rounded-full text-sm font-medium mb-4 border border-[#f59e0b]/30">What We Serve</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-white mb-4">Food, Drinks & Snackets</h2>
            <p className="text-white/70 max-w-2xl mx-auto">From quick bites to full plates and ice-cold cocktails</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {featuredItems.map((item) => (
              <Link key={item.id} to={`/menu#${item.id}`} className="group relative bg-[#2a1f17] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-[#f59e0b]/10">
                <div className="aspect-square overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-playfair font-semibold text-white mb-1">{item.name}</h3>
                  <p className="text-white/70 text-sm">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/menu" className="inline-flex items-center space-x-2 px-6 py-3 bg-[#f59e0b]/20 text-[#fbbf24] rounded-full font-medium shadow-md hover:shadow-lg hover:bg-[#f59e0b]/30 transition-all duration-200 border border-[#f59e0b]/30">
              <span>See Full Menu</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#2a1f17] rounded-2xl p-8 md:p-12 shadow-lg border border-[#f59e0b]/10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img src="https://images.pexels.com/photos/2612114/pexels-photo-2612114.jpeg?auto=compress&cs=tinysrgb&w=800" alt="The Tarmac Lounge interior" className="w-full aspect-[4/5] object-cover" loading="lazy" />
                </div>
                <div className="absolute -bottom-6 -right-6 md:bottom-8 md:right-8 bg-[#1a1410] rounded-2xl shadow-xl p-6 max-w-xs border border-[#f59e0b]/20">
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#f59e0b] to-[#b45309] flex items-center justify-center">
                      <Plane className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-playfair font-bold text-2xl text-white">Daily</p>
                      <p className="text-sm text-gray-400">8AM - 10PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <span className="inline-block px-4 py-1.5 bg-[#f59e0b]/20 text-[#fbbf24] rounded-full text-sm font-medium mb-4 border border-[#f59e0b]/30">About Us</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-white mb-6">
                  Eat, Drink,<br /><span className="gradient-text">and Fly</span>
                </h2>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  The Tarmac Lounge is a fast food restaurant, bar, and snacket located upstairs at Hewanorra International Airport in Vieux Fort, Saint Lucia. Whether you're waiting for a flight or just passing through, we serve up hearty fast food classics alongside authentic local St. Lucian dishes.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    { icon: Flame, title: 'Fast Food Classics', description: 'Burgers, wings, fries, and more' },
                    { icon: Utensils, title: 'Local St. Lucian Dishes', description: 'Fish, plantains, pepper pot, and roti' },
                    { icon: Wine, title: 'Full Bar', description: 'Beer, rum, cocktails, and mocktails' },
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#f59e0b]/20 flex items-center justify-center">
                        <feature.icon className="w-5 h-5 text-[#fbbf24]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{feature.title}</h4>
                        <p className="text-sm text-gray-400">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Link to="/about" className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#f59e0b] to-[#b45309] text-white rounded-full font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200">
                  <span>Our Story</span>
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
            <span className="inline-block px-4 py-1.5 bg-[#f59e0b]/20 text-[#fbbf24] rounded-full text-sm font-medium mb-4 border border-[#f59e0b]/30">Food Gallery</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-white mb-4">Straight From the Kitchen</h2>
            <p className="text-white/70 max-w-2xl mx-auto">A taste of what's waiting for you upstairs</p>
          </div>

          <div className="bg-[#2a1f17] rounded-2xl p-4 md:p-6 shadow-lg border border-[#f59e0b]/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {galleryImages.map((image, index) => (
                <div key={index} className={`relative overflow-hidden rounded-xl md:rounded-2xl aspect-square group ${image.span}`}>
                  <img src={image.src} alt={image.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/gallery" className="inline-flex items-center space-x-2 px-6 py-3 bg-[#f59e0b]/20 text-[#fbbf24] rounded-full font-medium shadow-md hover:shadow-lg hover:bg-[#f59e0b]/30 transition-all duration-200 border border-[#f59e0b]/30">
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
            <span className="inline-block px-4 py-1.5 bg-[#f59e0b]/20 text-[#fbbf24] rounded-full text-sm font-medium mb-4 border border-[#f59e0b]/30">Reviews</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-white mb-4">What Our Guests Say</h2>
            <p className="text-white/70 max-w-2xl mx-auto">Real reviews from travelers and locals</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="relative bg-[#2a1f17] rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-shadow duration-300 border border-[#f59e0b]/10">
                <Quote className="absolute top-6 right-6 w-8 h-8 text-[#f59e0b]/20" />
                <div className="flex space-x-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#fbbf24] text-[#fbbf24]" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">{review.text}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-white">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.item}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f59e0b] to-[#b45309] flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">{review.name.charAt(0)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Picks Preview */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#2a1f17] rounded-2xl p-8 md:p-12 shadow-lg border border-[#f59e0b]/10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 bg-[#f59e0b]/20 text-[#fbbf24] rounded-full text-sm font-medium mb-4 border border-[#f59e0b]/30">Popular Picks</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-white mb-6">
                  Crowd Favorites at<br /><span className="gradient-text">Fair Prices</span>
                </h2>
                <p className="text-gray-400 mb-8">Quick, delicious, and affordable. Perfect for a layover or a full meal.</p>

                <div className="space-y-4">
                  {popularPicks.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-[#1a1410] rounded-xl border border-[#f59e0b]/10 hover:border-[#f59e0b]/30 transition-colors">
                      <span className="font-medium text-white">{item.name}</span>
                      <span className="text-[#fbbf24] font-semibold">{item.price}</span>
                    </div>
                  ))}
                </div>

                <Link to="/pricing" className="inline-flex items-center space-x-2 mt-8 px-6 py-3 bg-[#1a1410] text-[#fbbf24] rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-200 border border-[#f59e0b]/30">
                  <span>View Full Price List</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img src="https://images.pexels.com/photos/13163534/pexels-photo-13163534.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Gourmet burger" className="w-full aspect-square object-cover" loading="lazy" />
                </div>
                <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full rounded-2xl bg-gradient-to-br from-[#f59e0b]/30 to-[#b45309]/30"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-[#f59e0b]/20 text-[#fbbf24] rounded-full text-sm font-medium mb-4 border border-[#f59e0b]/30">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-white/70">Got questions? We have answers!</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="bg-[#2a1f17] rounded-xl border border-[#f59e0b]/10 overflow-hidden group open:border-[#f59e0b]/30">
                <summary className="px-6 py-5 cursor-pointer list-none font-semibold text-white flex justify-between items-center hover:bg-[#f59e0b]/5 transition-colors">
                  <span>{faq.question}</span>
                  <ChevronDown className="w-5 h-5 text-[#fbbf24] transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-5 text-gray-400">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#f59e0b] to-[#b45309] rounded-2xl p-8 md:p-12 shadow-lg text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/20 rounded-full mb-6">
              <Coffee className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-medium">Ready to Eat?</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-white mb-6">Grab a Table Before You Fly</h2>
            <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
              Whether you've got a quick layover or time to spare, come enjoy great food and drinks upstairs at Hewanorra.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/booking" className="w-full sm:w-auto px-8 py-4 bg-white text-[#b45309] rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>Reserve a Table</span>
              </Link>
              <a href="tel:+17587270420" className="w-full sm:w-auto px-8 py-4 bg-white/20 text-white rounded-full font-semibold text-lg hover:bg-white/30 transition-all duration-200 flex items-center justify-center space-x-2 border border-white/30">
                <span>Call Us</span>
              </a>
            </div>

            <p className="mt-8 text-white/80 text-sm">Open Daily, 8:00 AM - 10:00 PM</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
