import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { VisionSection } from './components/VisionSection';
import { ArtGroupSection } from './components/ArtGroupSection';
import { VenturesSection } from './components/VenturesSection';
import { SkillsSection } from './components/SkillsSection';
import { LeadershipSection } from './components/LeadershipSection';
import { LearningSection } from './components/LearningSection';
import { RoadmapSection } from './components/RoadmapSection';
import { PersonalBrandSection } from './components/PersonalBrandSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import GlowCursor from './components/GlowCursor';
import { MessageSquare, ArrowUp, Send, Mail } from 'lucide-react';
import { PERSONAL_INFO } from './data/portfolioData';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [showFloatingBar, setShowFloatingBar] = useState<boolean>(false);

  useEffect(() => {
    const sectionIds = [
      'hero',
      'about',
      'vision',
      'art-group',
      'ventures',
      'skills',
      'leadership',
      'learning',
      'roadmap',
      'personal-brand',
      'contact'
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      setShowFloatingBar(window.scrollY > 600);

      for (const sectionId of sectionIds) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-teal-500/30 selection:text-teal-200 relative">
      
      {/* React Bits Glow Cursor Layer */}
      <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
        <GlowCursor
          color="#2dd4bf"
          secondaryColor="#38bdf8"
          trailLength={36}
          trailWidth={7}
          trailTaper={0.8}
          followSpeed={0.18}
          glowIntensity={1.8}
          glowSpread={1.2}
          hotspot={0.65}
          brightness={1.2}
          opacity={0.85}
          pulseSpeed={1.0}
          noiseStrength={0.035}
          idleFade
          idleTimeout={600}
          fadeDuration={800}
          blendMode="screen"
        />
      </div>

      {/* Sticky Navigation Header */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <VisionSection />
        <ArtGroupSection />
        <VenturesSection />
        <SkillsSection />
        <LeadershipSection />
        <LearningSection />
        <RoadmapSection />
        <PersonalBrandSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Quick Connect Button for Instant Reach */}
      {showFloatingBar && (
        <div 
          id="floating-quick-action"
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2 animate-in fade-in slide-in-from-bottom-4 duration-300"
        >
          <a
            href={PERSONAL_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-neutral-950 shadow-xl shadow-emerald-500/20 transition-all duration-200 hover:scale-105 active:scale-95 flex items-center justify-center"
            title="Chat on WhatsApp"
            aria-label="Chat on WhatsApp"
          >
            <MessageSquare className="w-5 h-5 fill-current" />
          </a>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-3 rounded-full bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700 text-neutral-100 text-xs font-semibold backdrop-blur-md shadow-xl transition-all hover:scale-105 active:scale-95"
          >
            <Mail className="w-3.5 h-3.5 text-teal-400" />
            <span>Connect</span>
          </a>
        </div>
      )}

    </div>
  );
}
