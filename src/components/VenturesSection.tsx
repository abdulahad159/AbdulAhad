import React, { useState } from 'react';
import { 
  Building, 
  Layers, 
  Sparkles, 
  ExternalLink, 
  Check, 
  ChevronRight, 
  Zap, 
  ShieldCheck, 
  BarChart3, 
  Globe, 
  Video, 
  Bot, 
  Users, 
  CreditCard, 
  Bell, 
  Gift, 
  HelpCircle,
  Briefcase
} from 'lucide-react';
import { VENTURES } from '../data/portfolioData';

export const VenturesSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'agency' | 'platform'>('all');

  const filteredVentures = VENTURES.filter(v => {
    if (activeFilter === 'agency') return v.category.includes('Agency');
    if (activeFilter === 'platform') return v.category.includes('Platform');
    return true;
  });

  return (
    <section id="ventures" className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-teal-400 text-xs font-mono mb-4">
              <Briefcase className="w-3.5 h-3.5" />
              <span>BUSINESS PORTFOLIO</span>
            </div>
            <h2 id="ventures-heading" className="text-3xl sm:text-4xl font-display font-bold text-neutral-100 tracking-tight">
              Ventures &amp; Projects
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-xl">
              Independent operating companies and digital platforms conceived under the ART Group umbrella.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 bg-neutral-900/90 p-1.5 rounded-xl border border-neutral-800 self-start md:self-auto">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeFilter === 'all' 
                  ? 'bg-teal-500 text-neutral-950 font-semibold shadow-xs' 
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              All Ventures ({VENTURES.length})
            </button>
            <button
              onClick={() => setActiveFilter('agency')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeFilter === 'agency' 
                  ? 'bg-teal-500 text-neutral-950 font-semibold shadow-xs' 
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              Agency (1)
            </button>
            <button
              onClick={() => setActiveFilter('platform')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeFilter === 'platform' 
                  ? 'bg-teal-500 text-neutral-950 font-semibold shadow-xs' 
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              Platforms (3)
            </button>
          </div>
        </div>

        {/* Venture Cards */}
        <div className="space-y-8">
          {filteredVentures.map((venture, idx) => {
            const isEsol = venture.id === 'e-solutioner-bd';
            const isBoost = venture.id === 'boostnex';

            return (
              <div
                key={venture.id}
                id={`venture-card-${venture.id}`}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isEsol
                    ? 'bg-gradient-to-b from-neutral-900 via-neutral-900/95 to-neutral-950 border-teal-500/40 shadow-xl shadow-teal-500/5'
                    : 'bg-neutral-900/70 hover:bg-neutral-900 border-neutral-800 hover:border-neutral-700/80 shadow-md'
                }`}
              >
                <div className="p-6 sm:p-8">
                  
                  {/* Top Bar inside card */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center font-mono font-bold text-teal-400 text-sm">
                        0{idx + 1}
                      </div>
                      <div>
                        <span className="text-[11px] font-mono uppercase tracking-wider text-teal-400">
                          {venture.category}
                        </span>
                        <h3 className="text-2xl font-display font-bold text-neutral-100">
                          {venture.name}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {venture.isMajorFocus && (
                        <span 
                          id="badge-major-focus"
                          className="px-3 py-1 rounded-full bg-teal-500/15 border border-teal-500/40 text-teal-300 text-xs font-semibold flex items-center gap-1.5 shadow-xs"
                        >
                          <Zap className="w-3.5 h-3.5 text-teal-400" />
                          <span>Major Long-Term Focus</span>
                        </span>
                      )}
                      <span className="text-xs font-mono text-neutral-500 px-2.5 py-1 rounded-md bg-neutral-950 border border-neutral-800">
                        {venture.role}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6">
                    &ldquo;{venture.description}&rdquo;
                  </p>

                  {/* Potential Services (for E Solutioner BD) */}
                  {venture.services && (
                    <div className="pt-4 border-t border-neutral-800">
                      <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3 flex items-center gap-2">
                        <Layers className="w-3.5 h-3.5 text-teal-400" />
                        <span>Potential Multi-Service Scope:</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                        {venture.services.map((service) => (
                          <div
                            key={service}
                            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-neutral-950/80 border border-neutral-800/80 text-xs text-neutral-200"
                          >
                            <Check className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                            <span>{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Platform Features (for BoostNex) */}
                  {venture.features && isBoost && (
                    <div className="pt-4 border-t border-neutral-800">
                      <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3 flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                        <span>Possible Platform Architecture &amp; Features:</span>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
                        {venture.features.map((feature) => (
                          <div
                            key={feature}
                            className="p-2.5 rounded-lg bg-neutral-950/80 border border-neutral-800/80 text-xs text-neutral-300 flex items-center gap-1.5"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                            <span className="truncate">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Platform Features (for TechFinyx panels) */}
                  {venture.features && !isBoost && (
                    <div className="pt-4 border-t border-neutral-800">
                      <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3 flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-teal-400" />
                        <span>Platform Characteristics:</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {venture.features.map((feature) => (
                          <span
                            key={feature}
                            className="px-3 py-1.5 rounded-lg bg-neutral-950/80 border border-neutral-800 text-xs text-neutral-300 flex items-center gap-1.5"
                          >
                            <Check className="w-3 h-3 text-teal-400" />
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
