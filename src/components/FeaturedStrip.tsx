import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const coffeeImages = [
  '/assets/packaging-001.png',
  '/assets/packaging-002.png',
];

export default function FeaturedStrip() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);

  return (
    <section ref={containerRef} className="py-32 bg-[#F5F5F5] overflow-hidden border-y-3 border-[#1A1A1A]">
      <div className="container-custom mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-4"
        >
          <div className="w-12 h-12 bg-[#D32F2F] border-3 border-[#1A1A1A] flex items-center justify-center">
            <span className="text-white font-bold text-xl">B</span>
          </div>
          <div>
            <span className="text-[#8D6E63] font-bold text-sm uppercase tracking-wider">Featured Project</span>
            <h3 className="font-heading text-2xl font-bold text-[#1A1A1A]">Blanco Coffee Branding</h3>
          </div>
        </motion.div>
      </div>

      {/* Horizontal Scrolling Shelf */}
      <motion.div 
        style={{ x }}
        className="flex gap-8 px-8"
      >
        {[...coffeeImages, ...coffeeImages, ...coffeeImages].map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -10, rotate: 2 }}
            className="flex-shrink-0 w-72 md:w-96"
          >
            <div className="border-3 border-[#1A1A1A] bg-white p-6 shadow-[8px_8px_0px_0px_#1A1A1A]">
              <img
                src={img}
                alt={`Blanco Coffee ${index + 1}`}
                className="w-full h-80 object-contain"
              />
              <div className="mt-4 pt-4 border-t-2 border-[#1A1A1A]/10">
                <p className="font-heading font-bold text-[#1A1A1A]">
                  {index % 2 === 0 ? 'Original Blend' : 'Red Pine Edition'}
                </p>
                <p className="text-sm text-[#1A1A1A]/50">Packaging Design</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Floating Decorative Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-10 top-20 w-20 h-20 bg-[#8D6E63]/20 rounded-full -z-10"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute right-20 bottom-20 w-16 h-16 bg-[#D32F2F]/10 rounded-full -z-10"
      />
    </section>
  );
}
