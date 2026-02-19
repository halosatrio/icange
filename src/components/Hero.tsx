import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';

const packagingImages = [
  '/assets/packaging-001.png',
  '/assets/packaging-002.png',
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen bg-white overflow-hidden">
      {/* Grid Lines Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-[#1A1A1A]/10" />
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#1A1A1A]/10" />
        <div className="absolute left-3/4 top-0 bottom-0 w-px bg-[#1A1A1A]/10" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 min-h-screen gap-8 pt-20">
          {/* Left Side - Text Content */}
          <motion.div 
            style={{ y, opacity }}
            className="flex flex-col justify-center py-20 lg:py-0"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-flex items-center gap-2 text-sm font-medium text-[#8D6E63] uppercase tracking-wider mb-6">
                <Sparkles className="w-4 h-4" />
                Flayer Studio — Design & Illustration
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#1A1A1A] leading-[0.9] mb-8"
            >
              DESIGN
              <br />
              <span className="text-[#D32F2F]">WITH</span>
              <br />
              SOUL
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg text-[#1A1A1A]/70 max-w-md mb-10"
            >
              Bridging the gap between artistic illustration and commercial viability. 
              Creating designs that tell stories and drive results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex gap-4"
            >
              <motion.a
                href="#work"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[#D32F2F] text-white font-bold text-sm uppercase tracking-wider border-3 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] hover:shadow-[2px_2px_0px_0px_#1A1A1A] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              >
                View Work
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-[#1A1A1A] font-bold text-sm uppercase tracking-wider border-3 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] hover:shadow-[2px_2px_0px_0px_#1A1A1A] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              >
                Get in Touch
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side - Image Slider */}
          <div className="relative flex items-center justify-center lg:justify-end">
            {/* Decorative Elements */}
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: 'easeInOut' 
              }}
              className="absolute top-20 right-10 w-32 h-32 bg-[#8D6E63]/20 rounded-full -z-10"
            />
            <motion.div
              animate={{ 
                y: [0, 20, 0],
                rotate: [0, -5, 0],
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: 'easeInOut',
                delay: 1,
              }}
              className="absolute bottom-32 left-0 w-24 h-24 bg-[#D32F2F]/10 rounded-full -z-10"
            />

            {/* Main Image Container - Breaking Grid */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ 
                duration: 1, 
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="relative w-full max-w-lg"
            >
              {/* Packaging Image with border */}
              <div className="relative border-3 border-[#1A1A1A] bg-[#F5F5F5] p-4 shadow-[8px_8px_0px_0px_#1A1A1A]">
                <motion.img
                  src={packagingImages[1]}
                  alt="Red Pine Packaging"
                  className="w-full h-auto object-cover"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                />
                
                {/* Floating Tag */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="absolute -bottom-4 -left-4 bg-[#D32F2F] text-white px-4 py-2 border-3 border-[#1A1A1A] font-bold text-sm"
                >
                  RED PINE
                </motion.div>
              </div>

              {/* Secondary Image - Breaking the grid */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="absolute -bottom-20 -right-8 w-48 border-3 border-[#1A1A1A] bg-white p-3 shadow-[6px_6px_0px_0px_#1A1A1A] rotate-6"
              >
                <img
                  src={packagingImages[0]}
                  alt="Blanco Coffee"
                  className="w-full h-auto"
                />
                <div className="mt-2 text-center font-bold text-xs text-[#1A1A1A]">
                  BLANCO COFFEE
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#work"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-[#1A1A1A]/50"
        >
          <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
          <ArrowDown className="w-5 h-5" />
        </motion.a>
      </motion.div>
    </section>
  );
}
