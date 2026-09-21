import { Link } from 'react-router-dom'
import { Clock, ArrowRight, Check, Flame, Utensils, Wine, Coffee } from 'lucide-react'

const menuSections = [
  {
    id: 'fast-food', name: 'Fast Food Classics', icon: Flame, description: 'Quick, hearty, and satisfying. Perfect for travelers on the go.', image: 'https://images.pexels.com/photos/20051316/pexels-photo-20051316.jpeg?auto=compress&cs=tinysrgb&w=800', duration: '10-15 mins', features: ['Tarmac Cheeseburger', 'Crispy Chicken Wings', 'Loaded Fries', 'Chicken Sandwich', 'Fish Sandwich', 'Hot Dog & Fries'], startsAt: '$18'
  },
  {
    id: 'local-dishes', name: 'Local St. Lucian Dishes', icon: Utensils, description: 'Authentic island flavors made fresh to order with local ingredients.', image: 'https://images.pexels.com/photos/5041495/pexels-photo-5041495.jpeg?auto=compress&cs=tinysrgb&w=800', duration: '20-30 mins', features: ['Grilled Fish Plate', 'Fried Plantains', 'Pepper Pot Stew', 'Bake & Saltfish', 'Roti Wrap', 'Conch Fritters'], startsAt: '$28'
  },
  {
    id: 'bar', name: 'Bar & Cocktails', icon: Wine, description: 'Ice-cold beer, fine rum, and tropical cocktails to kick back with.', image: 'https://images.pexels.com/photos/24868933/pexels-photo-24868933.jpeg?auto=compress&cs=tinysrgb&w=800', duration: '5 mins', features: ['St. Lucian Rum Punch', 'Local Piton Beer', 'Mojito', 'Pina Colada', 'Margarita', 'Mocktails'], startsAt: '$10'
  },
  {
    id: 'snackets', name: 'Quick Snackets', icon: Coffee, description: 'Grab-and-go bites for when you need something quick before boarding.', image: 'https://images.pexels.com/photos/39143744/pexels-photo-39143744.jpeg?auto=compress&cs=tinysrgb&w=800', duration: '5-10 mins', features: ['Plantain Chips', 'Spring Rolls', 'Chicken Nuggets', 'Patties', 'Fries (regular or loaded)', 'Fresh Fruit Cup'], startsAt: '$8'
  },
  {
    id: 'pizza', name: 'Pizza', icon: Flame, description: 'Hot, cheesy, and made to share. Perfect for groups and families.', image: 'https://images.pexels.com/photos/31596394/pexels-photo-31596394.jpeg?auto=compress&cs=tinysrgb&w=800', duration: '15-20 mins', features: ['Margherita', 'Pepperoni', 'BBQ Chicken', 'Veggie Deluxe', 'Personal 10"', 'Family 16"'], startsAt: '$25'
  },
  {
    id: 'desserts', name: 'Desserts & Sweets', icon: Coffee, description: 'A sweet finish before you take off.', image: 'https://images.pexels.com/photos/5172006/pexels-photo-5172006.jpeg?auto=compress&cs=tinysrgb&w=800', duration: '5 mins', features: ['Chocolate Cake', 'Local Coconut Tart', 'Ice Cream Sundae', 'Banana Fritters', 'Sweet Potato Pudding', 'Seasonal Fruit'], startsAt: '$8'
  },
]

function Menu() {
  return (
    <div className="pt-16 md:pt-20">
      <section className="relative py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-[#f59e0b]/20 text-[#fbbf24] rounded-full text-sm font-medium mb-4 border border-[#f59e0b]/30">Our Menu</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6">What's Cooking</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">Fast food classics, local St. Lucian dishes, cold drinks, and quick snackets. Something for everyone before you fly.</p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 md:space-y-24">
            {menuSections.map((section, index) => (
              <div key={section.id} id={section.id} className="bg-[#2a1f17] rounded-2xl p-6 md:p-10 shadow-lg border border-[#f59e0b]/10 scroll-mt-20">
                <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                      <img src={section.image} alt={section.name} className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                      <div className="absolute top-4 right-4 bg-[#1a1410]/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-[#fbbf24]" />
                        <span className="text-sm font-medium text-white">{section.duration}</span>
                      </div>
                    </div>
                  </div>

                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <span className="inline-block px-3 py-1 bg-[#f59e0b]/20 text-[#fbbf24] rounded-full text-sm font-medium mb-4 border border-[#f59e0b]/30">Starting at {section.startsAt}</span>
                    <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-4 flex items-center space-x-3">
                      <section.icon className="w-8 h-8 text-[#fbbf24]" />
                      <span>{section.name}</span>
                    </h2>
                    <p className="text-gray-400 mb-6 leading-relaxed">{section.description}</p>

                    <div className="grid grid-cols-2 gap-3 mb-8">
                      {section.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#f59e0b] to-[#b45309] flex items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link to="/pricing" className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#f59e0b] to-[#b45309] text-white rounded-full font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200">
                      <span>See Prices</span>
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
          <div className="bg-gradient-to-br from-[#f59e0b] to-[#b45309] rounded-2xl p-8 md:p-12 shadow-lg text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-6">Hungry Yet?</h2>
            <p className="text-lg text-white/90 mb-8">Reserve a table or order ahead so your food is ready when you land.</p>
            <Link to="/booking" className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-[#b45309] rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              <span>Reserve or Order Ahead</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Menu
