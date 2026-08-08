import React from 'react';
import { Briefcase, Users, Calendar, Award, CheckCircle2, Sparkles } from 'lucide-react';
import { EXPERIENCE, SOFT_SKILLS } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-neutral-900 text-white relative border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-neutral-800 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-400 font-bold mb-2">
              <Users className="w-4 h-4" />
              <span>/ LEADERSHIP & ORGANIZATIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white">
              Leadership & Volunteering
            </h2>
          </div>
          <p className="text-neutral-400 text-sm max-w-md mt-4 md:mt-0 font-normal">
            Proven track record in managing non-profit projects, leading operational teams, and driving social impact initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Timeline Column (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            {EXPERIENCE.map((exp) => (
              <div
                key={exp.id}
                className="bg-neutral-950/90 border border-neutral-800 hover:border-neutral-700 rounded-2xl p-6 sm:p-8 transition-all duration-300 relative group shadow-lg"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono text-amber-400 bg-amber-950/80 border border-amber-800/60 px-3 py-0.5 rounded-full font-medium">
                        {exp.badge}
                      </span>
                      <span className="text-xs font-mono text-neutral-400 flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-neutral-500" />
                        {exp.period}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold font-display text-white">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-neutral-400 mt-0.5">
                      {exp.organization}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-neutral-300 leading-relaxed mb-4 font-normal">
                  {exp.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 border-t border-neutral-800/80 pt-4">
                  {exp.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Soft Skills & Core Values (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-neutral-950/90 border border-neutral-800 rounded-2xl p-6 sticky top-28 shadow-xl">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400 font-bold mb-4 border-b border-neutral-800 pb-3">
                <Sparkles className="w-4 h-4" />
                <span>Professional Soft Skills</span>
              </div>

              <div className="space-y-4">
                {SOFT_SKILLS.map((skill) => (
                  <div key={skill.name} className="p-3.5 rounded-xl bg-neutral-900 border border-neutral-800/80">
                    <h4 className="text-sm font-bold text-white font-display mb-1 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                      {skill.name}
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {skill.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
