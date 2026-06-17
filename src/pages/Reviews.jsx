import { Star, Quote, ThumbsUp } from 'lucide-react'

const reviews = [
  { name: 'Maria P.', rating: 5, text: 'Absolutely amazing! YeYa is incredibly talented and my nails have never looked better. The salon is beautiful and so relaxing.', service: 'Gel X Nails', date: 'January 2024', verified: true },
  { name: 'Alicia J.', rating: 5, text: 'Best nail salon in Saint Lucia! The attention to detail is unmatched. I always leave feeling pampered.', service: 'Luxury Spa Pedicure', date: 'January 2024', verified: true },
  { name: 'Tanya S.', rating: 5, text: 'Love the luxury experience! From the moment I walked in, I was treated like royalty.', service: 'Nail Art', date: 'December 2023', verified: true },
  { name: 'Keisha M.', rating: 5, text: 'My go-to spot for nails! The quality is consistent and the prices are fair.', service: 'Gel Manicure', date: 'December 2023', verified: true },
  { name: 'Janelle D.', rating: 5, text: 'Finally found a nail artist who understands what I want! YeYa is so creative and patient.', service: 'Ombre Gel X', date: 'November 2023', verified: true },
  { name: 'Rachel W.', rating: 5, text: 'The atmosphere is so relaxing and the results are always perfect. Worth every penny!', service: 'Acrylic Full Set', date: 'November 2023', verified: true },
  { name: 'Stacey B.', rating: 5, text: 'Had my first Gel X appointment here and I am obsessed! The shape is perfect.', service: 'Gel X Full Set', date: 'October 2023', verified: true },
  { name: 'Natasha L.', rating: 5, text: 'Been coming here for over a year now and never disappointed. The nail art game is next level!', service: 'Manicure + Nail Art', date: 'October 2023', verified: true },
]

const reviewStats = [
  { label: 'Happy Clients', value: '200+' },
  { label: '5-Star Reviews', value: '150+' },
  { label: 'Years Experience', value: '5+' },
]

function Reviews() {
  const averageRating = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length

  return (
    <div className="pt-16 md:pt-20">
      <section className="relative py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-white/90 backdrop-blur-sm text-[#8B5CF6] rounded-full text-sm font-medium mb-4">Client Love</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6">Reviews & Testimonials</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">Don't just take our word for it. See what our lovely clients have to say.</p>

          <div className="inline-flex items-center space-x-4 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-md">
            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 fill-gold-400 text-gold-400" />
              ))}
            </div>
            <span className="text-xl font-bold text-gray-800">{averageRating.toFixed(1)}</span>
            <span className="text-gray-500">Based on {reviews.length} reviews</span>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-3 gap-6 md:gap-8">
              {reviewStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-3xl md:text-4xl font-playfair font-bold text-[#8B5CF6] mb-2">{stat.value}</p>
                  <p className="text-sm md:text-base text-gray-600">{stat.label}</p>
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
              <div key={index} className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow">
                <Quote className="absolute top-6 right-6 w-8 h-8 text-[#8B5CF6]/20" />
                <div className="flex items-center space-x-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className={`w-5 h-5 ${star <= review.rating ? 'fill-gold-400 text-gold-400' : 'fill-gray-200 text-gray-200'}`} />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">{review.text}</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">{review.name.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <p className="font-semibold text-gray-800">{review.name}</p>
                        {review.verified && (
                          <span className="inline-flex items-center space-x-1 text-xs text-green-600">
                            <ThumbsUp className="w-3 h-3" />
                            <span>Verified</span>
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-500">{review.service} | {review.date}</p>
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
