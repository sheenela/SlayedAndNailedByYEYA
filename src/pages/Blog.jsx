import { Link } from 'react-router-dom'
import { Clock, User, ArrowRight, Tag } from 'lucide-react'

const blogPosts = [
  { id: 1, title: '5 Must-Try Local Dishes at The Tarmac Lounge', excerpt: 'From pepper pot to bake and saltfish, here are the St. Lucian classics you can\'t leave without trying.', image: 'https://images.pexels.com/photos/5041495/pexels-photo-5041495.jpeg?auto=compress&cs=tinysrgb&w=800', date: 'September 2026', author: 'The Tarmac Lounge', readTime: '4 min read', category: 'Food' },
  { id: 2, title: 'The Perfect Rum Punch: Our Signature Recipe', excerpt: 'Discover what goes into our famous St. Lucian Rum Punch that keeps travelers coming back.', image: 'https://images.pexels.com/photos/24868933/pexels-photo-24868933.jpeg?auto=compress&cs=tinysrgb&w=800', date: 'August 2026', author: 'The Tarmac Lounge', readTime: '3 min read', category: 'Drinks' },
  { id: 3, title: 'New Menu Alert: Wood-Fired Pizzas Now Available', excerpt: 'We\'ve added fresh, hand-tossed pizzas to the menu. Perfect for sharing before your flight.', image: 'https://images.pexels.com/photos/31596394/pexels-photo-31596394.jpeg?auto=compress&cs=tinysrgb&w=800', date: 'August 2026', author: 'The Tarmac Lounge', readTime: '2 min read', category: 'News' },
  { id: 4, title: 'Travel Tips: How to Time Your Meal Before a Flight', excerpt: 'A quick guide to fitting in a great meal without missing your boarding call.', image: 'https://images.pexels.com/photos/2612114/pexels-photo-2612114.jpeg?auto=compress&cs=tinysrgb&w=800', date: 'July 2026', author: 'The Tarmac Lounge', readTime: '5 min read', category: 'Tips' },
  { id: 5, title: 'Meet the Team: The Faces Behind Your Food', excerpt: 'Get to know the local crew cooking up your favorites upstairs at Hewanorra.', image: 'https://images.pexels.com/photos/2387675/pexels-photo-2387675.jpeg?auto=compress&cs=tinysrgb&w=800', date: 'July 2026', author: 'The Tarmac Lounge', readTime: '3 min read', category: 'About' },
  { id: 6, title: 'Best Pairings: What Drink Goes With Your Meal', excerpt: 'From Piton beer with wings to rum punch with fish, our top pairing recommendations.', image: 'https://images.pexels.com/photos/605408/pexels-photo-605408.jpeg?auto=compress&cs=tinysrgb&w=800', date: 'June 2026', author: 'The Tarmac Lounge', readTime: '4 min read', category: 'Drinks' },
]

function Blog() {
  const featuredPost = blogPosts[0]
  const recentPosts = blogPosts.slice(1)

  return (
    <div className="pt-16 md:pt-20">
      <section className="relative py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-[#f59e0b]/20 text-[#fbbf24] rounded-full text-sm font-medium mb-4 border border-[#f59e0b]/30">News & Updates</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6">The Tarmac Times</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">Food news, drink recipes, travel tips, and updates from upstairs at Hewanorra.</p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#2a1f17] rounded-2xl p-6 md:p-8 shadow-lg border border-[#f59e0b]/10">
            <article className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img src={featuredPost.image} alt={featuredPost.title} className="w-full aspect-video object-cover" loading="lazy" />
              </div>
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-[#f59e0b]/20 text-[#fbbf24] rounded-full text-sm border border-[#f59e0b]/30">
                    <Tag className="w-3 h-3" />
                    <span>{featuredPost.category}</span>
                  </span>
                  <span className="text-sm text-gray-500">{featuredPost.date}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-playfair font-bold text-white mb-4">{featuredPost.title}</h2>
                <p className="text-gray-400 mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f59e0b] to-[#b45309] flex items-center justify-center">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-white">{featuredPost.author}</p>
                      <p className="text-sm text-gray-500">{featuredPost.readTime}</p>
                    </div>
                  </div>
                  <Link to="/blog" className="inline-flex items-center space-x-2 text-[#fbbf24] font-medium hover:text-[#f59e0b] transition-colors">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-playfair font-bold text-white mb-8">Latest Posts</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {recentPosts.map((post) => (
              <article key={post.id} className="bg-[#2a1f17] rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow group border border-[#f59e0b]/10">
                <div className="aspect-video overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 bg-[#f59e0b]/20 text-[#fbbf24] rounded-full text-xs border border-[#f59e0b]/30">{post.category}</span>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>
                  <h3 className="text-lg font-playfair font-semibold text-white mb-2 group-hover:text-[#fbbf24] transition-colors">{post.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                    <Link to="/blog" className="text-[#fbbf24] font-medium text-sm hover:text-[#f59e0b] transition-colors">
                      Read
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
