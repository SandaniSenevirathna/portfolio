import React from 'react';
import { ArrowUpRight, Github, Linkedin, Mail, FileText, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-cloud-pattern min-h-[90vh] flex flex-col justify-between border-b border-black/5">
      
      {/* Background Subtle Gradient & Grid Glow */}
      <div className="absolute inset-0 bg-radial from-white/60 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        
        {/* Main Hero Giant Display Typography Layer */}
        <div className="relative text-center select-none pt-2 pb-6">
          
          {/* Big Header Text - Positioned clearly above the portrait image */}
          <div className="relative z-30 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 lg:gap-6 tracking-tighter leading-none w-full max-w-full px-2 mb-8 sm:mb-12">
            <span className="text-4xl sm:text-6xl md:text-7xl lg:text-[clamp(3.5rem,7vw,8rem)] xl:text-[clamp(4rem,7.5vw,9.5rem)] font-black font-display text-stroke-outline uppercase tracking-tight whitespace-nowrap">
              SANDANI
            </span>
            <span className="text-4xl sm:text-6xl md:text-7xl lg:text-[clamp(3.5rem,7vw,8rem)] xl:text-[clamp(4rem,7.5vw,9.5rem)] font-black font-display text-neutral-900 uppercase tracking-tight whitespace-nowrap">
              SENEVIRATHNA
            </span>
          </div>

          {/* Central Cutout Portrait Image - Positioned neatly below name with clean separation */}
          <div className="relative z-10 mt-4 sm:mt-8 md:mt-10 flex justify-center pointer-events-none">
            <div className="relative group pointer-events-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-neutral-300 to-neutral-400 rounded-b-full blur-sm opacity-50"></div>
              <div className="relative w-52 sm:w-64 md:w-72 lg:w-80 h-60 sm:h-72 md:h-80 lg:h-90 rounded-b-full overflow-hidden border-4 border-white shadow-2xl bg-white">
                <img
                  src={PERSONAL_INFO.profileImage}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover object-top scale-105 transition-transform duration-700 hover:scale-110 grayscale hover:grayscale-0"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Hero Info & Social Floating Pills */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end mt-4">
          
          {/* Left Column: Title & Mission */}
          <div className="md:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-black/5 border border-black/10 text-xs font-mono font-medium text-neutral-700">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>BSc (Hons) Data Science — SLTC</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-neutral-900 tracking-tight leading-tight">
              Data Science Undergraduate & MLOps Specialist
            </h2>
            
            <p className="text-neutral-600 text-sm sm:text-base max-w-lg font-normal leading-relaxed">
              Designing end-to-end machine learning pipelines, explainable AI mHealth systems, and big data architectures that are clear, robust, and conversion-focused.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenContact}
                className="bg-black hover:bg-neutral-800 text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full flex items-center gap-2 transition-all shadow-lg hover:shadow-xl active:scale-95 cursor-pointer"
              >
                <span>Let's collaborate</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="bg-white/80 hover:bg-white text-neutral-800 border border-black/10 hover:border-black/20 text-xs sm:text-sm font-medium px-5 py-3 rounded-full flex items-center gap-2 transition-all shadow-xs cursor-pointer"
              >
                <Github className="w-4 h-4 text-neutral-700" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Right Column: Social Pills Stack (Style matching image 1) */}
          <div className="md:col-span-6 flex flex-col items-start md:items-end gap-2.5">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="w-44 bg-white/90 hover:bg-white border border-neutral-200/80 hover:border-neutral-400 px-4 py-2.5 rounded-full shadow-xs flex items-center justify-between text-xs font-semibold text-neutral-800 transition-all hover:scale-[1.02] cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <Github className="w-4 h-4 text-neutral-700" />
                <span>GitHub</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-44 bg-white/90 hover:bg-white border border-neutral-200/80 hover:border-neutral-400 px-4 py-2.5 rounded-full shadow-xs flex items-center justify-between text-xs font-semibold text-neutral-800 transition-all hover:scale-[1.02] cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <Linkedin className="w-4 h-4 text-blue-600" />
                <span>LinkedIn</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
            </a>

            <button
              onClick={onOpenContact}
              className="w-44 bg-white/90 hover:bg-white border border-neutral-200/80 hover:border-neutral-400 px-4 py-2.5 rounded-full shadow-xs flex items-center justify-between text-xs font-semibold text-neutral-800 transition-all hover:scale-[1.02] cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-600" />
                <span>Email Me</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
