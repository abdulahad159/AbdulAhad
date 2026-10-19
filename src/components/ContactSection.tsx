import React, { useState } from 'react';
import { 
  Mail, 
  MessageSquare, 
  Send, 
  Copy, 
  Check, 
  ArrowUpRight, 
  Sparkles, 
  Info,
  Clock,
  Building2
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  
  // Interactive Inquiry Composer state
  const [inquiryType, setInquiryType] = useState<string>('Business Collaboration');
  const [senderName, setSenderName] = useState<string>('');
  const [senderMessage, setSenderMessage] = useState<string>('');
  const [formSentNotice, setFormSentNotice] = useState<string | null>(null);

  const copyToClipboard = (text: string, fieldId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldId);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleLaunchEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Inquiry: ${inquiryType}] From ${senderName || 'Prospective Partner'}`);
    const body = encodeURIComponent(
      `Hello Abdul Ahad,\n\nMy name: ${senderName || 'Not specified'}\nInquiry Category: ${inquiryType}\n\nMessage:\n${senderMessage || 'I would like to connect regarding business opportunities with ART Group / E Solutioner BD.'}\n\nBest regards,\n${senderName || ''}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setFormSentNotice('Launched your email client with pre-filled details!');
    setTimeout(() => setFormSentNotice(null), 5000);
  };

  const handleLaunchWhatsApp = () => {
    const text = encodeURIComponent(
      `Hi Abdul Ahad, I reached out via your portfolio website regarding: *${inquiryType}*.\n\nFrom: ${senderName || 'Visitor'}\nMessage: ${senderMessage || 'Let us discuss digital business and collaboration opportunities.'}`
    );
    const waBase = PERSONAL_INFO.whatsappUrl || 'https://wa.me/?text=Hello%20Abdul%20Ahad';
    const separator = waBase.includes('?') ? '&' : '?';
    const a = document.createElement('a');
    a.href = `${waBase}${separator}text=${text}`;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-t border-neutral-900 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-mono mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>DIRECT ENGAGEMENT</span>
          </div>
          <h2 id="contact-heading" className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-neutral-100 tracking-tight mb-3">
            Let&apos;s Build Something Meaningful
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg">
            &ldquo;Have an idea, collaboration opportunity, or business inquiry?&rdquo;
          </p>
        </div>

        {/* 3 Primary Direct Contact Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          
          {/* Email Me Button */}
          <div className="bg-neutral-900/80 border border-neutral-800 hover:border-teal-500/50 rounded-2xl p-6 transition-all flex flex-col justify-between group shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                  className="p-1.5 rounded-lg bg-neutral-950 text-neutral-400 hover:text-neutral-200 border border-neutral-800 text-xs"
                  title="Copy email address"
                >
                  {copiedField === 'email' ? <Check className="w-3.5 h-3.5 text-teal-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
              <h3 className="font-display font-bold text-lg text-neutral-100">Email Me</h3>
              <p className="text-xs text-neutral-400 mt-1 font-mono truncate">
                {PERSONAL_INFO.email}
              </p>
            </div>
            <a
              id="direct-btn-email"
              href={`mailto:${PERSONAL_INFO.email}`}
              className="mt-6 w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-neutral-950 font-semibold text-xs transition-colors"
            >
              <span>Open Mail Client</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* WhatsApp Button */}
          <div className="bg-neutral-900/80 border border-neutral-800 hover:border-emerald-500/50 rounded-2xl p-6 transition-all flex flex-col justify-between group shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/60">
                  Fastest
                </span>
              </div>
              <h3 className="font-display font-bold text-lg text-neutral-100">WhatsApp</h3>
              <p className="text-xs text-neutral-400 mt-1 font-mono">
                Direct Chat
              </p>
            </div>
            <a
              id="direct-btn-whatsapp"
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-semibold text-xs transition-colors"
            >
              <span>Message on WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Telegram Personal Button */}
          <div className="bg-neutral-900/80 border border-neutral-800 hover:border-sky-500/50 rounded-2xl p-6 transition-all flex flex-col justify-between group shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400">
                  <Send className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-sky-400 bg-sky-950/60 px-2 py-0.5 rounded border border-sky-800/60">
                  Direct
                </span>
              </div>
              <h3 className="font-display font-bold text-lg text-neutral-100">Telegram</h3>
              <p className="text-xs text-neutral-400 mt-1 font-mono">
                @Abdul_Ahad7
              </p>
            </div>
            <a
              id="direct-btn-telegram"
              href="https://t.me/Abdul_Ahad7"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-neutral-950 font-semibold text-xs transition-colors"
            >
              <span>Open Telegram</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Interactive Direct Inquiry Form with Authentic Action Routing */}
        <div className="bg-neutral-900/60 border border-neutral-800 rounded-3xl p-6 sm:p-10">
          <div className="max-w-3xl mx-auto">
            
            <div className="text-center mb-8">
              <h3 className="text-xl sm:text-2xl font-display font-bold text-neutral-100">
                Compose a Direct Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                Draft your inquiry details below. You can directly launch your pre-filled email or send via WhatsApp.
              </p>
            </div>

            {formSentNotice && (
              <div className="mb-6 p-4 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs flex items-center gap-2">
                <Check className="w-4 h-4 text-teal-400 shrink-0" />
                <span>{formSentNotice}</span>
              </div>
            )}

            <form onSubmit={handleLaunchEmail} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                    Your Name / Organization
                  </label>
                  <input
                    id="contact-sender-name"
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. Sarah Jenkins or Apex Agency"
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-sm text-neutral-200 placeholder:text-neutral-600 focus:outline-none focus:border-teal-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                    Inquiry Category
                  </label>
                  <select
                    id="contact-inquiry-category"
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-sm text-neutral-200 focus:outline-none focus:border-teal-500 transition-colors cursor-pointer"
                  >
                    <option value="Business Collaboration">Business Collaboration</option>
                    <option value="E Solutioner BD Agency Inquiry">E Solutioner BD Agency Inquiry</option>
                    <option value="BoostNex / Platform Discussion">BoostNex / Platform Discussion</option>
                    <option value="General Networking">General Networking</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                  Message / Opportunity Details
                </label>
                <textarea
                  id="contact-message-text"
                  required
                  rows={4}
                  value={senderMessage}
                  onChange={(e) => setSenderMessage(e.target.value)}
                  placeholder="Share a concise description of your project, proposal, or question..."
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl p-4 text-sm text-neutral-200 placeholder:text-neutral-600 focus:outline-none focus:border-teal-500 transition-colors resize-y"
                ></textarea>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-2 text-[11px] text-neutral-400 font-mono">
                  <Info className="w-3.5 h-3.5 text-teal-400" />
                  <span>Opens your native mail or WhatsApp with pre-composed text</span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={handleLaunchWhatsApp}
                    className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Send via WhatsApp</span>
                  </button>

                  <button
                    id="contact-submit-email-btn"
                    type="submit"
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-neutral-950 font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Email</span>
                  </button>
                </div>
              </div>
            </form>

            {/* Honest Backend Integration Note */}
            <div className="mt-8 pt-6 border-t border-neutral-800/80 text-center">
              <span className="text-[11px] text-neutral-500 font-mono">
                Note: Direct messaging via Email, WhatsApp, and Telegram is live. Dedicated cloud SMTP server routing can be hooked up if requested.
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
