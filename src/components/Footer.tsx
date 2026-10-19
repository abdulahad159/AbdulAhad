import React from 'react';
import { 
  Send, 
  Youtube, 
  Facebook, 
  Twitter, 
  Video, 
  ArrowUp, 
  Building2, 
  Sparkles,
  Mail,
  MessageSquare
} from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-neutral-950 border-t border-neutral-900 py-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
          
          {/* Brand Identity */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 font-display font-bold text-base">
                AA
              </div>
              <div>
                <h3 className="font-display font-extrabold text-xl text-neutral-100 tracking-tight">
                  ABDUL AHAD
                </h3>
                <div className="text-xs text-neutral-400 font-medium">
                  {PERSONAL_INFO.titles}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-3">
              <span className="text-xs px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-teal-400 font-mono font-semibold">
                ART GROUP
              </span>
              <span className="text-xs text-neutral-500 font-mono">
                The Parent Organization
              </span>
            </div>
          </div>

          {/* Social Icons List */}
          <div className="flex flex-wrap items-center gap-2.5">
            {/* Telegram */}
            <a
              id="footer-social-telegram"
              href="https://t.me/Abdul_Ahad7"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 text-neutral-300 hover:text-sky-400 transition-colors"
              aria-label="Telegram"
              title="Telegram"
            >
              <Send className="w-4 h-4" />
            </a>

            {/* YouTube */}
            <a
              id="footer-social-youtube"
              href="https://www.youtube.com/channel/UCfeY3wi-puGTkn4nK-Rv-Ew"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 text-neutral-300 hover:text-red-400 transition-colors"
              aria-label="YouTube"
              title="YouTube"
            >
              <Youtube className="w-4 h-4" />
            </a>

            {/* Facebook */}
            <a
              id="footer-social-facebook"
              href="https://www.facebook.com/profile.php?id=61590846479758"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 text-neutral-300 hover:text-blue-400 transition-colors"
              aria-label="Facebook"
              title="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>

            {/* X / Twitter */}
            <a
              id="footer-social-twitter"
              href="https://x.com/ABDULAHAD_OnR"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 text-neutral-300 hover:text-neutral-100 transition-colors"
              aria-label="X / Twitter"
              title="X / Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>

            {/* TikTok */}
            <a
              id="footer-social-tiktok"
              href="https://www.tiktok.com/@tecify.analysis"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 text-neutral-300 hover:text-pink-400 transition-colors"
              aria-label="TikTok"
              title="TikTok"
            >
              <Video className="w-4 h-4" />
            </a>

            {/* WhatsApp */}
            <a
              id="footer-social-whatsapp"
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 text-neutral-300 hover:text-emerald-400 transition-colors"
              aria-label="WhatsApp"
              title="WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            {/* Email */}
            <a
              id="footer-social-email"
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 text-neutral-300 hover:text-amber-400 transition-colors"
              aria-label="Email"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 text-neutral-400 hover:text-neutral-200 transition-colors cursor-pointer self-start md:self-auto"
            aria-label="Back to top"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Legal / Copyright Bar */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-mono">
          <div>
            &copy; 2026 Abdul Ahad. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-neutral-400">
            <span>ART Group Ecosystem</span>
            <span>•</span>
            <span>E Solutioner BD</span>
            <span>•</span>
            <span>BoostNex</span>
            <span>•</span>
            <span>TechFinyx</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
