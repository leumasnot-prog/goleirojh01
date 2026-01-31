
import React from 'react';
import { motion } from 'framer-motion';
import { ATHLETE_DATA } from '../constants';
import { User, Ruler, Activity, Globe, Calendar, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Bio: React.FC = () => {
  const { t, language } = useLanguage();

  const profileItems = [
    { icon: <User size={18} />, label: t.bio.name, value: "Jhonatan" },
    { icon: <ShieldCheck size={18} />, label: t.bio.position, value: `${t.athlete.goalkeeper} (${t.athlete.leftFooted})` },
    { icon: <Activity size={18} />, label: t.bio.secondaryPos, value: t.athlete.leftBack },
    { icon: <Globe size={18} />, label: t.bio.nationality, value: t.athlete.brazilian },
    { icon: <Calendar size={18} />, label: t.bio.age, value: `${ATHLETE_DATA.age} ${t.bio.years} (${ATHLETE_DATA.birthDate})` },
    { icon: <Ruler size={18} />, label: t.bio.physical, value: `${ATHLETE_DATA.height} | ${ATHLETE_DATA.weight}` },
  ];

  return (
    <section id="perfil" className="py-16 md:py-24 bg-[#0a0a0a] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-red-600 mb-2"
            >
              {t.bio.title}
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-5xl font-oswald font-bold mb-6 md:mb-8"
            >
              {t.bio.subtitle}
            </motion.h3>

            <div className="grid grid-cols-2 gap-4 md:gap-8">
              {profileItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.05 * idx }}
                  className="flex items-center gap-3 md:gap-4 group"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 flex items-center justify-center bg-[#111] border border-white/5 rounded-full text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold text-gray-500">{item.label}</p>
                    <p className="text-sm md:text-lg font-bold truncate">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 md:mt-12 p-5 md:p-8 bg-red-900/10 border-l-4 border-red-600"
            >
              <p className="text-lg md:text-xl font-bold mb-2">{t.bio.quote}</p>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                {t.bio.description}
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="hidden md:block absolute -top-10 -right-10 w-40 h-40 bg-red-600 opacity-20 blur-3xl rounded-full"></div>
            <div className="bg-[#111] border border-white/5 p-1.5 md:p-2 rounded-lg relative z-10 group overflow-hidden">
              <img
                src="/views/foto1.jpeg"
                alt="Ação de Jogo"
                loading="lazy"
                className="w-full h-auto rounded grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Bio;
