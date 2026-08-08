import React from 'react';
import { GraduationCap, MapPin, Calendar, Award, BookOpen, CheckCircle2 } from 'lucide-react';
import { EDUCATION } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-neutral-900 text-white relative border-b border-neutral-800">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-neutral-800 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-400 font-bold mb-2">
              <GraduationCap className="w-4 h-4" />
              <span>/ ACADEMIC JOURNEY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white">
              Education & Qualifications
            </h2>
          </div>
          <p className="text-neutral-400 text-sm max-w-md mt-4 md:mt-0 font-normal">
            Solid foundation in Data Science, Machine Learning, Applied Mathematics, and Computer Science from premier institutions.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EDUCATION.map((edu) => (
            <div
              key={edu.id}
              className="bg-neutral-950/80 border border-neutral-800 hover:border-neutral-700 rounded-3xl p-6 sm:p-8 transition-all duration-300 shadow-xl flex flex-col justify-between group"
            >
              <div>
                {/* Institution Header with Crest Logo */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    {edu.logo ? (
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white p-2 flex items-center justify-center shrink-0 shadow-md border border-neutral-200 overflow-hidden group-hover:scale-105 transition-transform">
                        <img
                          src={edu.logo}
                          alt={edu.institution}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                    ) : (
                      <div className="w-16 h-16 rounded-2xl bg-neutral-800 flex items-center justify-center shrink-0 border border-neutral-700 text-amber-400">
                        <GraduationCap className="w-8 h-8" />
                      </div>
                    )}

                    <div>
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-amber-400 bg-amber-950/60 border border-amber-800/50 px-3 py-0.5 rounded-full font-medium mb-1.5">
                        <Calendar className="w-3 h-3" />
                        {edu.period}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold font-display text-white leading-tight">
                        {edu.degree}
                      </h3>
                      <p className="text-sm font-medium text-neutral-300 mt-1 flex items-center gap-1.5">
                        {edu.institution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Location & Details */}
                <div className="space-y-4 border-t border-neutral-800/80 pt-4">
                  {edu.location && (
                    <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-mono">
                      <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                      <span>{edu.location}</span>
                    </div>
                  )}

                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {edu.details}
                  </p>

                  {/* Highlights / Major Focus Areas */}
                  {edu.id === "sltc-bsc" ? (
                    <div className="pt-2">
                      <p className="text-xs font-mono text-neutral-400 mb-2 uppercase tracking-wider flex items-center gap-1 font-semibold">
                        <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                        Key Focus Areas:
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {["Machine Learning", "MLOps", "Big Data (PySpark)", "Deep Learning", "Statistics", "DBMS", "Explainable AI"].map((subject) => (
                          <span
                            key={subject}
                            className="text-xs bg-neutral-900 border border-neutral-800 text-neutral-300 px-2.5 py-1 rounded-md flex items-center gap-1"
                          >
                            <CheckCircle2 className="w-3 h-3 text-amber-400" />
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="pt-2">
                      <p className="text-xs font-mono text-neutral-400 mb-2 uppercase tracking-wider flex items-center gap-1 font-semibold">
                        <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                        A/L Subject Stream:
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {["Combined Mathematics", "Physics", "ICT"].map((subject) => (
                          <span
                            key={subject}
                            className="text-xs bg-neutral-900 border border-neutral-800 text-neutral-300 px-2.5 py-1 rounded-md flex items-center gap-1"
                          >
                            <CheckCircle2 className="w-3 h-3 text-amber-400" />
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
