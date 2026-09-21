import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const galleryImages = [
  { src: 'https://images.pexels.com/photos/20051316/pexels-photo-20051316.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Bacon cheeseburger with fries', category: 'fast-food' },
  { src: 'https://images.pexels.com/photos/5041495/pexels-photo-5041495.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Caribbean seafood platter', category: 'local' },
  { src: 'https://images.pexels.com/photos/24868933/pexels-photo-24868933.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Tropical cocktails', category: 'drinks' },
  { src: 'https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Grilled chicken wings', category: 'fast-food' },
  { src: 'https://images.pexels.com/photos/39143744/pexels-photo-39143744.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Fried plantain chips', category: 'snackets' },
  { src: 'https://images.pexels.com/photos/31596394/pexels-photo-31596394.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Margherita pizza', category: 'fast-food' },
  { src: 'https://images.pexels.com/photos/29481861/pexels-photo-29481861.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Double cheeseburger', category: 'fast-food' },
  { src: 'https://images.pexels.com/photos/5863518/pexels-photo-5863518.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Tiki cocktails at the bar', category: 'drinks' },
  { src: 'https://images.pexels.com/photos/29852479/pexels-photo-29852479.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Grilled fish with fries', category: 'local' },
  { src: 'https://images.pexels.com/photos/8862763/pexels-photo-8862763.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Crispy chicken wings', category: 'snackets' },
  { src: 'https://images.pexels.com/photos/28180062/pexels-photo-28180062.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Rum with lime and ice', category: 'drinks' },
  { src: 'https://images.pexels.com/photos/12362305/pexels-photo-12362305.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Fried plantains', category: 'local' },
]

const categories = [
  { id: 'all', label: 'All' },
  { id: 'fast-food', label: 'Fast Food' },
  { id: 'local', label: 'Local Dishes' },
  { id: 'drinks', label: 'Drinks & Bar' },
  { id: 'snackets', label: 'Snackets' },
]

function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const filteredImages = activeCategory === 'all' ? galleryImages : galleryImages.filter((img) => img.category === activeCategory)

  const openLightbox = (index) => {
    setCurrentIndex(index)
    setSelectedImage(filteredImages[index])
  }

  const closeLightbox = () => setSelectedImage(null)

  const navigatePrev = () => {
    const newIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
    setSelectedImage(filteredImages[newIndex])
  }

  const navigateNext = () => {
    const newIndex = currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
    setSelectedImage(filteredImages[newIndex])
  }

  return (
    <div className="pt-16 md:pt-20">
      <section className="relative py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-[#f59e0b]/20 text-[#fbbf24] rounded-full text-sm font-medium mb-4 border border-[#f59e0b]/30">Food Gallery</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6">Straight From the Kitchen</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">Browse our food, drinks, and snackets.</p>
        </div>
      </section>

      <section className="py-8 bg-[#2a1f17] backdrop-blur-sm sticky top-16 md:top-20 z-30 border-y border-[#f59e0b]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 md:px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === category.id ? 'bg-gradient-to-r from-[#f59e0b] to-[#b45309] text-white shadow-md' : 'bg-[#1a1410] text-gray-300 hover:bg-[#f59e0b]/10 hover:text-[#fbbf24] border border-[#f59e0b]/10'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#2a1f17] rounded-2xl p-4 md:p-6 shadow-lg border border-[#f59e0b]/10">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {filteredImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => openLightbox(index)}
                  className="relative aspect-square overflow-hidden rounded-xl md:rounded-2xl group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#f59e0b]"
                >
                  <img src={image.src} alt={image.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          <button onClick={closeLightbox} className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10" aria-label="Close">
            <X className="w-6 h-6 text-white" />
          </button>
          <button onClick={navigatePrev} className="absolute left-2 md:left-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors" aria-label="Previous">
            <ChevronLeft className="w-8 h-8 text-white" />
          </button>
          <button onClick={navigateNext} className="absolute right-2 md:right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors" aria-label="Next">
            <ChevronRight className="w-8 h-8 text-white" />
          </button>
          <div className="max-w-5xl max-h-[90vh] px-4 md:px-16">
            <img src={selectedImage.src} alt={selectedImage.alt} className="max-w-full max-h-[90vh] object-contain rounded-lg" />
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery
