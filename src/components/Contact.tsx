import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, MapPin, Send, Instagram, Twitter, Linkedin, ArrowUpRight } from 'lucide-react';

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com/flayer.std', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 bg-[#1A1A1A] text-white relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 40px, #ffffff 40px, #ffffff 41px)`,
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[#D32F2F] font-bold text-sm uppercase tracking-wider">Get in Touch</span>
              <h2 className="font-heading text-5xl lg:text-6xl font-bold mt-4 mb-8 leading-tight">
                LET'S CREATE
                <br />
                <span className="text-[#8D6E63]">TOGETHER</span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-white/60 text-lg mb-12 max-w-md"
            >
              Have a project in mind? I'd love to hear about it. Let's discuss how we can 
              bring your vision to life through stunning visual design.
            </motion.p>

            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 mb-12"
            >
              <motion.a
                href="mailto:saintflayer@gmail.com"
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-14 h-14 bg-white/10 border-3 border-white/20 flex items-center justify-center group-hover:bg-[#D32F2F] group-hover:border-[#D32F2F] transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white/50 text-sm uppercase tracking-wider font-bold">Email</p>
                  <p className="text-white font-heading font-bold text-lg">saintflayer@gmail.com</p>
                </div>
              </motion.a>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-14 h-14 bg-white/10 border-3 border-white/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white/50 text-sm uppercase tracking-wider font-bold">Location</p>
                  <p className="text-white font-heading font-bold text-lg">Yogyakarta, Indonesia</p>
                  <p className="text-white/50 text-sm">(Available Worldwide)</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex gap-4"
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + index * 0.1, type: 'spring' }}
                    whileHover={{ y: -5, backgroundColor: '#D32F2F', borderColor: '#D32F2F' }}
                    className="w-14 h-14 bg-white/10 border-3 border-white/20 flex items-center justify-center transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white/50 text-sm uppercase tracking-wider font-bold mb-3">
                  Your Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-6 py-4 bg-white/5 border-3 border-white/20 text-white placeholder-white/30 focus:outline-none focus:border-[#D32F2F] transition-colors font-heading"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-white/50 text-sm uppercase tracking-wider font-bold mb-3">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-6 py-4 bg-white/5 border-3 border-white/20 text-white placeholder-white/30 focus:outline-none focus:border-[#D32F2F] transition-colors font-heading"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-white/50 text-sm uppercase tracking-wider font-bold mb-3">
                  Your Message
                </label>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="w-full px-6 py-4 bg-white/5 border-3 border-white/20 text-white placeholder-white/30 focus:outline-none focus:border-[#D32F2F] transition-colors font-heading resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-[#D32F2F] text-white font-bold uppercase tracking-wider border-3 border-white shadow-[6px_6px_0px_0px_#ffffff] hover:shadow-[3px_3px_0px_0px_#ffffff] hover:translate-x-[3px] hover:translate-y-[3px] transition-all flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 pt-12 border-t-3 border-white/10 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div className="flex items-center gap-3">
            <img src="/assets/logo.jpg" alt="Flayer Studio" className="w-8 h-8 rounded-full object-cover border-2 border-white/20" />
            <span className="font-heading text-2xl font-bold">FLAYER STUDIO</span>
            <span className="text-[#D32F2F] text-2xl">.</span>
          </div>
          
          <p className="text-white/40 text-sm">
            © 2026 Flayer Studio. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/40 hover:text-white text-sm transition-colors flex items-center gap-1 uppercase tracking-wider font-bold">
              Privacy
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <a href="#" className="text-white/40 hover:text-white text-sm transition-colors flex items-center gap-1 uppercase tracking-wider font-bold">
              Terms
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
