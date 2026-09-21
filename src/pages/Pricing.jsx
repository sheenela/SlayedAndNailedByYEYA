import { Link } from 'react-router-dom'
import { Check, Flame } from 'lucide-react'

const pricingCategories = [
  {
    title: 'Fast Food Classics',
    items: [
      { name: 'Tarmac Cheeseburger', price: '$28', description: 'Beef patty, cheese, lettuce, tomato, house sauce' },
      { name: 'Double Cheeseburger', price: '$35', description: 'Two patties, double cheese, bacon' },
      { name: 'Chicken Sandwich', price: '$25', description: 'Crispy chicken, slaw, pickles' },
      { name: 'Fish Sandwich', price: '$26', description: 'Fried fish, tartar sauce, lettuce' },
      { name: 'Hot Dog & Fries', price: '$18', description: 'Classic with relish and mustard' },
      { name: 'Loaded Fries', price: '$15', description: 'Cheese, bacon bits, scallions' },
    ],
  },
  {
    title: 'Chicken Wings',
    items: [
      { name: '6 Wings', price: '$22', description: 'BBQ, hot, or jerk seasoning' },
      { name: '12 Wings', price: '$38', description: 'Choose two flavors' },
      { name: '24 Wings (sharing)', price: '$65', description: 'Choose three flavors' },
      { name: 'Wing & Fries Combo', price: '$30', description: '6 wings with loaded fries' },
    ],
  },
  {
    title: 'Local St. Lucian Dishes',
    items: [
      { name: 'Grilled Fish Plate', price: '$45', description: 'Fresh catch, rice, plantains, salad' },
      { name: 'Pepper Pot Stew', price: '$38', description: 'Traditional meat stew with provisions' },
      { name: 'Bake & Saltfish', price: '$32', description: 'Fried dough with seasoned saltfish' },
      { name: 'Roti Wrap', price: '$28', description: 'Chicken or chickpea roti with chutney' },
      { name: 'Fried Plantains', price: '$12', description: 'Sweet ripe plantains, side or full' },
      { name: 'Conch Fritters', price: '$22', description: 'Six golden fritters with dipping sauce' },
    ],
  },
  {
    title: 'Pizza',
    items: [
      { name: 'Margherita (10")', price: '$25', description: 'Tomato, mozzarella, basil' },
      { name: 'Pepperoni (10")', price: '$30', description: 'Loaded with pepperoni' },
      { name: 'BBQ Chicken (10")', price: '$32', description: 'BBQ sauce, chicken, onions' },
      { name: 'Veggie Deluxe (10")', price: '$28', description: 'Peppers, onions, mushrooms, olives' },
      { name: 'Family 16" (any)', price: '$45', description: 'Any toppings, feeds 4-6' },
      { name: 'Extra Topping', price: '+$3', description: 'Per additional topping' },
    ],
  },
  {
    title: 'Bar & Cocktails',
    items: [
      { name: 'Piton Beer (local)', price: '$8', description: 'St. Lucia\'s own lager, ice cold' },
      { name: 'St. Lucian Rum Punch', price: '$15', description: 'Local rum, fruit juice, nutmeg' },
      { name: 'Mojito', price: '$14', description: 'Rum, mint, lime, soda' },
      { name: 'Pina Colada', price: '$16', description: 'Rum, coconut, pineapple' },
      { name: 'Margarita', price: '$14', description: 'Tequila, lime, salt rim' },
      { name: 'Mocktail (any)', price: '$10', description: 'Non-alcoholic tropical mixes' },
    ],
  },
  {
    title: 'Snackets & Desserts',
    items: [
      { name: 'Plantain Chips', price: '$8', description: 'Crispy fried, with ketchup' },
      { name: 'Spring Rolls (4)', price: '$12', description: 'Veggie or chicken' },
      { name: 'Chicken Nuggets (6)', price: '$14', description: 'With dipping sauce' },
      { name: 'Patties (2)', price: '$10', description: 'Beef or chicken' },
      { name: 'Chocolate Cake', price: '$12', description: 'Rich, moist, with ice cream' },
      { name: 'Banana Fritters', price: '$10', description: 'Local style, with cinnamon sugar' },
    ],
  },
]

