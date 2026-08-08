import React, { useState } from 'react';
import { ArrowUpRight, Mail, Phone, MapPin, Send, CheckCircle2, Github, Linkedin, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactCTAProps {
  onOpenModal: () => void;
}

export const ContactCTA: React.FC<ContactCTAProps> = ({ onOpenModal }) => {
  return (
    <section id="contact" className="py-24 bg-cloud-pattern relative overflow-hidden border-b border-black/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Container Card matching Image 5 */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 sm:p-14 md:p-16 shadow-xl border border-white/60 space-y-8">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 bg-white border border-neutral-200/80 px-4 py-2 rounded-full shadow-xs">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-semibold text-neutral-800 tracking-tight">
              Available for Internships & Projects
            </span>
          </div>

          {/* Main Display Headline matching Image 5 */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-display text-neutral-900 tracking-tight leading-tight uppercase">
            HAVE A PROJECT IN MIND?
          </h2>

          <p className="text-neutral-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Together, we can create something clear, scalable, and data-driven. Let's collaborate to bring our machine learning and analytics ideas to life in a way that resonates.
          </p>

          {/* Action Button */}
          <div className="pt-2 flex justify-center">
            <button
              onClick={onOpenModal}
              className="bg-black hover:bg-neutral-800 text-white font-semibold text-sm px-8 py-4 rounded-full flex items-center gap-2 transition-all shadow-xl hover:shadow-2xl active:scale-95 cursor-pointer"
            >
              <span>Contact Me</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Bottom Social Pills Bar matching Image 5 */}
          <div className="pt-10 border-t border-neutral-200/80 flex flex-wrap items-center justify-center gap-3">
            
            {/* Avatar Pill */}
            <div className="bg-neutral-900 text-white px-4 py-2 rounded-full flex items-center gap-2.5 shadow-md">
              <img
                src={PERSONAL_INFO.profileImage}
                alt={PERSONAL_INFO.name}
                className="w-6 h-6 rounded-full object-cover grayscale"
              />
              <span className="text-xs font-bold tracking-tight">{PERSONAL_INFO.shortName}</span>
            </div>

            {/* GitHub Pill */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="bg-white hover:bg-neutral-50 border border-neutral-200 text-neutral-800 px-4 py-2 rounded-full flex items-center gap-2 text-xs font-semibold transition-all shadow-xs"
            >
              <Github className="w-4 h-4 text-neutral-700" />
              <span>GitHub</span>
            </a>

            {/* LinkedIn Pill */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="bg-white hover:bg-neutral-50 border border-neutral-200 text-neutral-800 px-4 py-2 rounded-full flex items-center gap-2 text-xs font-semibold transition-all shadow-xs"
            >
              <Linkedin className="w-4 h-4 text-blue-600" />
              <span>LinkedIn</span>
            </a>

            {/* Email Pill */}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="bg-white hover:bg-neutral-50 border border-neutral-200 text-neutral-800 px-4 py-2 rounded-full flex items-center gap-2 text-xs font-semibold transition-all shadow-xs"
            >
              <Mail className="w-4 h-4 text-emerald-600" />
              <span>{PERSONAL_INFO.email}</span>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};
