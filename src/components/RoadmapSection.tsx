import React from 'react';
import { Target, ArrowRight, ShieldCheck, Zap, Sparkles, Building2, CheckCircle2 } from 'lucide-react';
import { ROADMAP_STAGES } from '../data/portfolioData';

export const RoadmapSection: React.FC = () => {
  return (
    <section id="roadmap" className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-mono mb-4">
            <Target className="w-3.5 h-3.5" />
            <span>LONG-TERM AMBITION</span>
          </div>
          <h2 id="roadmap-heading" className="text-3xl sm:text-4xl font-display font-bold text-neutral-100 tracking-tight mb-4">
            The Bigger Vision
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
            The long-term ambition is to build ART Group into a larger business organization with multiple successful companies and digital products, with <strong className="text-teal-300 font-semibold">E Solutioner BD</strong> serving as an important strategic priority.
          </p>
        </div>

        {/* Roadmap Visual Sequence */}
        <div className="relative">
          
          {/* Connecting line on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-neutral-800 -translate-y-6 -z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {ROADMAP_STAGES.map((stage, idx) => {
              const isCurrent = stage.status === 'Current';
              const isPriority = stage.phase === 'NEXT';

              return (
                <div
                  key={stage.id}
                  id={`roadmap-stage-${stage.phase.toLowerCase()}`}
                  className={`rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300 ${
                    isCurrent
                      ? 'bg-neutral-900/90 border-teal-500/50 shadow-lg shadow-teal-500/5 ring-1 ring-teal-500/20'
                      : isPriority
                      ? 'bg-neutral-900/90 border-cyan-500/40 shadow-md'
                      : 'bg-neutral-900/60 border-neutral-800/80'
                  }`}
                >
                  <div>
                    {/* Step Phase Marker */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className={`px-3 py-1 rounded-lg text-xs font-display font-extrabold tracking-wider ${
                        isCurrent
                          ? 'bg-teal-500 text-neutral-950 shadow-xs'
                          : isPriority
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                          : 'bg-neutral-950 text-neutral-400 border border-neutral-800'
                      }`}>
                        {stage.phase}
                      </div>

                      <span className={`text-[10px] font-mono uppercase tracking-wider ${
                        isCurrent ? 'text-teal-400' : 'text-neutral-500'
                      }`}>
                        {stage.status}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-lg text-neutral-100 mb-2">
                      {stage.title}
                    </h3>

                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {stage.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-800">
                    <div className="text-[11px] font-mono text-teal-400 font-medium">
                      🎯 {stage.focusHighlight}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Priority Focus Highlight Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400 shrink-0">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-mono text-teal-400 uppercase">Strategic Cornerstone</div>
              <h3 className="text-lg font-display font-bold text-neutral-100 mt-0.5">
                E Solutioner BD — Key Growth Engine
              </h3>
              <p className="text-xs text-neutral-400 mt-1 max-w-xl leading-relaxed">
                Positioned as the foundational multi-service agency driving immediate value, client solutions, and revenue generation to fund broader ecosystem expansions.
              </p>
            </div>
          </div>

          <a
            href="#ventures"
            className="px-5 py-2.5 rounded-xl bg-neutral-950 hover:bg-neutral-850 border border-neutral-700 text-xs font-semibold text-neutral-200 transition-colors shrink-0"
          >
            Explore E Solutioner BD
          </a>
        </div>

      </div>
    </section>
  );
};
