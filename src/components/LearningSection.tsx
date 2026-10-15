import React from 'react';
import { 
  GraduationCap, 
  Hammer, 
  FlaskConical, 
  Search, 
  Cpu, 
  RotateCcw, 
  Layers, 
  Smile, 
  Sparkles,
  BookOpen
} from 'lucide-react';
import { LEARNING_VECTORS } from '../data/portfolioData';

export const LearningSection: React.FC = () => {
  const getVectorIcon = (iconName: string) => {
    switch (iconName) {
      case 'Hammer': return <Hammer className="w-5 h-5 text-teal-400" />;
      case 'FlaskConical': return <FlaskConical className="w-5 h-5 text-cyan-400" />;
      case 'Search': return <Search className="w-5 h-5 text-amber-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-emerald-400" />;
      case 'RotateCcw': return <RotateCcw className="w-5 h-5 text-rose-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-blue-400" />;
      case 'Smile': return <Smile className="w-5 h-5 text-purple-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-teal-400" />;
      default: return <BookOpen className="w-5 h-5 text-teal-400" />;
    }
  };

  return (
    <section id="learning" className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-950/80 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-teal-400 text-xs font-mono mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>GROWTH MINDSET</span>
          </div>
          <h2 id="learning-heading" className="text-3xl sm:text-4xl font-display font-bold text-neutral-100 tracking-tight mb-4">
            Always Learning
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
            Abdul Ahad is currently continuing his academic studies while simultaneously acquiring deep, practical wisdom through direct real-world execution.
          </p>
        </div>

        {/* Academic + Real-World Dual Engine Banner */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          
          <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl p-6 sm:p-7 flex items-start gap-4">
            <div className="p-3 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400 shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-mono text-teal-400 uppercase">Academic Discipline</div>
              <h3 className="text-lg font-display font-bold text-neutral-100 mt-0.5">
                Continuing Studies
              </h3>
              <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                Balancing ongoing academic commitments with dedication, maintaining intellectual rigor, analytical clarity, and structured discipline.
              </p>
            </div>
          </div>

          <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl p-6 sm:p-7 flex items-start gap-4">
            <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
              <Hammer className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-mono text-cyan-400 uppercase">Empirical Feedback</div>
              <h3 className="text-lg font-display font-bold text-neutral-100 mt-0.5">
                Practical Execution Lab
              </h3>
              <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                Testing ideas in live markets, gathering feedback from actual users, adjusting workflows, and building durable platforms from scratch.
              </p>
            </div>
          </div>

        </div>

        {/* 8 Practical Learning Vectors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {LEARNING_VECTORS.map((vector, index) => (
            <div
              key={vector.id}
              id={`learning-vector-${vector.id}`}
              className="bg-neutral-900/60 hover:bg-neutral-900 border border-neutral-800/80 hover:border-neutral-700 rounded-2xl p-5.5 transition-all duration-200 flex flex-col justify-between group shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-neutral-950 border border-neutral-800 group-hover:border-neutral-700 transition-colors">
                    {getVectorIcon(vector.icon)}
                  </div>
                  <span className="text-[11px] font-mono text-neutral-500">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="font-display font-bold text-base text-neutral-100 mb-2 group-hover:text-teal-300 transition-colors">
                  {vector.title}
                </h3>

                <p className="text-xs text-neutral-400 leading-relaxed">
                  {vector.detail}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-850 flex items-center gap-1.5 text-[10px] text-neutral-500 font-mono">
                <span>Active Learning Vector</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
