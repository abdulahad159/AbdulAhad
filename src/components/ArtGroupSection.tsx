import React, { useState } from 'react';
import { Building2, ArrowDown, Sparkles, Layers, ShieldCheck, ArrowRight, CheckCircle2, ChevronRight, PlusCircle } from 'lucide-react';
import { VENTURES } from '../data/portfolioData';

export const ArtGroupSection: React.FC = () => {
  const [selectedVentureId, setSelectedVentureId] = useState<string>('e-solutioner-bd');

  const selectedVenture = VENTURES.find(v => v.id === selectedVentureId) || VENTURES[0];

  return (
    <section id="art-group" className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-950/90 border-t border-neutral-900 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-mono mb-4">
            <Building2 className="w-3.5 h-3.5" />
            <span>PARENT ENTERPRISE</span>
          </div>
          <h2 id="art-group-heading" className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-neutral-100 tracking-tight mb-3">
            ART GROUP
          </h2>
          <div className="text-lg font-medium text-teal-400 font-display mb-4">
            &ldquo;The Parent Organization&rdquo;
          </div>
          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
            &ldquo;ART Group is envisioned as the parent organization for Abdul Ahad&apos;s business ventures.&rdquo;
          </p>
        </div>

        {/* Ecosystem Visualization Diagram */}
        <div className="bg-neutral-900/60 border border-neutral-800 rounded-3xl p-6 sm:p-10 mb-12 shadow-xl">
          
          {/* Top: ART GROUP Parent Node */}
          <div className="flex flex-col items-center">
            <div 
              id="art-group-parent-node"
              className="w-full max-w-md bg-gradient-to-r from-neutral-900 via-neutral-850 to-neutral-900 border-2 border-teal-500/50 rounded-2xl p-6 text-center shadow-lg shadow-teal-500/5 relative group"
            >
              <div className="inline-block px-3 py-1 rounded-full bg-teal-500/15 border border-teal-500/30 text-teal-300 text-xs font-mono mb-2 font-semibold">
                PARENT ENTITY &amp; STRATEGY
              </div>
              <h3 className="text-2xl font-display font-extrabold text-neutral-50 tracking-tight">
                ART GROUP
              </h3>
              <p className="text-xs text-neutral-400 mt-1 max-w-sm mx-auto">
                Central holding umbrella overseeing governance, resource allocation, and portfolio growth.
              </p>
            </div>

            {/* Vertical Connector Stem */}
            <div className="w-0.5 h-10 bg-gradient-to-b from-teal-500/50 via-neutral-700 to-neutral-700 my-1" />
            <div className="p-1 rounded-full bg-neutral-900 border border-neutral-700 text-neutral-400 mb-6">
              <ArrowDown className="w-4 h-4 text-teal-400 animate-pulse" />
            </div>
          </div>

          {/* Subtitle / Separation note */}
          <div className="text-center mb-6">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 bg-neutral-950 px-4 py-1.5 rounded-full border border-neutral-800">
              Independent Operating Brands &amp; Digital Platforms
            </span>
          </div>

          {/* Connected Children Ventures Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {VENTURES.map((venture) => {
              const isSelected = selectedVentureId === venture.id;
              return (
                <button
                  key={venture.id}
                  id={`ecosystem-node-${venture.id}`}
                  onClick={() => setSelectedVentureId(venture.id)}
                  type="button"
                  className={`text-left p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                    isSelected 
                      ? 'bg-neutral-850 border-teal-400 shadow-md shadow-teal-500/10 scale-[1.02]' 
                      : 'bg-neutral-900/90 hover:bg-neutral-850 border-neutral-800 hover:border-neutral-700'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-neutral-950 border border-neutral-800 text-neutral-400">
                        {venture.category}
                      </span>
                      {venture.isMajorFocus && (
                        <span className="text-[9px] font-semibold text-teal-300 bg-teal-500/20 px-2 py-0.5 rounded-full border border-teal-500/30">
                          Priority Focus
                        </span>
                      )}
                    </div>

                    <h4 className="font-display font-bold text-base text-neutral-100 mb-1">
                      {venture.name}
                    </h4>

                    <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                      {venture.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-neutral-800 flex items-center justify-between text-xs">
                    <span className="text-teal-400 text-[11px] font-medium">Inspect Details</span>
                    <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'text-teal-400 translate-x-0.5' : 'text-neutral-500'}`} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected Node Details Box */}
          <div className="mt-8 pt-8 border-t border-neutral-800 bg-neutral-950/60 rounded-2xl p-6 border">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-teal-400">VENTURE DETAILS</span>
                  {selectedVenture.isMajorFocus && (
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30 font-medium">
                      Major Long-Term Focus
                    </span>
                  )}
                </div>
                <h4 className="text-xl font-display font-bold text-neutral-100 mt-1">
                  {selectedVenture.name}
                </h4>
                <div className="text-xs text-neutral-400 font-mono">
                  Category: {selectedVenture.category}
                </div>
              </div>

              <a
                href="#ventures"
                className="inline-flex items-center gap-1.5 text-xs text-teal-300 hover:text-teal-200 font-medium bg-neutral-900 border border-neutral-700 px-3.5 py-2 rounded-lg transition-colors shrink-0"
              >
                <span>View in Ventures Section</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <p className="text-sm text-neutral-300 mb-4 leading-relaxed">
              {selectedVenture.description}
            </p>

            {selectedVenture.services && (
              <div>
                <div className="text-xs font-semibold text-neutral-300 mb-2">Scope of Services:</div>
                <div className="flex flex-wrap gap-2">
                  {selectedVenture.services.map((srv) => (
                    <span key={srv} className="px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-xs text-neutral-300">
                      {srv}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {selectedVenture.features && (
              <div>
                <div className="text-xs font-semibold text-neutral-300 mb-2">Platform Capabilities:</div>
                <div className="flex flex-wrap gap-2">
                  {selectedVenture.features.map((feat) => (
                    <span key={feat} className="px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-xs text-neutral-300">
                      {feat}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Future Expansion Callout */}
        <div 
          id="future-expansion-banner"
          className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3.5">
            <div className="p-3 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400 shrink-0">
              <PlusCircle className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-neutral-200">Continuous Ecosystem Scalability</div>
              <p className="text-xs text-neutral-400 mt-0.5">
                &ldquo;Future businesses and digital products can be added to the ecosystem as new opportunities emerge.&rdquo;
              </p>
            </div>
          </div>
          <div className="text-xs font-mono text-neutral-400 px-3 py-1.5 rounded-lg bg-neutral-950 border border-neutral-800 shrink-0">
            Open Architecture
          </div>
        </div>

      </div>
    </section>
  );
};