const popularCombos = [
  { name: 'The Traveler', price: '$35', value: '$42', items: ['Cheeseburger', 'Loaded Fries', 'Piton Beer'], popular: false },
  { name: 'The Islander', price: '$55', value: '$70', items: ['Grilled Fish Plate', 'Fried Plantains', 'Rum Punch'], popular: true },
  { name: 'The Pre-Flight', price: '$45', value: '$55', items: ['6 Wings (any flavor)', 'Loaded Fries', 'Mojito'], popular: false },
]

function Pricing() {
  return (
    <div className="pt-16 md:pt-20">
      <section className="relative py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-[#f59e0b]/20 text-[#fbbf24] rounded-full text-sm font-medium mb-4 border border-[#f59e0b]/30">Full Price List</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6">Menu Prices</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">Great food and drinks at fair prices. Prices in Eastern Caribbean dollars (EC$).</p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-4">Popular Combos</h2>
            <p className="text-white/70">Save with our curated combos</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {popularCombos.map((pkg, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-6 md:p-8 ${
                  pkg.popular ? 'bg-gradient-to-br from-[#f59e0b] to-[#b45309] text-white shadow-xl scale-105' : 'bg-[#2a1f17] shadow-md hover:shadow-lg border border-[#f59e0b]/10'
                } transition-all duration-300`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="inline-flex items-center space-x-1 px-4 py-1.5 bg-[#1a1410] text-[#fbbf24] rounded-full text-sm font-medium">
                      <Flame className="w-4 h-4" />
                      <span>Most Popular</span>
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className={`text-2xl font-playfair font-bold mb-2 ${pkg.popular ? 'text-white' : 'text-white'}`}>{pkg.name}</h3>
                  <div className="flex items-baseline justify-center space-x-2">
                    <span className={`text-4xl font-bold ${pkg.popular ? 'text-white' : 'text-[#fbbf24]'}`}>{pkg.price}</span>
                    <span className={`text-lg line-through ${pkg.popular ? 'text-white/60' : 'text-gray-600'}`}>{pkg.value}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.items.map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <Check className={`w-5 h-5 flex-shrink-0 ${pkg.popular ? 'text-white' : 'text-[#fbbf24]'}`} />
                      <span className={pkg.popular ? 'text-white/90' : 'text-gray-300'}>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/booking" className={`block w-full py-3 rounded-full font-semibold text-center transition-all duration-200 ${pkg.popular ? 'bg-white text-[#b45309] hover:shadow-lg' : 'bg-gradient-to-r from-[#f59e0b] to-[#b45309] text-white hover:shadow-lg hover:scale-105'}`}>
                  Order This Combo
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-4">Full Menu</h2>
            <p className="text-white/70">Everything we serve, with prices</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {pricingCategories.map((category, catIndex) => (
              <div key={catIndex} className="bg-[#2a1f17] rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-[#f59e0b]/10">
                <h3 className="text-xl font-playfair font-semibold text-white mb-6 pb-3 border-b border-[#f59e0b]/20">{category.title}</h3>
                <ul className="space-y-4">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex justify-between items-start">
                      <div className="flex-1 mr-4">
                        <p className="font-medium text-white">{item.name}</p>
                        <p className="text-sm text-gray-500">{item.description}</p>
                      </div>
                      <span className="font-semibold text-[#fbbf24]">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#2a1f17] rounded-2xl p-8 shadow-lg text-center border border-[#f59e0b]/10">
            <h3 className="text-xl font-playfair font-semibold text-white mb-3">Special Requests?</h3>
            <p className="text-gray-400 mb-6">Dietary restrictions or large group orders? Contact us and we'll sort it out.</p>
            <Link to="/contact" className="inline-flex items-center space-x-2 px-6 py-3 bg-[#1a1410] text-[#fbbf24] rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-200 border border-[#f59e0b]/30">
              <span>Get in Touch</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Pricing
