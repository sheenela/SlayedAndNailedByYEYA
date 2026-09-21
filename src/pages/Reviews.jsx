import { Star, Quote, ThumbsUp } from 'lucide-react'

const reviews = [
  { name: 'Marcus T.', rating: 5, text: 'Best meal I had before my flight out of St. Lucia! The burger was juicy and the service was fast. Didn\'t expect food this good at an airport.', item: 'Cheeseburger & Fries', date: 'September 2026', verified: true },
  { name: 'Alicia J.', rating: 5, text: 'Loved the local fish plate and a cold rum punch while watching planes land. Perfect airport spot with great vibes!', item: 'Grilled Fish Plate & Rum Punch', date: 'August 2026', verified: true },
  { name: 'David R.', rating: 5, text: 'Great food, great vibes, great prices. The Tarmac Lounge is a hidden gem upstairs at Hewanorra. Don\'t miss the wings!', item: 'Chicken Wings & Cocktails', date: 'August 2026', verified: true },
  { name: 'Keisha M.', rating: 5, text: 'Finally a proper spot to eat at the airport! The local dishes are authentic and the portions are generous.', item: 'Pepper Pot Stew', date: 'July 2026', verified: true },
  { name: 'Janelle D.', rating: 5, text: 'The roti wrap was amazing and the service was super quick. Just what I needed before my flight.', item: 'Roti Wrap', date: 'July 2026', verified: true },
  { name: 'Rachel W.', rating: 4, text: 'Good food and friendly staff. The cocktails are strong and the view of the runway is a bonus!', item: 'Mojito & Pizza', date: 'June 2026', verified: true },
  { name: 'Stacey B.', rating: 5, text: 'Stopped here on a layover and was blown away. The plantain chips and rum punch combo is a must!', item: 'Plantain Chips & Rum Punch', date: 'June 2026', verified: true },
  { name: 'Natasha L.', rating: 5, text: 'The Tarmac Lounge makes traveling through Hewanorra so much better. Great local food at fair prices.', item: 'Bake & Saltfish', date: 'May 2026', verified: true },
]

const reviewStats = [
  { label: 'Happy Guests', value: '5,000+' },
  { label: '5-Star Reviews', value: '200+' },
  { label: 'Daily Customers', value: '300+' },
]

function Reviews() {
  const averageRating = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length

  return (
    <div className="pt-16 md:pt-20">
      <section className="relative py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-[#f59e0b]/20 text-[#fbbf24] rounded-full text-sm font-medium mb-4 border border-[#f59e0b]/30">Guest Love</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6">Reviews & Testimonials</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">Don't just take our word for it. See what our guests have to say.</p>

          <div className="inline-flex items-center space-x-4 bg-[#2a1f17] rounded-full px-6 py-3 shadow-md border border-[#f59e0b]/20">
            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 fill-[#fbbf24] text-[#fbbf24]" />
              ))}
            </div>
            <span className="text-xl font-bold text-white">{averageRating.toFixed(1)}</span>
            <span className="text-gray-400">Based on {reviews.length} reviews</span>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#2a1f17] rounded-2xl p-8 shadow-lg border border-[#f59e0b]/10">
            <div className="grid grid-cols-3 gap-6 md:gap-8">
              {reviewStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-3xl md:text-4xl font-playfair font-bold text-[#fbbf24] mb-2">{stat.value}</p>
                  <p className="text-sm md:text-base text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="relative bg-[#2a1f17] rounded-2xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow border border-[#f59e0b]/10">
                <Quote className="absolute top-6 right-6 w-8 h-8 text-[#f59e0b]/20" />
                <div className="flex items-center space-x-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className={`w-5 h-5 ${star <= review.rating ? 'fill-[#fbbf24] text-[#fbbf24]' : 'fill-gray-700 text-gray-700'}`} />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">{review.text}</p>
                <div className="flex items-center justify-between pt-4 border-t border-[#f59e0b]/10">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f59e0b] to-[#b45309] flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">{review.name.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <p className="font-semibold text-white">{review.name}</p>
                        {review.verified && (
                          <span className="inline-flex items-center space-x-1 text-xs text-green-500">
                            <ThumbsUp className="w-3 h-3" />
                            <span>Verified</span>
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-500">{review.item} | {review.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Reviews
