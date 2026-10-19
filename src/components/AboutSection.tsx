import React from 'react';
import { Sparkles, GraduationCap, Building2, Cpu, Globe, Bot, Workflow, Megaphone, Video, Layers, CheckCircle2, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO, INTERSECTION_TOPICS, USER_IMAGE_URL } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const getTopicIcon = (title: string) => {
    switch (title) {
      case 'Business': return <Building2 className="w-5 h-5 text-teal-400" />;
      case 'Technology': return <Cpu className="w-5 h-5 text-cyan-400" />;
      case 'AI': return <Bot className="w-5 h-5 text-emerald-400" />;
      case 'Automation': return <Workflow className="w-5 h-5 text-blue-400" />;
      case 'Digital Marketing': return <Megaphone className="w-5 h-5 text-amber-400" />;
      case 'Digital Platforms': return <Layers className="w-5 h-5 text-purple-400" />;
      case 'Content Creation': return <Video className="w-5 h-5 text-rose-400" />;
      default: return <Sparkles className="w-5 h-5 text-teal-400" />;
    }
  };

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-950/60 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-teal-400 text-xs font-mono mb-4">
            <span>ABOUT ABDUL AHAD</span>
          </div>
          <h2 id="about-heading" className="text-3xl sm:text-4xl font-display font-bold text-neutral-100 tracking-tight mb-4">
            Who Is Abdul Ahad?
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
            An authentic look at his background, academic balance, and entrepreneurial mission.
          </p>
        </div>

        {/* Narrative Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Main Biography Card */}
          <div className="lg:col-span-7 bg-neutral-900/70 border border-neutral-800 rounded-2xl p-7 sm:p-8 backdrop-blur-sm">
            <h3 className="text-xl font-display font-bold text-neutral-100 mb-4 flex items-center gap-2.5">
              <span className="w-2 h-6 rounded-full bg-teal-500"></span>
              Entrepreneurial Identity &amp; Purpose
            </h3>

            <div className="space-y-4 text-neutral-300 text-base leading-relaxed">
              <p className="text-neutral-200 font-medium">
                &ldquo;Abdul Ahad is a Bangladeshi entrepreneur, business builder, and technology-focused founder who is passionate about starting new ventures, learning new skills, and building digital businesses that can solve real-world problems.&rdquo;
              </p>

              <div className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800/80 flex items-start gap-3.5 my-4">
                <div className="p-2 rounded-lg bg-teal-500/10 border border-teal-500/20 text-teal-400 shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-neutral-200">Academic &amp; Business Balance</div>
                  <p className="text-xs text-neutral-400 mt-1 leading-normal">
                    He is currently continuing his studies while simultaneously developing his entrepreneurial career and executing digital ventures with discipline.
                  </p>
                </div>
              </div>

              <p>
                His long-term vision is to establish <strong className="text-teal-300 font-semibold">ART Group</strong> as a parent business organization under which multiple independent brands, companies, and digital platforms will operate synergistically.
              </p>
            </div>
          </div>

          {/* Vision Summary Highlights & Founder Photo Badge */}
          <div className="lg:col-span-5 space-y-4">
            {/* Quick Portrait Card */}
            <div className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-5 flex items-center gap-4">
              <div className="relative w-16 h-16 rounded-xl overflow-hidden border border-teal-500/40 shrink-0 shadow-md">
                <img 
                  src={USER_IMAGE_URL} 
                  alt="Abdul Ahad Portrait" 
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5 text-xs text-teal-400 font-mono">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>FOUNDER PROFILE</span>
                </div>
                <div className="text-sm font-bold text-neutral-100 truncate mt-0.5">
                  Abdul Ahad
                </div>
                <div className="text-xs text-neutral-400 font-mono truncate">
                  Founder &amp; CEO, ART Group
                </div>
              </div>
            </div>

            <div className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-6">
              <div className="text-xs text-teal-400 font-mono uppercase tracking-wider mb-2">Long-Term Direction</div>
              <h4 className="text-base font-bold text-neutral-100 mb-2">The ART Group Umbrella</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Rather than treating each project in isolation, Abdul Ahad structures his work to build a durable parent ecosystem capable of launching and nurturing specialized digital services.
              </p>
            </div>

            <div className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-6">
              <div className="text-xs text-teal-400 font-mono uppercase tracking-wider mb-2">Core Philosophy</div>
              <h4 className="text-base font-bold text-neutral-100 mb-2">Authentic Value Creation</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Grounding every initiative in pragmatic problem solving, ethical practices, continuous skill acquisition, and real customer utility.
              </p>
            </div>
          </div>
        </div>

        {/* Intersection of Core Interests */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-neutral-100 mb-2">
              The Intersection of Core Interests
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400">
              Key domains where Abdul Ahad focuses his curiosity, practical skill-building, and venture development.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {INTERSECTION_TOPICS.map((topic, index) => (
              <div
                key={topic.title}
                id={`intersection-topic-${topic.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-neutral-900/60 hover:bg-neutral-900 border border-neutral-800 hover:border-neutral-700 rounded-xl p-5 transition-all duration-200 group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-lg bg-neutral-950 border border-neutral-800 group-hover:border-neutral-700 transition-colors">
                    {getTopicIcon(topic.title)}
                  </div>
                  <div className="font-display font-bold text-sm text-neutral-200 group-hover:text-teal-300 transition-colors">
                    {topic.title}
                  </div>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {topic.desc}
                </p>
              </div>
            ))}

            {/* Synergistic Highlight Card */}
            <div className="bg-gradient-to-br from-teal-950/30 to-neutral-900/80 border border-teal-500/20 rounded-xl p-5 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-teal-400 mb-1">SYNERGY</div>
                <div className="font-display font-bold text-sm text-neutral-100 mb-1">
                  Ecosystem Integration
                </div>
                <p className="text-xs text-neutral-400">
                  Combining tech, marketing, and automation to empower scalable business solutions.
                </p>
              </div>
              <div className="text-[11px] text-teal-400/90 font-mono mt-3">
                ART Group Multi-Venture Core
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
