
import React, { useState, useEffect } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { ATHLETE_DATA } from '../constants';
import { useLanguage } from '../LanguageContext';

const Stats: React.FC = () => {
  const { t, language } = useLanguage();
  const [accuracyValue, setAccuracyValue] = useState(0);
  const [isScanning, setIsScanning] = useState(true);
  const [dataPoints, setDataPoints] = useState<number[]>([]);

  // Dynamic radar data based on language
  const radarData = [
    { subject: t.stats.agility, A: 90, fullMark: 100 },
    { subject: t.stats.goalExit, A: 85, fullMark: 100 },
    { subject: t.stats.reflexes, A: 95, fullMark: 100 },
    { subject: t.stats.footwork, A: 92, fullMark: 100 },
    { subject: t.stats.positioning, A: 88, fullMark: 100 },
    { subject: t.stats.leadership, A: 80, fullMark: 100 },
  ];

  // Animate accuracy counter
  useEffect(() => {
    const target = 86;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setAccuracyValue(target);
        clearInterval(timer);
      } else {
        setAccuracyValue(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  // Simulate real-time data scanning
  useEffect(() => {
    const scanInterval = setInterval(() => {
      setIsScanning(prev => !prev);
    }, 3000);

    const dataInterval = setInterval(() => {
      setDataPoints(prev => {
        const newPoint = 75 + Math.random() * 20;
        return [...prev.slice(-9), newPoint];
      });
    }, 500);

    return () => {
      clearInterval(scanInterval);
      clearInterval(dataInterval);
    };
  }, []);

  return (
    <section id="stats" className="py-20 md:py-40 bg-transparent relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-24 gap-6 text-center md:text-left">
          <div className="space-y-2 w-full md:w-auto">
            <h2 className="text-[9px] md:text-[10px] font-tech font-bold uppercase tracking-[0.3em] md:tracking-[0.5em] text-red-600 flex items-center justify-center md:justify-start gap-3">
              <span className="hidden md:block w-12 h-[1px] bg-red-600"></span> ENGINE PERFORMANCE
            </h2>
            <p className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tighter uppercase leading-none">
              {t.stats.title}
            </p>
            <p className="text-xs md:text-sm font-tech text-gray-500 tracking-widest uppercase">{t.stats.season}</p>
          </div>
          <div className="w-full md:w-auto text-center md:text-right text-white/20 uppercase text-[8px] md:text-[9px] font-tech tracking-[0.3em] md:tracking-[0.4em] font-bold flex items-center justify-center md:justify-end gap-2">
            <span className={`w-2 h-2 rounded-full ${isScanning ? 'bg-green-500 animate-pulse' : 'bg-red-600'}`}></span>
            {t.stats.calibration}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Numbers Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 md:gap-6">
            <div className="p-6 md:p-12 bg-white/[0.015] border border-white/5 backdrop-blur-sm relative overflow-hidden group hover:bg-white/[0.03] transition-all duration-700 rounded-2xl md:rounded-3xl hover:border-red-600/30">
              <div className="absolute top-0 right-0 p-4 opacity-[0.03] text-6xl md:text-9xl font-display font-black select-none pointer-events-none group-hover:opacity-[0.05] transition-opacity">MATCH</div>
              <div className="absolute top-3 right-3 md:top-4 md:right-4 flex gap-1">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-[7px] md:text-[8px] font-tech text-green-500 uppercase">Live</span>
              </div>
              <span className="text-5xl md:text-8xl font-tech font-bold block mb-2 leading-none text-white group-hover:text-red-600 transition-colors">{ATHLETE_DATA.stats.matches}</span>
              <span className="text-[8px] md:text-[10px] font-tech uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold text-gray-500">{t.stats.matches}</span>
              <div className="text-[7px] md:text-[8px] font-tech text-gray-600 mt-2">2025/2026</div>
            </div>

            <div className="p-6 md:p-12 bg-white/[0.015] border border-white/5 backdrop-blur-sm relative overflow-hidden group hover:bg-white/[0.03] transition-all duration-700 rounded-2xl md:rounded-3xl hover:border-red-600/30">
              <div className="absolute top-3 right-3 md:top-4 md:right-4 flex gap-1">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-[7px] md:text-[8px] font-tech text-green-500 uppercase">Live</span>
              </div>
              <span className="text-5xl md:text-8xl font-tech font-bold block mb-2 leading-none text-white group-hover:text-red-600 transition-colors">{ATHLETE_DATA.stats.minutes}</span>
              <span className="text-[8px] md:text-[10px] font-tech uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold text-gray-500">{t.stats.minutes}</span>
              <div className="text-[7px] md:text-[8px] font-tech text-gray-600 mt-2">2025/2026</div>
            </div>

            <div className="p-6 md:p-12 bg-white/[0.015] border border-white/5 backdrop-blur-sm relative overflow-hidden group hover:bg-white/[0.03] transition-all duration-700 rounded-2xl md:rounded-3xl col-span-2 hover:border-red-600/30">
              {/* Real-time data visualization */}
              <div className="absolute top-3 right-3 md:top-4 md:right-4 flex items-center gap-2 md:gap-3">
                <div className="hidden md:flex gap-0.5 h-4 items-end">
                  {dataPoints.map((point, idx) => (
                    <div
                      key={idx}
                      className="w-1 bg-red-600/60 rounded-full transition-all duration-300"
                      style={{ height: `${(point / 100) * 16}px` }}
                    ></div>
                  ))}
                </div>
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-[7px] md:text-[8px] font-tech text-green-500 uppercase">Sync</span>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-4 md:mb-6 gap-3">
                <div className="relative">
                  <span className="text-5xl md:text-8xl font-tech font-bold leading-none group-hover:text-red-600 transition-colors">
                    {accuracyValue}%
                  </span>
                  <div className="absolute -right-3 md:-right-4 top-0 flex flex-col gap-0.5">
                    <span className="text-[5px] md:text-[6px] font-tech text-red-600 animate-pulse">●</span>
                  </div>
                </div>
                <div className="md:text-right">
                  <span className="text-red-600 font-tech font-bold text-[8px] md:text-[9px] uppercase tracking-widest block animate-pulse">{t.stats.vsAverage}</span>
                  <span className="text-[7px] md:text-[8px] font-tech text-gray-600 uppercase">{t.stats.prevSeason}</span>
                </div>
              </div>

              <span className="text-[8px] md:text-[10px] font-tech uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold text-gray-500 block">{t.stats.accuracy}</span>
              <p className="text-[8px] md:text-[9px] font-tech text-gray-600 mt-1">{t.stats.accuracyDesc}</p>

              <div className="mt-4 md:mt-8 w-full h-[2px] md:h-[3px] bg-white/5 rounded-full overflow-hidden relative">
                <div
                  className="h-full bg-gradient-to-r from-red-600 to-red-500 shadow-[0_0_20px_rgba(220,38,38,0.8)] transition-all duration-1000 ease-out"
                  style={{ width: `${accuracyValue}%` }}
                ></div>
              </div>

              <div className="flex justify-between mt-2 text-[7px] md:text-[8px] font-tech text-gray-600">
                <span>0%</span>
                <span>50%</span>
                <span>100%</span>
              </div>
            </div>
          </div>

          {/* Radar Chart */}
          <div className="lg:col-span-7 h-[350px] md:h-[600px] bg-white/[0.01] border border-white/5 backdrop-blur-xl rounded-2xl md:rounded-[40px] p-4 md:p-12 flex flex-col items-center justify-center relative group hover:border-red-600/20 transition-all duration-700">
            <div className="absolute top-4 left-4 md:top-8 md:left-8 text-[7px] md:text-[9px] font-tech font-bold uppercase tracking-[0.2em] md:tracking-[0.4em] text-gray-600 border-l border-red-600 pl-2 md:pl-4 flex items-center gap-2">
              {t.stats.radarScan}
              <span className={`w-1.5 h-1.5 rounded-full ${isScanning ? 'bg-red-600 animate-ping' : 'bg-gray-600'}`}></span>
            </div>

            {/* Scanning overlay effect - hidden on mobile */}
            <div className={`hidden md:block absolute inset-0 pointer-events-none rounded-[40px] overflow-hidden ${isScanning ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
              <div className="absolute inset-0 bg-gradient-to-b from-red-600/5 via-transparent to-transparent animate-[scanVertical_3s_ease-in-out_infinite]"></div>
            </div>

            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="75%" data={radarData}>
                <PolarGrid stroke="rgba(255,255,255,0.03)" />
                <PolarAngleAxis
                  dataKey="subject"
                  tick={{
                    fill: 'rgba(255,255,255,0.4)',
                    fontSize: 8,
                    fontWeight: 600,
                    letterSpacing: '1px',
                    fontFamily: 'Rajdhani',
                    textTransform: 'uppercase'
                  }}
                />
                <Radar
                  name="Jhonatan"
                  dataKey="A"
                  stroke="#dc2626"
                  strokeWidth={2}
                  fill="#dc2626"
                  fillOpacity={0.2}
                />
              </RadarChart>
            </ResponsiveContainer>

            <div className="absolute bottom-3 left-4 md:bottom-8 md:left-8 text-[7px] md:text-[8px] font-tech text-gray-600 uppercase tracking-widest">
              Temporada 2025/2026
            </div>
            <div className="hidden md:block absolute bottom-8 right-8 text-[8px] font-tech text-white/10 uppercase tracking-widest">Digital Twin ID: 75291-JH</div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes scan {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(400%); }
        }
        @keyframes scanVertical {
          0%, 100% { transform: translateY(-100%); }
          50% { transform: translateY(100%); }
        }
      `}</style>
    </section>
  );
};

export default Stats;
