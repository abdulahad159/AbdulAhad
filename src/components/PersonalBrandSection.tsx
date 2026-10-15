import React from 'react';
import { 
  Send, 
  Radio, 
  Youtube, 
  Facebook, 
  Twitter, 
  Video, 
  Mail, 
  Phone, 
  MessageSquare, 
  ExternalLink, 
  Sparkles, 
  ArrowUpRight 
} from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolioData';

export const PersonalBrandSection: React.FC = () => {
  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Send': return <Send className="w-4 h-4 text-sky-400" />;
      case 'Radio': return <Radio className="w-4 h-4 text-cyan-400" />;
      case 'Youtube': return <Youtube className="w-4 h-4 text-red-400" />;
      case 'Facebook': return <Facebook className="w-4 h-4 text-blue-400" />;
      case 'Twitter': return <Twitter className="w-4 h-4 text-neutral-200" />;
      case 'Video': return <Video className="w-4 h-4 text-pink-400" />;
      case 'Mail': return <Mail className="w-4 h-4 text-amber-400" />;
      case 'Phone': return <Phone className="w-4 h-4 text-emerald-400" />;
      case 'MessageSquare': return <MessageSquare className="w-4 h-4 text-emerald-400" />;
      default: return <ExternalLink className="w-4 h-4 text-teal-400" />;
    }
  };

  return (
    <section id="personal-brand" className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-950/70 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-teal-400 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>IDENTITY &amp; PRESENCE</span>
          </div>
          <h2 id="personal-brand-heading" className="text-3xl sm:text-4xl font-display font-bold text-neutral-100 tracking-tight mb-3">
            My Personal Brand
          </h2>
          <div className="text-lg sm:text-xl font-medium text-teal-300 font-display mb-4">
            &ldquo;{PERSONAL_INFO.brandStatement}&rdquo;
          </div>
          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Abdul Ahad wants his online presence to document his entrepreneurial journey, projects, skills, businesses, and future growth in an authentic, transparent way.
          </p>
        </div>

        {/* Social Links Hub Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.id}
              id={`social-card-${link.id}`}
              href={link.url}
              target={link.url.startsWith('mailto:') || link.url.startsWith('tel:') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className="bg-neutral-900/60 hover:bg-neutral-900 border border-neutral-800 hover:border-neutral-700 rounded-2xl p-5 transition-all duration-200 flex flex-col justify-between group cursor-pointer shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-neutral-950 border border-neutral-800 group-hover:border-neutral-700 transition-colors">
                    {getSocialIcon(link.icon)}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 bg-neutral-950 px-2 py-0.5 rounded border border-neutral-800">
                    {link.category}
                  </span>
                </div>

                <h3 className="font-display font-bold text-base text-neutral-100 group-hover:text-teal-300 transition-colors flex items-center gap-1.5">
                  {link.name}
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                </h3>

                <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                  {link.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-850 flex items-center justify-between">
                <span className="text-xs font-mono text-teal-400/90 truncate max-w-[200px]">
                  {link.displayValue || link.url}
                </span>
                <span className="text-[11px] text-neutral-400 group-hover:text-neutral-200">
                  Open →
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
