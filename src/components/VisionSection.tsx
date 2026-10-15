import React, { useState } from 'react';
import { Search, Lightbulb, BookOpen, Layers, Sparkles, Users, Cpu, TrendingUp, CheckCircle2, RefreshCw } from 'lucide-react';
import { VISION_PRINCIPLES } from '../data/portfolioData';
import ParticleText from './ParticleText';

export const VisionSection: React.FC = () => {
  const [currentFrameworkPhrase, setCurrentFrameworkPhrase] = useState<string>('Learn. Build. Scale.');

  const phrases = [
    'Learn. Build. Scale.',
    'ART GROUP',
    'E Solutioner BD',
    'Real Solutions',
    'Sustainable Growth'
  ];

  const getPrincipleIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search': return <Search className="w-5 h-5 text-teal-400" />;
      case 'Lightbulb': return <Lightbulb className="w-5 h-5 text-amber-400" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5 text-cyan-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-emerald-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-purple-400" />;
      case 'Users': return <Users className="w-5 h-5 text-blue-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-teal-400" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-emerald-400" />;
      default: return <CheckCircle2 className="w-5 h-5 text-teal-400" />;
    }
  };

  return (
    <section id="vision" className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-950 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-teal-400 text-xs font-mono mb-4">
            <span>CORE PHILOSOPHY</span>
          </div>
          <h2 id="vision-heading" className="text-3xl sm:text-4xl font-display font-bold text-neutral-100 tracking-tight mb-4">
            My Entrepreneurial Vision
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
            Abdul Ahad believes entrepreneurship is fundamentally about creating genuine utility, fostering growth, and leveraging modern technology to build enduring ventures.
          </p>
        </div>

        {/* Central Power Statement Banner with Interactive ParticleText */}
        <div 
          id="vision-power-statement-card"
          className="mb-14 p-6 sm:p-10 rounded-2xl bg-gradient-to-r from-neutral-900 via-neutral-900/95 to-neutral-900 border border-teal-500/30 text-center relative overflow-hidden shadow-xl shadow-black/40"
        >
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="text-xs font-mono tracking-widest text-teal-400 uppercase">
              Interactive Execution Vision
            </div>

            {/* Quick interactive phrase switches */}
            <div className="flex items-center gap-1.5 overflow-x-auto py-1 max-w-full">
              {phrases.map((phrase) => (
                <button
                  key={phrase}
                  onClick={() => setCurrentFrameworkPhrase(phrase)}
                  className={`text-xs px-2.5 py-1 rounded-md font-mono transition-colors cursor-pointer whitespace-nowrap ${
                    currentFrameworkPhrase === phrase
                      ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40'
                      : 'bg-neutral-950/60 text-neutral-400 border border-neutral-800 hover:text-neutral-200'
                  }`}
                >
                  {phrase}
                </button>
              ))}
            </div>
          </div>

          {/* Particle text canvas */}
          <div className="w-full h-24 sm:h-28 md:h-36 relative">
            <ParticleText
              key={currentFrameworkPhrase}
              text={currentFrameworkPhrase}
              particleSize={2.0}
              density={3}
              color="#ffffff"
              highlightColor="#38bdf8"
              scatter={170}
              gatherDuration={1400}
              stagger={350}
              pointerRepel={38}
              repelRadius={110}
              idleDrift={0.65}
              trigger="hover"
              fontSize="clamp(2rem, 5vw, 3.8rem)"
              fontWeight={800}
              fontFamily="'Outfit', sans-serif"
              glow
              className="!min-h-0"
            />
          </div>

          <p className="text-xs sm:text-sm text-neutral-400 max-w-lg mx-auto mt-4">
            Hover over or click the text to interact with the particle matrix.
          </p>
        </div>

        {/* 8 Principles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {VISION_PRINCIPLES.map((principle, index) => (
            <div
              key={principle.id}
              id={`vision-principle-${principle.id}`}
              className="bg-neutral-900/70 hover:bg-neutral-900 border border-neutral-800/80 hover:border-neutral-700/90 rounded-xl p-6 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-neutral-950 border border-neutral-800 group-hover:border-neutral-700 transition-colors">
                    {getPrincipleIcon(principle.icon)}
                  </div>
                  <span className="text-[11px] font-mono text-neutral-500">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="font-display font-bold text-base text-neutral-100 mb-2 group-hover:text-teal-300 transition-colors">
                  {principle.title}
                </h3>

                <p className="text-xs text-neutral-400 leading-relaxed">
                  {principle.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-850 flex items-center gap-1.5 text-[11px] text-teal-400 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                <span>Core Pillar</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
