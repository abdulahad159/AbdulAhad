import React from 'react';
import { ArrowRight, MessageSquare, Sparkles, Building2, MapPin, Layers, ShieldCheck, ChevronDown } from 'lucide-react';
import { PERSONAL_INFO, USER_IMAGE_URL } from '../data/portfolioData';
import ParticleText from './ParticleText';
import ProfileCard from './ProfileCard';

export const HeroSection: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-grid-pattern overflow-hidden"
    >
      {/* Subtle Background Glows (clean, non-neon, dark luxury aesthetic) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-teal-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text, Identity, CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Status Pill */}
            <div 
              id="hero-status-badge"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 text-neutral-300 text-xs font-medium mb-4 shadow-xs"
            >
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
              <span className="text-teal-400 font-mono font-medium">Founder &amp; CEO</span>
              <span className="text-neutral-600">•</span>
              <span className="text-neutral-400">ART Group Parent Ecosystem</span>
            </div>

            {/* Interactive Particle Name Heading */}
            <div className="w-full max-w-xl h-24 sm:h-28 md:h-32 mb-2 relative">
              <ParticleText
                text="ABDUL AHAD"
                particleSize={2.2}
                density={3}
                color="#f5f5f5"
                highlightColor="#2dd4bf"
                scatter={160}
                gatherDuration={1500}
                stagger={380}
                pointerRepel={42}
                repelRadius={120}
                idleDrift={0.6}
                trigger="hover"
                fontSize="clamp(2.4rem, 5.5vw, 4.2rem)"
                fontWeight={800}
                fontFamily="'Outfit', sans-serif"
                glow
                className="!min-h-0"
              />
            </div>

            {/* Sub-titles */}
            <div 
              id="hero-titles-subheading"
              className="text-lg sm:text-xl md:text-2xl font-medium text-teal-400/95 tracking-normal mb-6 flex flex-wrap items-center gap-x-2 gap-y-1"
            >
              <span>Founder &amp; CEO</span>
              <span className="text-neutral-600">|</span>
              <span className="text-neutral-200">Entrepreneur</span>
              <span className="text-neutral-600">|</span>
              <span className="text-neutral-300">Business Builder</span>
            </div>

            {/* Short Introduction */}
            <p 
              id="hero-intro-paragraph"
              className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed max-w-xl mb-8"
            >
              &ldquo;{PERSONAL_INFO.heroIntro}&rdquo;
            </p>

            {/* Two Primary CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                id="hero-cta-explore"
                onClick={() => handleScrollTo('about')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-neutral-950 font-semibold text-sm transition-all duration-200 shadow-md shadow-teal-500/20 active:scale-95 group cursor-pointer"
              >
                <span>Explore My Journey</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>

              <button
                id="hero-cta-connect"
                onClick={() => handleScrollTo('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-100 hover:text-white border border-neutral-700/80 font-semibold text-sm transition-all duration-200 active:scale-95 cursor-pointer shadow-xs"
              >
                <MessageSquare className="w-4 h-4 text-teal-400" />
                <span>Let&apos;s Connect</span>
              </button>
            </div>

            {/* Quick credibility indicators */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-10 pt-8 border-t border-neutral-800/80 w-full">
              <div>
                <div className="text-xs text-neutral-500 font-mono uppercase tracking-wider mb-1">Focus</div>
                <div className="text-sm font-semibold text-neutral-200">Digital Businesses</div>
              </div>
              <div>
                <div className="text-xs text-neutral-500 font-mono uppercase tracking-wider mb-1">Parent Entity</div>
                <div className="text-sm font-semibold text-teal-300">ART Group</div>
              </div>
              <div>
                <div className="text-xs text-neutral-500 font-mono uppercase tracking-wider mb-1">Region</div>
                <div className="text-sm font-semibold text-neutral-200">Bangladesh</div>
              </div>
            </div>
          </div>

          {/* Right Column: React Bits ProfileCard with 3D Hologram Tilt & Portrait Image */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <ProfileCard
              avatarUrl={USER_IMAGE_URL}
              miniAvatarUrl={USER_IMAGE_URL}
              name="Abdul Ahad"
              title="Founder & CEO | ART Group"
              handle="Abdul_Ahad7"
              status="Active Builder"
              contactText="Connect"
              onContactClick={() => handleScrollTo('contact')}
              enableTilt={true}
              enableMobileTilt={true}
              behindGlowEnabled={true}
              behindGlowColor="rgba(45, 212, 191, 0.45)"
              innerGradient="linear-gradient(145deg, rgba(20, 184, 166, 0.12) 0%, rgba(14, 116, 144, 0.18) 100%)"
            />

            {/* Extra verified status badges */}
            <div className="mt-4 flex items-center justify-center gap-4 text-xs font-mono text-neutral-400">
              <span className="flex items-center gap-1.5 text-teal-400">
                <ShieldCheck className="w-4 h-4" />
                Verified Founder
              </span>
              <span>•</span>
              <span>Parent: ART Group</span>
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => handleScrollTo('about')}
            className="flex flex-col items-center gap-1 text-xs text-neutral-500 hover:text-neutral-300 transition-colors"
            aria-label="Scroll to about section"
          >
            <span className="font-mono text-[10px] tracking-wider uppercase">Scroll Down</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-teal-400/80" />
          </button>
        </div>
      </div>
    </section>
  );
};
