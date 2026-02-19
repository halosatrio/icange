import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, Package, Palette, Shirt, Image as ImageIcon, Scroll, CreditCard, BookOpen, Monitor } from 'lucide-react';
import { artworks } from '../data/artworks';
import type { ArtworkCategory, ArtworkItem } from '../types';

const categories: { id: ArtworkCategory | 'all'; name: string; icon: typeof Package }[] = [
  { id: 'all', name: 'All Work', icon: ImageIcon },
  { id: 'packaging', name: 'Packaging', icon: Package },
  { id: 'illustration', name: 'Illustrations', icon: Palette },
  { id: 'tarot', name: 'Tarot', icon: Scroll },
  { id: 'tshirt', name: 'Apparel', icon: Shirt },
  { id: 'poster', name: 'Posters', icon: Monitor },
  { id: 'card', name: 'Cards', icon: CreditCard },
  { id: 'story', name: 'Story', icon: BookOpen },
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<ArtworkCategory | 'all'>('all');
  const [selectedArtwork, setSelectedArtwork] = useState<ArtworkItem | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const filteredArtworks = selectedCategory === 'all'
    ? artworks
    : artworks.filter(art => art.category === selectedCategory);

  return (
    <section id="work" className="py-32 bg-white" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <span className="text-[#D32F2F] font-bold text-sm uppercase tracking-wider">Portfolio</span>
              <h2 className="font-heading text-5xl lg:text-7xl font-bold text-[#1A1A1A] mt-4 leading-tight">
                SELECTED
                <br />
                <span className="text-[#8D6E63]">WORKS</span>
              </h2>
            </div>
            <p className="text-[#1A1A1A]/60 max-w-md text-lg">
              A curated collection of commercial and personal projects spanning packaging, 
              illustration, and brand identity.
            </p>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-16 pb-8 border-b-3 border-[#1A1A1A]/10"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 font-bold text-sm uppercase tracking-wider border-3 transition-all ${
                  selectedCategory === category.id
                    ? 'bg-[#D32F2F] text-white border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A]'
                    : 'bg-white text-[#1A1A1A] border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] hover:shadow-[2px_2px_0px_0px_#1A1A1A] hover:translate-x-[2px] hover:translate-y-[2px]'
                }`}
              >
                <Icon className="w-4 h-4" />
                {category.name}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Masonry Grid */}
        <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredArtworks.map((artwork, index) => (
              <motion.div
                key={artwork.id}
                layout
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.05,
                  type: 'spring',
                  stiffness: 100,
                  damping: 15,
                }}
                onClick={() => setSelectedArtwork(artwork)}
                className="break-inside-avoid group cursor-pointer"
              >
                <div className="relative border-3 border-[#1A1A1A] bg-[#F5F5F5] overflow-hidden">
                  {/* Image */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="relative"
                  >
                    <img
                      src={artwork.image}
                      alt={artwork.title}
                      className={`w-full object-cover ${
                        artwork.aspectRatio === 'portrait' ? 'aspect-[3/4]' :
                        artwork.aspectRatio === 'landscape' ? 'aspect-[4/3]' :
                        'aspect-square'
                      }`}
                    />
                    
                    {/* Hover Overlay */}
                    <motion.div
                      initial={{ opacity: 0, y: '100%' }}
                      whileHover={{ opacity: 1, y: 0 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                      className="absolute inset-0 bg-[#D32F2F] flex flex-col justify-end p-6"
                    >
                      <span className="text-white/70 text-xs uppercase tracking-wider font-bold mb-1">
                        {artwork.category}
                      </span>
                      <h3 className="text-white font-heading text-2xl font-bold mb-2">
                        {artwork.title}
                      </h3>
                      {artwork.client && (
                        <p className="text-white/80 text-sm">
                          Client: {artwork.client}
                        </p>
                      )}
                      <div className="mt-4 flex items-center gap-2 text-white font-bold text-sm">
                        <span>View Project</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
                
                {/* Title Below */}
                <div className="mt-3 flex items-center justify-between">
                  <h3 className="font-heading text-lg font-bold text-[#1A1A1A]">{artwork.title}</h3>
                  <span className="text-xs text-[#1A1A1A]/50 uppercase tracking-wider font-bold">
                    {artwork.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedArtwork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-white flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedArtwork(null)}
          >
            <button
              onClick={() => setSelectedArtwork(null)}
              className="absolute top-6 right-6 w-14 h-14 bg-[#1A1A1A] text-white flex items-center justify-center border-3 border-[#1A1A1A] hover:bg-[#D32F2F] transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="border-3 border-[#1A1A1A] bg-[#F5F5F5] p-4 md:p-8">
                <img
                  src={selectedArtwork.image}
                  alt={selectedArtwork.title}
                  className="w-full max-h-[70vh] object-contain"
                />
                <div className="mt-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                  <div>
                    <span className="text-[#D32F2F] font-bold text-sm uppercase tracking-wider">
                      {selectedArtwork.category}
                    </span>
                    <h3 className="font-heading text-3xl font-bold text-[#1A1A1A] mt-2">
                      {selectedArtwork.title}
                    </h3>
                    {selectedArtwork.client && (
                      <p className="text-[#1A1A1A]/60 mt-1">
                        Client: {selectedArtwork.client} {selectedArtwork.year && `• ${selectedArtwork.year}`}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
