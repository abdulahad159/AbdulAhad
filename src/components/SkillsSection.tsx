import React, { useState } from 'react';
import { 
  Briefcase, 
  Compass, 
  LineChart, 
  Award, 
  GitMerge, 
  Users, 
  Kanban, 
  Bot, 
  Cpu, 
  ShieldCheck, 
  LayoutGrid, 
  Megaphone, 
  Video, 
  MessagesSquare, 
  Target, 
  Handshake, 
  Globe,
  CheckCircle2,
  Filter,
  Search
} from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categories = ['All', 'Strategy & Leadership', 'Technology & Automation', 'Digital Business & Growth'];

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase': return <Briefcase className="w-4 h-4 text-teal-400" />;
      case 'Compass': return <Compass className="w-4 h-4 text-cyan-400" />;
      case 'LineChart': return <LineChart className="w-4 h-4 text-amber-400" />;
      case 'Award': return <Award className="w-4 h-4 text-emerald-400" />;
      case 'GitMerge': return <GitMerge className="w-4 h-4 text-blue-400" />;
      case 'Users': return <Users className="w-4 h-4 text-purple-400" />;
      case 'Kanban': return <Kanban className="w-4 h-4 text-rose-400" />;
      case 'Bot': return <Bot className="w-4 h-4 text-teal-400" />;
      case 'Cpu': return <Cpu className="w-4 h-4 text-cyan-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-4 h-4 text-emerald-400" />;
      case 'LayoutGrid': return <LayoutGrid className="w-4 h-4 text-indigo-400" />;
      case 'Megaphone': return <Megaphone className="w-4 h-4 text-amber-400" />;
      case 'Video': return <Video className="w-4 h-4 text-rose-400" />;
      case 'MessagesSquare': return <MessagesSquare className="w-4 h-4 text-teal-400" />;
      case 'Target': return <Target className="w-4 h-4 text-red-400" />;
      case 'Handshake': return <Handshake className="w-4 h-4 text-emerald-400" />;
      case 'Globe': return <Globe className="w-4 h-4 text-blue-400" />;
      default: return <CheckCircle2 className="w-4 h-4 text-teal-400" />;
    }
  };

  const filteredSkills = SKILLS_DATA.filter((skill) => {
    const matchesCat = selectedCategory === 'All' || skill.category === selectedCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-950/70 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-teal-400 text-xs font-mono mb-4">
            <span>CAPABILITIES &amp; INTERESTS</span>
          </div>
          <h2 id="skills-heading" className="text-3xl sm:text-4xl font-display font-bold text-neutral-100 tracking-tight mb-3">
            Skills &amp; Expertise
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Practical skills, foundational knowledge, and continuous learning domains developed through building digital projects and business exploration.
          </p>

          {/* Honest Capability Disclaimer */}
          <div className="inline-block mt-4 px-4 py-2 rounded-xl bg-neutral-900/90 border border-neutral-800 text-xs text-neutral-300 font-mono">
            Focus: <span className="text-teal-300 font-semibold">&ldquo;Knowledge &amp; Practical Interest&rdquo;</span> across all operational areas
          </div>
        </div>

        {/* Filter and Search Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-1.5 bg-neutral-900/90 p-1 rounded-xl border border-neutral-800 w-full sm:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-teal-500 text-neutral-950 font-semibold shadow-xs'
                    : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-neutral-900 border border-neutral-800 rounded-xl pl-9 pr-3.5 py-1.5 text-xs text-neutral-200 placeholder:text-neutral-500 focus:outline-none focus:border-teal-500 transition-colors"
            />
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              id={`skill-card-${skill.id}`}
              className="bg-neutral-900/70 hover:bg-neutral-900 border border-neutral-800/80 hover:border-neutral-700 rounded-xl p-4.5 transition-all duration-200 group flex items-start justify-between gap-3 shadow-xs"
            >
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-neutral-950 border border-neutral-800 group-hover:border-neutral-700 transition-colors shrink-0">
                  {getSkillIcon(skill.icon)}
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm text-neutral-200 group-hover:text-teal-300 transition-colors">
                    {skill.name}
                  </h3>
                  <div className="text-[11px] text-neutral-500 font-mono mt-0.5">
                    {skill.levelDescription}
                  </div>
                  <div className="text-[10px] text-neutral-400 mt-1">
                    {skill.category}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 text-neutral-500 text-sm">
            No skills found matching &ldquo;{searchTerm}&rdquo;
          </div>
        )}

      </div>
    </section>
  );
};
