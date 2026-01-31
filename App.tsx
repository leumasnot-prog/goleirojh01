
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Bio from './components/Bio';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const App: React.FC = () => {
  const [particles, setParticles] = useState<{ id: number; left: string; size: string; delay: string; duration: string; color: string }[]>([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, t, toggleLanguage } = useLanguage();

  useEffect(() => {
    // Gerar dados de partículas estáticas
    const newParticles = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 1}px`,
      delay: `${Math.random() * 10}s`,
      duration: `${Math.random() * 15 + 10}s`,
      color: Math.random() > 0.5 ? '#ffffff' : '#dc2626'
    }));
    setParticles(newParticles);
  }, []);

  // Close menu when clicking a link
  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: '#inicio', label: t.nav.inicio },
    { href: '#stats', label: t.nav.stats },
    { href: '#perfil', label: t.nav.perfil },
    { href: '#midia', label: t.nav.midia },
    { href: '#contato', label: t.nav.contato },
  ];

  return (
    <div className="min-h-screen relative text-white selection:bg-red-600 selection:text-white font-body antialiased">
      {/* Background Layers */}
      <div className="bg-carbon"></div>
      <div className="bg-texture"></div>
      <div className="light-leak leak-1"></div>
      <div className="light-leak leak-2"></div>

      {/* Particles Layer */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        {particles.map(p => (
          <div
            key={p.id}
            className="particle"
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              top: '110vh',
              backgroundColor: p.color,
              animationDelay: p.delay,
              animationDuration: p.duration
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/5 px-4 md:px-6 py-4 md:py-5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="font-display text-xl md:text-2xl tracking-tighter text-red-600 flex items-center gap-2 md:gap-3">
            <span className="px-1.5 md:px-2 py-0.5 bg-red-600 text-white text-xs md:text-sm font-black italic rounded-[2px]">JH</span>
            01
          </span>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10 text-[10px] font-tech font-bold uppercase tracking-[0.3em] text-gray-300">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="hover:text-red-500 transition-all">{link.label}</a>
            ))}
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-1.5 border border-white/20 hover:border-red-600 hover:text-red-500 transition-all rounded-sm"
              aria-label="Toggle Language"
            >
              <Globe size={14} />
              <span>{language === 'pt' ? 'EN' : 'PT'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white active:text-red-500 transition-colors"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/80 z-[55] md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: 'easeOut' }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-[#0a0a0a] border-l border-white/10 z-[60] md:hidden flex flex-col"
            >
              {/* Sidebar Header */}
              <div className="flex justify-between items-center p-6 border-b border-white/5">
                <span className="font-display text-xl tracking-tighter text-red-600 flex items-center gap-2">
                  <span className="px-1.5 py-0.5 bg-red-600 text-white text-xs font-black italic rounded-[2px]">JH</span>
                  01
                </span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 flex flex-col py-8 px-6">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={handleNavClick}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 + 0.1 }}
                    className="py-4 text-lg font-tech font-bold uppercase tracking-[0.2em] text-gray-300 hover:text-red-500 active:text-red-500 transition-colors border-b border-white/5"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              {/* Language Toggle & Footer Info */}
              <div className="p-6 border-t border-white/5 space-y-4">
                <button
                  onClick={toggleLanguage}
                  className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-white/20 hover:border-red-600 text-gray-300 hover:text-red-500 transition-all rounded"
                >
                  <Globe size={18} />
                  <span className="font-tech font-bold uppercase tracking-widest text-sm">
                    {language === 'pt' ? 'English' : 'Português'}
                  </span>
                </button>
                <p className="text-[10px] font-tech text-gray-600 uppercase tracking-widest text-center">
                  © 2026 Jhonatan
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <main className="relative z-10">
        <Hero />
        <Stats />
        <Bio />
        <Gallery />
      </main>

      <Footer />
    </div>
  );
};

export default App;
