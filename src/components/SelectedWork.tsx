import React, { useState } from 'react';
import { ArrowUpRight, Github, Sparkles, Filter, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

interface SelectedWorkProps {
  onSelectProject: (project: Project) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onSelectProject }) => {
  const [activeTab, setActiveTab] = useState<string>('All');

  const tabs = ['All', 'MLOps & Pipeline', 'Explainable AI', 'BI & Analytics'];

  const filteredProjects = activeTab === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeTab);

  return (
    <section id="work" className="py-24 bg-white relative overflow-hidden border-b border-black/5">
      
      {/* Ghost Background Headline matching Image 2 */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 pointer-events-none opacity-[0.04] select-none whitespace-nowrap z-0">
        <span className="text-[140px] sm:text-[200px] lg:text-[260px] font-black font-display tracking-widest text-neutral-900 uppercase">
          PORTFOLIO
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <span className="text-sm font-mono tracking-widest uppercase text-neutral-500 font-semibold">
            /SELECTED WORK
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-neutral-900 tracking-tight mt-2">
            Engineered Machine Learning & Big Data Systems
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto mt-3 text-sm sm:text-base">
            From MLOps retraining loops and PySpark data lakehouses to explainable mHealth AI and executive BI dashboards.
          </p>
        </div>

        {/* Filter Navigation Bar matching Image 2 */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-12 border-b border-neutral-100 pb-6">
          <div className="flex items-center gap-2 overflow-x-auto py-1 scrollbar-none">
            <Filter className="w-4 h-4 text-neutral-400 mr-2 flex-shrink-0 hidden sm:block" />
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-xs sm:text-sm font-medium px-4 py-2 rounded-full transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === tab
                    ? 'bg-neutral-900 text-white shadow-md'
                    : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <a
            href="https://github.com/SandaniSenevirathna"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-neutral-800 hover:text-black bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 px-4 py-2 rounded-full transition-all"
          >
            <span>View All Work on GitHub</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Projects Grid (2x2 Layout matching Image 2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group bg-neutral-50 rounded-2xl p-4 sm:p-5 border border-neutral-200/80 hover:border-neutral-400 transition-all duration-300 hover:shadow-xl cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Project Image Container with Circular Interactive Arrow Button */}
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-neutral-900 mb-5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />
                  
                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold text-neutral-800 uppercase tracking-wider shadow-xs">
                    {project.category}
                  </div>

                  {/* Circular Hover Arrow Button matching Image 2 */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full flex items-center justify-center text-black opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 shadow-2xl">
                    <ArrowUpRight className="w-6 h-6 stroke-[2.5]" />
                  </div>
                </div>

                {/* Title and Description */}
                <div className="space-y-2 px-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-neutral-900 group-hover:text-black transition-colors leading-snug">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-xs sm:text-sm text-neutral-600 line-clamp-2 leading-relaxed">
                    {project.subtitle}
                  </p>
                </div>
              </div>

              {/* Bottom Tags and Role Badge */}
              <div className="mt-6 pt-4 border-t border-neutral-200/60 flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap items-center gap-1.5">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="bg-white border border-neutral-200/80 text-neutral-700 text-[11px] font-mono px-2.5 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="text-[11px] font-mono text-neutral-400 pl-1">
                      +{project.techStack.length - 3} more
                    </span>
                  )}
                </div>

                <span className="text-xs font-semibold text-neutral-900 flex items-center gap-1 group-hover:underline">
                  <span>Explore Demo</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
