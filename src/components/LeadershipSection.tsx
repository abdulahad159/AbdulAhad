import React, { useState } from 'react';
import { Award, Compass, Briefcase, TrendingUp, Users, GitMerge, ArrowRight, ShieldCheck } from 'lucide-react';
import { LEADERSHIP_PILLARS } from '../data/portfolioData';

export const LeadershipSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const transitionSteps = [
    {
      step: '01',
      title: 'LEARN',
      subtitle: 'Knowledge Acquisition',
      desc: 'Mastering the fundamentals, understanding digital platforms, testing tools, and studying customer needs through direct observation and study.'
    },
    {
      step: '02',
      title: 'BUILD',
      subtitle: 'Practical Execution',
      desc: 'Hands-on creation of ventures (E Solutioner BD, BoostNex, TechFinyx), validating workflows, setting up systems, and refining operations.'
    },
    {
      step: '03',
      title: 'LEAD',
      subtitle: 'Team & Strategic Direction',
      desc: 'Transitioning from individual operational tasks into managing people, directing strategy, aligning priorities, and empowering collaborators.'
    },
    {
      step: '04',
      title: 'SCALE',
      subtitle: 'Ecosystem Expansion',
      desc: 'Growing ART Group into a multi-brand parent organization with self-sustaining companies, institutional processes, and long-term brand equity.'
    }
  ];

  return (
    <section id="leadership" className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-teal-400 text-xs font-mono mb-4">
            <span>STRATEGIC EVOLUTION</span>
          </div>
          <h2 id="leadership-heading" className="text-3xl sm:text-4xl font-display font-bold text-neutral-100 tracking-tight mb-4">
            From Skills to Leadership
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
            Abdul Ahad&apos;s long-term direction is to move from personally handling every task toward high-level leadership, strategy, management, business development, and team building.
          </p>
        </div>

        {/* Visual Concept Flow: LEARN -> BUILD -> LEAD -> SCALE */}
        <div className="mb-16 bg-neutral-900/60 border border-neutral-800 rounded-3xl p-6 sm:p-8">
          <div className="text-center mb-8">
            <span className="text-xs font-mono tracking-widest text-teal-400 uppercase">
              The Evolution Framework
            </span>
            <h3 className="text-xl font-display font-bold text-neutral-100 mt-1">
              LEARN → BUILD → LEAD → SCALE
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {transitionSteps.map((item, idx) => {
              const isSelected = activeStep === idx;
              return (
                <button
                  key={item.title}
                  id={`evolution-step-${item.title.toLowerCase()}`}
                  onClick={() => setActiveStep(idx)}
                  className={`text-left p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-neutral-850 border-teal-400 shadow-lg shadow-teal-500/10 scale-[1.02]'
                      : 'bg-neutral-900/80 hover:bg-neutral-850 border-neutral-800'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold text-teal-400">
                        {item.step}
                      </span>
                      {idx < 3 && (
                        <ArrowRight className="w-3.5 h-3.5 text-neutral-600 hidden lg:block" />
                      )}
                    </div>
                    <h4 className="text-lg font-display font-extrabold text-neutral-100 tracking-tight">
                      {item.title}
                    </h4>
                    <div className="text-xs text-teal-300 font-mono mb-2">
                      {item.subtitle}
                    </div>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-neutral-800 text-[11px] font-mono text-neutral-500">
                    {idx === 0 || idx === 1 ? 'Current & Active' : 'Strategic Objective'}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 6 Highlighted Disciplines */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-xl font-display font-bold text-neutral-100">
              Core Leadership Disciplines
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              The key leadership competencies guiding Abdul Ahad&apos;s personal growth and team organization.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {LEADERSHIP_PILLARS.map((pillar) => (
              <div
                key={pillar.name}
                id={`leadership-pillar-${pillar.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-neutral-900/70 border border-neutral-800 rounded-xl p-5 hover:border-neutral-700 transition-all"
              >
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                  <h4 className="font-display font-bold text-base text-neutral-100">
                    {pillar.name}
                  </h4>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
