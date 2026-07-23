'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop',
    alt: 'Bienvenida a la jornada',
    category: 'espacio',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=600&fit=crop',
    alt: 'Trabajo individual de reflexión',
    category: 'verdad',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?w=800&h=600&fit=crop',
    alt: 'Momento de la decisión',
    category: 'decision',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1543807535-eceef0bc6599?w=800&h=600&fit=crop',
    alt: 'Círculo de comunidad',
    category: 'comunidad',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&h=600&fit=crop',
    alt: 'Mujeres compartiendo la jornada',
    category: 'comunidad',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&h=600&fit=crop',
    alt: 'Espacio preparado con detalle',
    category: 'espacio',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&h=600&fit=crop',
    alt: 'Escritura y material personal',
    category: 'verdad',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&h=600&fit=crop',
    alt: 'Encuentro entre mujeres',
    category: 'comunidad',
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop',
    alt: 'Camino hacia una decisión',
    category: 'decision',
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&h=600&fit=crop',
    alt: 'Detalle del espacio',
    category: 'espacio',
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=600&fit=crop',
    alt: 'Retrato de una participante',
    category: 'verdad',
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop',
    alt: 'Cierre de la jornada',
    category: 'decision',
  },
]

const categories = [
  { id: 'all', label: 'Todos' },
  { id: 'espacio', label: 'El Espacio' },
  { id: 'verdad', label: 'La Verdad' },
  { id: 'decision', label: 'La Decisión' },
  { id: 'comunidad', label: 'La Comunidad' },
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
