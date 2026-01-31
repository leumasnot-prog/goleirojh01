
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, X } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Gallery: React.FC = () => {
  const { t } = useLanguage();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section id="midia" className="py-16 md:py-24 bg-black scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-16 gap-4"
        >
          <div>
            <h2 className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-red-600 mb-2">{t.gallery.title}</h2>
            <p className="text-3xl md:text-5xl font-oswald font-bold text-glow">{t.gallery.subtitle}</p>
          </div>
          <button className="text-[10px] md:text-xs font-bold uppercase tracking-widest px-4 md:px-6 py-2 border border-white/20 hover:border-white transition-all">
            {t.gallery.viewAlbum}
          </button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 mb-8 md:mb-12">
          {/* Main Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-8 aspect-video bg-[#111] border border-white/5 relative group cursor-pointer overflow-hidden rounded-lg"
          >
            {isVideoPlaying ? (
              <>
                <video
                  src="/views/goleiro.mp4"
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  playsInline
                />
                <button
                  onClick={() => setIsVideoPlaying(false)}
                  className="absolute top-3 right-3 md:top-4 md:right-4 w-8 h-8 md:w-10 md:h-10 bg-black/80 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors z-20"
                >
                  <X size={16} className="md:hidden" />
                  <X size={20} className="hidden md:block" />
                </button>
              </>
            ) : (
              <>
                <img
                  src="/views/foto2.jpeg"
                  loading="lazy"
                  className="w-full h-full object-cover opacity-70 group-hover:scale-105 group-hover:opacity-90 transition-all duration-500"
                  alt="Thumbnail do Vídeo"
                  onClick={() => setIsVideoPlaying(true)}
                />
                <div className="absolute inset-0 flex items-center justify-center" onClick={() => setIsVideoPlaying(true)}>
                  <div className="w-14 h-14 md:w-20 md:h-20 bg-red-600 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(220,38,38,0.5)] active:scale-95 group-hover:scale-110 transition-all">
                    <Play fill="white" size={24} className="md:hidden" />
                    <Play fill="white" size={32} className="hidden md:block" />
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 right-3 md:bottom-6 md:left-6 md:right-6 flex justify-between items-end pointer-events-none">
                  <div>
                    <p className="text-[10px] md:text-sm font-bold uppercase tracking-widest opacity-60">{t.gallery.highlightClip}</p>
                    <p className="text-base md:text-2xl font-oswald font-bold">{t.gallery.seasonHighlights}</p>
                  </div>
                  <p className="text-xs md:text-sm font-bold">04:32</p>
                </div>
              </>
            )}
          </motion.div>

          <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="aspect-square lg:aspect-auto lg:h-full bg-[#111] border border-white/5 rounded-lg overflow-hidden group cursor-pointer"
            >
              <img src="/views/foto1.jpeg" loading="lazy" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" alt="Galeria 1" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="aspect-square lg:aspect-auto lg:h-full bg-[#111] border border-white/5 rounded-lg overflow-hidden group cursor-pointer"
            >
              <img src="/views/foto2.jpeg" loading="lazy" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" alt="Galeria 2" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
