
import React from 'react';
import { motion } from 'framer-motion';
import { ATHLETE_DATA } from '../constants';
import { Instagram, Mail, Phone, ExternalLink, MessageCircle } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const TypewriterText: React.FC<{ text: string }> = ({ text }) => {
  const characters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 10,
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {characters.map((char, index) => (
        <motion.span variants={child} key={index} className="inline-block whitespace-pre">
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = React.useState({
    name: '',
    club: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = ATHLETE_DATA.whatsapp.replace(/\D/g, '');

    let text = "";
    if (!formData.name && !formData.club && !formData.message) {
      text = encodeURIComponent("Olá Jhonatan! Gostaria de entrar em contato para saber mais sobre sua carreira.");
    } else {
      text = encodeURIComponent(
        `*Contato via Site por ${formData.name || 'Interessado'}*\n\n` +
        `*Clube/Agência:* ${formData.club || 'Não informado'}\n` +
        `*Mensagem:* ${formData.message || 'Sem mensagem adicional.'}`
      );
    }

    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  return (
    <footer id="contato" className="bg-[#050505] pt-16 md:pt-24 pb-8 md:pb-12 border-t border-white/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-red-600 mb-2">{t.footer.title}</h2>
            <div className="text-2xl md:text-5xl font-oswald font-bold mb-4 md:mb-8 text-white">
              <TypewriterText text={t.footer.subtitle} />
            </div>
            <p className="text-sm md:text-base text-gray-500 max-w-md leading-relaxed mb-6 md:mb-10">
              {t.footer.description}
            </p>

            <div className="space-y-4 md:space-y-6">
              <motion.a
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                href={`https://instagram.com/${ATHLETE_DATA.instagram.replace('@', '')}`}
                target="_blank"
                className="flex items-center gap-3 md:gap-4 text-base md:text-xl font-bold hover:text-red-600 active:text-red-600 transition-colors group"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 group-hover:border-red-600/50 transition-colors">
                  <Instagram size={20} className="md:hidden" />
                  <Instagram size={24} className="hidden md:block" />
                </div>
                {ATHLETE_DATA.instagram}
                <ExternalLink size={14} className="opacity-0 group-hover:opacity-40 transition-opacity" />
              </motion.a>

              <motion.a
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 }}
                href={`mailto:${ATHLETE_DATA.email}`}
                className="flex items-center gap-3 md:gap-4 text-base md:text-xl font-bold hover:text-red-600 active:text-red-600 transition-colors group"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 group-hover:border-red-600/50 transition-colors">
                  <Mail size={20} className="md:hidden" />
                  <Mail size={24} className="hidden md:block" />
                </div>
                {ATHLETE_DATA.email}
              </motion.a>

              <motion.a
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                href={`https://wa.me/${ATHLETE_DATA.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                className="flex items-center gap-3 md:gap-4 text-base md:text-xl font-bold hover:text-red-600 active:text-red-600 transition-colors group"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 group-hover:border-red-600/50 transition-colors">
                  <Phone size={20} className="md:hidden" />
                  <Phone size={24} className="hidden md:block" />
                </div>
                {ATHLETE_DATA.whatsapp}
                <ExternalLink size={14} className="opacity-0 group-hover:opacity-40 transition-opacity" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[#111] p-6 md:p-10 rounded-2xl border border-white/5 shadow-2xl relative overflow-hidden group"
          >
            {/* Subtle background glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-red-600/10 blur-[80px] rounded-full group-hover:bg-red-600/20 transition-all duration-700"></div>

            <form onSubmit={handleSubmit} className="relative z-10 space-y-4 md:space-y-6">
              <div>
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-2 block">{t.footer.formName}</label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-white/10 p-3 md:p-4 text-sm md:text-base focus:border-red-600 outline-none transition-all rounded-lg placeholder:text-gray-700 focus:bg-black"
                  placeholder={t.footer.formNamePlaceholder}
                />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-2 block">{t.footer.formClub}</label>
                <input
                  id="club"
                  type="text"
                  value={formData.club}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-white/10 p-3 md:p-4 text-sm md:text-base focus:border-red-600 outline-none transition-all rounded-lg placeholder:text-gray-700 focus:bg-black"
                  placeholder={t.footer.formClubPlaceholder}
                />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-2 block">{t.footer.formMessage}</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-white/10 p-3 md:p-4 text-sm md:text-base focus:border-red-600 outline-none transition-all rounded-lg h-24 md:h-32 rounded resize-none placeholder:text-gray-700 focus:bg-black"
                  placeholder={t.footer.formMessagePlaceholder}
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: '#dc2626' }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 md:py-5 bg-red-600 font-bold uppercase tracking-widest text-sm md:text-base hover:shadow-[0_10px_30px_rgba(220,38,38,0.4)] transition-all rounded-xl text-white flex items-center justify-center gap-3 group"
              >
                <MessageCircle size={20} className="group-hover:animate-bounce" />
                {t.footer.sendMessage}
              </motion.button>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="pt-8 md:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6"
        >
          <div className="font-oswald text-xl md:text-2xl tracking-tighter text-red-600">JH01</div>
          <div className="text-gray-600 text-[9px] md:text-[10px] uppercase font-bold tracking-[0.15em] md:tracking-[0.2em] text-center">
            {t.footer.rights}
          </div>
        </motion.div>
      </div >
    </footer >
  );
};

export default Footer;
