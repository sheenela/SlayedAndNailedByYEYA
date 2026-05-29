import { Link } from 'react-router-dom'
import { Clock, User, ArrowRight, Tag } from 'lucide-react'

const blogPosts = [
  { id: 1, title: 'How to Make Your Gel Nails Last Longer', excerpt: 'Discover expert tips to extend the life of your gel manicure.', image: 'https://images.pexels.com/photos/2849742/pexels-photo-2849742.jpeg?auto=compress&cs=tinysrgb&w=800', date: 'January 2024', author: 'YeYa', readTime: '5 min read', category: 'Tips' },
  { id: 2, title: 'Top Nail Trends for 2024', excerpt: 'Explore the hottest nail trends dominating this year.', image: 'https://images.pexels.com/photos/4957805/pexels-photo-4957805.jpeg?auto=compress&cs=tinysrgb&w=800', date: 'January 2024', author: 'YeYa', readTime: '7 min read', category: 'Trends' },
  { id: 3, title: 'The Benefits of Regular Pedicures', excerpt: 'Learn why regular pedicures are essential for foot health.', image: 'https://images.pexels.com/photos/4957787/pexels-photo-4957787.jpeg?auto=compress&cs=tinysrgb&w=800', date: 'January 2024', author: 'YeYa', readTime: '4 min read', category: 'Health' },
  { id: 4, title: 'Acrylics vs Gel X: Which is Right for You?', excerpt: 'A comprehensive comparison to help you choose.', image: 'https://images.pexels.com/photos/3997373/pexels-photo-3997373.jpeg?auto=compress&cs=tinysrgb&w=800', date: 'December 2023', author: 'YeYa', readTime: '6 min read', category: 'Guides' },
  { id: 5, title: 'Nail Care During the Dry Season', excerpt: 'Essential tips to keep your nails hydrated.', image: 'https://images.pexels.com/photos/3997371/pexels-photo-3997371.jpeg?auto=compress&cs=tinysrgb&w=800', date: 'December 2023', author: 'YeYa', readTime: '4 min read', category: 'Seasonal' },
  { id: 6, title: 'The Art of French Tips', excerpt: 'Explore timeless French tip designs and modern variations.', image: 'https://images.pexels.com/photos/2849742/pexels-photo-2849742.jpeg?auto=compress&cs=tinysrgb&w=800', date: 'December 2023', author: 'YeYa', readTime: '5 min read', category: 'Trends' },
]

function Blog() {
  const featuredPost = blogPosts[0]
  const recentPosts = blogPosts.slice(1)

  return (
    <div className="pt-16 md:pt-20">
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-blush-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-blush-100 text-blush-700 rounded-full text-sm font-medium mb-4">Our Blog</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-gray-800 mb-6">Nail Tips & Inspiration</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Expert advice and nail care tips to keep your nails looking fabulous.</p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src={featuredPost.image} alt={featuredPost.title} className="w-full aspect-video object-cover" loading="lazy" />
            </div>
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-lavender-100 text-lavender-700 rounded-full text-sm">
                  <Tag className="w-3 h-3" />
                  <span>{featuredPost.category}</span>
                </span>
                <span className="text-sm text-gray-500">{featuredPost.date}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-playfair font-bold text-gray-800 mb-4">{featuredPost.title}</h2>
              <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-lavender-400 to-blush-400 flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{featuredPost.author}</p>
                    <p className="text-sm text-gray-500">{featuredPost.readTime}</p>
                  </div>
                </div>
                <Link to={`/blog/${featuredPost.id}`} className="inline-flex items-center space-x-2 text-lavender-600 font-medium hover:text-lavender-700 transition-colors">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gradient-to-b from-white to-lavender-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-playfair font-bold text-gray-800 mb-8">Latest Articles</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {recentPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
                <div className="aspect-video overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 bg-blush-100 text-blush-700 rounded-full text-xs">{post.category}</span>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>
                  <h3 className="text-lg font-playfair font-semibold text-gray-800 mb-2 group-hover:text-lavender-600 transition-colors">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                    <Link to={`/blog/${post.id}`} className="text-lavender-600 font-medium text-sm hover:text-lavender-700 transition-colors">
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
