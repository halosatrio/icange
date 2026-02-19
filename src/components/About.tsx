import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Palette, Package, Brush, Award, Users, Zap } from 'lucide-react';

const skills = [
  { icon: Package, title: 'Brand Identity', desc: 'Packaging & visual systems' },
  { icon: Palette, title: 'Illustration', desc: 'Digital & traditional art' },
  { icon: Brush, title: 'Graphic Design', desc: 'Print & digital media' },
  { icon: Award, title: 'Art Direction', desc: 'Creative leadership' },
  { icon: Users, title: 'Client Work', desc: 'Commercial partnerships' },
  { icon: Zap, title: 'Fast Delivery', desc: 'Efficient workflows' },
];

const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '70+', label: 'Projects Completed' },
  { value: '50+', label: 'Happy Clients' },
  { value: '100%', label: 'Passion' },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden" ref={ref}>
      {/* Background Grid Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-[#1A1A1A]/5" />
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#1A1A1A]/5" />
        <div className="absolute left-3/4 top-0 bottom-0 w-px bg-[#1A1A1A]/5" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Image & Stats */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Main Image with Frame */}
              <div className="relative border-3 border-[#1A1A1A] bg-[#F5F5F5] p-4 shadow-[12px_12px_0px_0px_#1A1A1A]">
                <img
                  src="/assets/profile.png"
                  alt="Designer Profile"
                  className="w-full aspect-square object-cover"
                />
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
                className="absolute -bottom-6 -right-6 bg-[#D32F2F] text-white px-6 py-4 border-3 border-[#1A1A1A] shadow-[6px_6px_0px_0px_#1A1A1A]"
              >
                <p className="font-heading font-bold text-2xl">5+</p>
                <p className="text-sm font-bold uppercase tracking-wider">Years</p>
              </motion.div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-4 gap-4 mt-12"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-center p-4 border-3 border-[#1A1A1A] bg-white"
                >
                  <p className="font-heading text-2xl font-bold text-[#D32F2F]">{stat.value}</p>
                  <p className="text-xs font-bold text-[#1A1A1A]/60 uppercase tracking-wider mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[#D32F2F] font-bold text-sm uppercase tracking-wider">About Flayer Studio</span>
              <h2 className="font-heading text-5xl lg:text-6xl font-bold text-[#1A1A1A] mt-4 mb-8 leading-tight">
                DESIGNING WITH
                <br />
                <span className="text-[#8D6E63]">PURPOSE</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="space-y-6 text-[#1A1A1A]/70 text-lg mb-12"
            >
              <p>
                Flayer Studio is a creative design studio based in Yogyakarta, Indonesia, specializing 
                in graphic design and illustration. We believe in the power of visual storytelling 
                and bridge the gap between artistic expression and commercial viability.
              </p>
              <p>
                With over 70 projects completed for 50+ happy clients worldwide, we bring a unique 
                perspective that combines creative intuition with strategic thinking. Every project 
                is an opportunity to solve problems through design.
              </p>
            </motion.div>

            {/* Skills Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 5, backgroundColor: '#F5F5F5' }}
                    className="flex items-start gap-4 p-4 border-3 border-[#1A1A1A] bg-white transition-colors"
                  >
                    <div className="w-12 h-12 bg-[#D32F2F] border-3 border-[#1A1A1A] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-[#1A1A1A]">{skill.title}</h4>
                      <p className="text-sm text-[#1A1A1A]/60">{skill.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
