import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const galleryImages = [
  { src: 'https://images.pexels.com/photos/3997373/pexels-photo-3997373.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Elegant acrylic nails', category: 'acrylics' },
  { src: 'https://images.pexels.com/photos/2849742/pexels-photo-2849742.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Gel polish', category: 'gel' },
  { src: 'https://images.pexels.com/photos/4957787/pexels-photo-4957787.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Pedicure', category: 'pedicure' },
  { src: 'https://images.pexels.com/photos/3997371/pexels-photo-3997371.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Manicure', category: 'manicure' },
  { src: 'https://images.pexels.com/photos/4957805/pexels-photo-4957805.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Nail art', category: 'nail-art' },
  { src: 'https://images.pexels.com/photos/2849742/pexels-photo-2849742.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'French tips', category: 'gel' },
  { src: 'https://images.pexels.com/photos/3997373/pexels-photo-3997373.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Stiletto nails', category: 'acrylics' },
  { src: 'https://images.pexels.com/photos/4957805/pexels-photo-4957805.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Colorful design', category: 'nail-art' },
  { src: 'https://images.pexels.com/photos/3997371/pexels-photo-3997371.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Spa manicure', category: 'manicure' },
  { src: 'https://images.pexels.com/photos/4957787/pexels-photo-4957787.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Pedicure spa', category: 'pedicure' },
  { src: 'https://images.pexels.com/photos/2849742/pexels-photo-2849742.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Ombre nails', category: 'gel' },
  { src: 'https://images.pexels.com/photos/3997373/pexels-photo-3997373.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Long nails', category: 'acrylics' },
]

const categories = [
  { id: 'all', label: 'All' },
  { id: 'manicure', label: 'Manicures' },
  { id: 'pedicure', label: 'Pedicures' },
  { id: 'acrylics', label: 'Acrylics' },
  { id: 'gel', label: 'Gel' },
  { id: 'nail-art', label: 'Nail Art' },
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
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-lavender-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-lavender-100 text-lavender-700 rounded-full text-sm font-medium mb-4">Our Portfolio</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-gray-800 mb-6">Nail Gallery</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Browse our collection of stunning nail designs.</p>
        </div>
      </section>

      <section className="py-8 bg-white sticky top-16 md:top-20 z-30 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 md:px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === category.id ? 'bg-gradient-to-r from-lavender-500 to-blush-500 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-lavender-50 hover:text-lavender-700'
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {filteredImages.map((image, index) => (
              <button
                key={index}
                onClick={() => openLightbox(index)}
                className="relative aspect-square overflow-hidden rounded-xl md:rounded-2xl group cursor-pointer focus:outline-none focus:ring-2 focus:ring-lavender-500"
              >
                <img src={image.src} alt={image.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
              </button>
            ))}
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
