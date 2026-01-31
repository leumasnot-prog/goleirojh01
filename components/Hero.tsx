
import React from 'react';
import { motion } from 'framer-motion';
import { ATHLETE_DATA } from '../constants';
import { useLanguage } from '../LanguageContext';

const Hero: React.FC = () => {
  const { t, language } = useLanguage();
  return (
    <section id="inicio" className="relative min-h-screen w-full flex items-center overflow-hidden bg-transparent pt-20 md:pt-24 pb-16 md:pb-0">
      {/* Background Graphic Element - hidden on mobile for performance */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18vw] font-display text-white/[0.02] whitespace-nowrap select-none pointer-events-none z-0 tracking-tighter font-black"
      >
        GOALKEEPING
      </motion.div>

      {/* Mobile Layout: Enhanced with decorative elements */}
      <div className="w-full lg:hidden relative overflow-hidden">
        {/* Decorative Background Elements */}

        {/* Large jersey number watermark */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 0.03, x: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="absolute -left-8 top-20 text-[20rem] font-display font-black text-white pointer-events-none select-none leading-none"
        >
          01
        </motion.div>

        {/* Diagonal accent lines - top left */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute top-16 -left-4 w-32 h-[2px] bg-gradient-to-r from-red-600 to-transparent rotate-[-35deg] origin-left"
        />
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute top-24 -left-4 w-20 h-[1px] bg-gradient-to-r from-red-600/50 to-transparent rotate-[-35deg] origin-left"
        />

        {/* Diagonal accent lines - top right */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute top-16 -right-4 w-32 h-[2px] bg-gradient-to-l from-red-600 to-transparent rotate-[35deg] origin-right"
        />
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute top-24 -right-4 w-20 h-[1px] bg-gradient-to-l from-red-600/50 to-transparent rotate-[35deg] origin-right"
        />

        {/* Vertical decorative lines on sides */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute left-4 top-32 w-[1px] h-40 bg-gradient-to-b from-transparent via-red-600/30 to-transparent origin-top"
        />
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute right-4 top-32 w-[1px] h-40 bg-gradient-to-b from-transparent via-red-600/30 to-transparent origin-top"
        />

        {/* Floating dots decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute left-8 top-40 w-1 h-1 rounded-full bg-red-500"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="absolute left-12 top-48 w-1.5 h-1.5 rounded-full bg-red-600"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute right-8 top-40 w-1 h-1 rounded-full bg-red-500"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="absolute right-12 top-48 w-1.5 h-1.5 rounded-full bg-red-600"
        />

        <div className="flex flex-col items-center text-center relative z-10 px-4">
          {/* Profile Image - Enhanced with decorative frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative z-10"
          >
            {/* Animated red glow behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] bg-red-600/25 blur-[100px] rounded-full pointer-events-none animate-pulse"></div>

            {/* Secondary subtle glow */}
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-red-500/20 blur-[60px] rounded-full pointer-events-none"
            />

            {/* Corner brackets decoration */}
            <div className="absolute -top-3 -left-3 w-6 h-6 border-l-2 border-t-2 border-red-600/60"></div>
            <div className="absolute -top-3 -right-3 w-6 h-6 border-r-2 border-t-2 border-red-600/60"></div>
            <div className="absolute -bottom-3 -left-3 w-6 h-6 border-l-2 border-b-2 border-red-600/60"></div>
            <div className="absolute -bottom-3 -right-3 w-6 h-6 border-r-2 border-b-2 border-red-600/60"></div>

            {/* Profile image with enhanced border */}
            <div className="relative aspect-[4/5] w-[220px] max-w-[65vw]">
              <img
                src="/views/perfil.png"
                alt="Atleta Profissional"
                loading="eager"
                className="w-full h-full object-cover rounded-2xl border-2 border-white/20 shadow-[0_0_40px_rgba(220,38,38,0.15)]"
              />

              {/* Image overlay gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </motion.div>

          {/* Animated accent line above name */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-24 h-[2px] bg-gradient-to-r from-transparent via-red-600 to-transparent mt-6 mb-2"
          />

          {/* Name - Overlapping with enhanced styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative z-20 w-full"
          >
            {/* Name text with shadow */}
            <h1 className="text-[3rem] sm:text-[4rem] font-display font-extrabold leading-[0.9] tracking-tight text-glow uppercase whitespace-nowrap text-center drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
              {ATHLETE_DATA.name}
            </h1>
          </motion.div>

          {/* Animated accent line below name */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="w-48 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent mt-2 mb-4"
          />

          {/* Position & Club with enhanced styling */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col gap-3 items-center"
          >
            <div className="flex items-center gap-4">
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: 32 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="h-[1px] bg-gradient-to-r from-transparent to-red-600"
              />
              <p className="text-sm text-gray-300 font-tech font-bold tracking-[0.2em] flex items-center gap-3">
                {t.athlete.goalkeeper.toUpperCase()}
                <span className="w-2 h-2 bg-red-600 rotate-45"></span>
                {t.athlete.leftFooted.toUpperCase()}
              </p>
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: 32 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="h-[1px] bg-gradient-to-l from-transparent to-red-600"
              />
            </div>
            <div className="flex items-center gap-3">
              {ATHLETE_DATA.clubLogo && (
                <img src={ATHLETE_DATA.clubLogo} alt={ATHLETE_DATA.club} className="w-8 h-8 object-contain" />
              )}
              <p className="text-2xl text-white font-display font-bold tracking-tight">
                {ATHLETE_DATA.club.toUpperCase()}
              </p>
            </div>
          </motion.div>

          {/* CTA Button with enhanced styling */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="pt-8 pb-8"
          >
            <a
              href="#midia"
              className="relative inline-block px-10 py-4 bg-red-600 text-white font-tech font-bold uppercase tracking-[0.15em] text-[10px] active:scale-95 transition-all duration-300 shadow-[0_10px_40px_rgba(220,38,38,0.4)] overflow-hidden group"
            >
              {/* Button shine effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-active:translate-x-full transition-transform duration-500"></span>
              <span className="relative">{t.hero.cta}</span>
            </a>
          </motion.div>

          {/* Scroll indicator for mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5, y: [0, 8, 0] }}
            transition={{ opacity: { delay: 1.2 }, y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" } }}
            className="flex flex-col items-center gap-2 mt-4"
          >
            <span className="text-[8px] font-tech uppercase tracking-[0.3em] text-gray-500">{t.hero.scroll}</span>
            <div className="w-4 h-7 rounded-full border border-gray-600 flex items-start justify-center p-1">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-2 bg-red-600 rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:grid max-w-7xl mx-auto px-6 w-full grid-cols-2 items-center relative z-10">
        <div className="space-y-8 text-left">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-[9.5rem] font-display font-extrabold leading-[0.85] tracking-tight text-glow uppercase"
          >
            {ATHLETE_DATA.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col gap-2"
          >
            <p className="text-xl text-gray-400 font-tech font-bold tracking-[0.2em] flex items-center gap-4">
              {t.athlete.goalkeeper.toUpperCase()}
              <span className="w-8 h-px bg-red-600/50"></span>
              {t.athlete.leftFooted.toUpperCase()}
            </p>
            <div className="flex items-center gap-4">
              {ATHLETE_DATA.clubLogo && (
                <img src={ATHLETE_DATA.clubLogo} alt={ATHLETE_DATA.club} className="w-12 h-12 object-contain" />
              )}
              <p className="text-4xl text-white font-display font-bold tracking-tight">
                {ATHLETE_DATA.club.toUpperCase()}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="pt-4"
          >
            <a
              href="#midia"
              className="px-12 py-5 bg-red-600 text-white font-tech font-bold uppercase tracking-[0.2em] text-[11px] active:scale-95 hover:bg-white hover:text-black transition-all duration-300 shadow-[0_10px_30px_rgba(220,38,38,0.3)]"
            >
              {t.hero.cta}
            </a>
          </motion.div>
        </div>

        {/* Desktop Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative overflow-visible"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-red-600/15 blur-[100px] rounded-full animate-pulse pointer-events-none"></div>
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto group overflow-visible">
            <img
              src="/views/perfil.png"
              alt="Atleta Profissional"
              loading="lazy"
              className="w-full h-full object-cover rounded-[40px] border border-white/10 transition-all duration-500 ease-out group-hover:scale-105"
            />
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;
