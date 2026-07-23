'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop',
    alt: 'Sesión de breathwork grupal',
    category: 'breathwork',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop',
    alt: 'Meditación al amanecer',
    category: 'meditacion',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=600&fit=crop',
    alt: 'Inmersión en hielo',
    category: 'hielo',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=800&h=600&fit=crop',
    alt: 'Círculo de integración',
    category: 'comunidad',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&h=600&fit=crop',
    alt: 'Práctica de yoga',
    category: 'movimiento',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&h=600&fit=crop',
    alt: 'Conexión con la naturaleza',
    category: 'naturaleza',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?w=800&h=600&fit=crop',
    alt: 'Sesión de grupo',
    category: 'comunidad',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1602192509154-0b900ee1f851?w=800&h=600&fit=crop',
    alt: 'Momento de reflexión',
    category: 'meditacion',
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&h=600&fit=crop',
    alt: 'Experiencia inmersiva',
    category: 'hielo',
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
    alt: 'Respiración consciente',
    category: 'breathwork',
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?w=800&h=600&fit=crop',
    alt: 'Espacio sagrado',
    category: 'naturaleza',
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&h=600&fit=crop',
    alt: 'Movimiento consciente',
    category: 'movimiento',
  },
]

const categories = [
  { id: 'all', label: 'Todos' },
  { id: 'breathwork', label: 'Breathwork' },
  { id: 'hielo', label: 'Hielo' },
  { id: 'meditacion', label: 'Meditación' },
  { id: 'comunidad', label: 'Comunidad' },
  { id: 'naturaleza', label: 'Naturaleza' },
  { id: 'movimiento', label: 'Movimiento' },
]

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredImages = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory)

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage)
    if (direction === 'prev') {
      const newIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1
      setSelectedImage(filteredImages[newIndex].id)
    } else {
      const newIndex = currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1
      setSelectedImage(filteredImages[newIndex].id)
    }
  }

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-background/50 text-muted-foreground hover:bg-background hover:text-foreground'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl cursor-pointer"
                onClick={() => setSelectedImage(image.id)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-foreground font-medium text-sm">{image.alt}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-xl p-4"
              onClick={() => setSelectedImage(null)}
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-foreground hover:bg-card"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-6 w-6" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground hover:bg-card"
                onClick={(e) => {
                  e.stopPropagation()
                  navigateImage('prev')
                }}
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground hover:bg-card"
                onClick={(e) => {
                  e.stopPropagation()
                  navigateImage('next')
                }}
              >
                <ChevronRight className="h-8 w-8" />
              </Button>

              <motion.img
                key={selectedImage}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                src={filteredImages.find(img => img.id === selectedImage)?.src}
                alt={filteredImages.find(img => img.id === selectedImage)?.alt}
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
