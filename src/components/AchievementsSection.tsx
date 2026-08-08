import React from 'react';
import { Trophy, Award, Sparkles, Star, CheckCircle } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="py-20 bg-white relative border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-black/10 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-600 font-bold mb-2">
              <Trophy className="w-4 h-4 text-amber-500" />
              <span>/ HONORS & COMPETITIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-neutral-900">
              Awards & Achievements
            </h2>
          </div>
          <p className="text-neutral-600 text-sm max-w-md mt-4 md:mt-0 font-normal">
            National hackathon podium finishes, competitive machine learning recognitions, and community service excellence awards.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ACHIEVEMENTS.map((item) => (
            <div
              key={item.id}
              className="bg-neutral-50 border border-neutral-200 hover:border-neutral-400 rounded-3xl p-6 sm:p-8 transition-all duration-300 shadow-sm hover:shadow-xl relative overflow-hidden group flex flex-col justify-between"
            >
              {/* Background Accent Pill */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform" />

              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-amber-800 bg-amber-100 border border-amber-200 px-3 py-1 rounded-full">
                    <Award className="w-3.5 h-3.5 text-amber-600" />
                    {item.id === "inspiher-hacknova" ? "1st Runner-Up (2nd Place)" : "Triple Award Winner"}
                  </span>

                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  </div>
                </div>

                {/* Title & Organizer */}
                <h3 className="text-xl sm:text-2xl font-bold font-display text-neutral-900 leading-snug mb-2">
                  {item.title}
                </h3>
                <p className="text-xs font-mono font-semibold text-neutral-500 uppercase tracking-wider mb-4">
                  Organized by {item.organizer}
                </p>

                {/* Description */}
                <p className="text-sm text-neutral-700 leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>
              </div>

              {/* Specific Highlights for Each Award */}
              <div className="border-t border-neutral-200/80 pt-4 mt-auto">
                {item.id === "inspiher-hacknova" ? (
                  <div className="space-y-2 mb-4">
                    <p className="text-xs font-mono uppercase font-semibold text-neutral-500">
                      Competition Phases Cleared:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                      <div className="bg-white border border-neutral-200 p-2 rounded-lg text-center font-medium text-neutral-800 shadow-2xs">
                        1. MLArena (ML)
                      </div>
                      <div className="bg-white border border-neutral-200 p-2 rounded-lg text-center font-medium text-neutral-800 shadow-2xs">
                        2. QuantumQuest
                      </div>
                      <div className="bg-white border border-neutral-200 p-2 rounded-lg text-center font-medium text-neutral-800 shadow-2xs">
                        3. Final Pitch
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2 mb-4">
                    <p className="text-xs font-mono uppercase font-semibold text-neutral-500">
                      3 Awards Won at A2 CON 25:
                    </p>
                    <div className="space-y-1.5 text-xs text-neutral-800">
                      <div className="flex items-center gap-2 bg-white border border-neutral-200 px-3 py-1.5 rounded-lg shadow-2xs">
                        <CheckCircle className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        <span>Best Project for Childhood Cancer ('Christmas Smiles')</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white border border-neutral-200 px-3 py-1.5 rounded-lg shadow-2xs">
                        <CheckCircle className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        <span>Best Project for Youth</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white border border-neutral-200 px-3 py-1.5 rounded-lg shadow-2xs">
                        <CheckCircle className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        <span>Best Project with Non-Leo Collaboration</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono bg-neutral-200 text-neutral-800 px-2.5 py-0.5 rounded-md font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
