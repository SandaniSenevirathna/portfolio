import React, { useState } from 'react';
import { ArrowUpRight, Check, Sparkles, ChevronDown, Cpu, Database, Brain, BarChart3 } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';
import { Service } from '../types';

export const Services: React.FC<ServiceProps> = () => {
  const [expandedId, setExpandedId] = useState<string>('mlops');

  const getIcon = (id: string) => {
    switch(id) {
      case 'mlops': return <Cpu className="w-6 h-6" />;
      case 'bigdata': return <Database className="w-6 h-6" />;
      case 'explainable-ai': return <Brain className="w-6 h-6" />;
      case 'bi-analytics': return <BarChart3 className="w-6 h-6" />;
      default: return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-cloud-pattern relative border-b border-black/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header matching Image 3 */}
        <div className="mb-14">
          <span className="text-sm font-mono tracking-widest uppercase text-neutral-500 font-semibold">
            /SERVICE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-neutral-900 tracking-tight mt-2">
            Core Technical Capabilities
          </h2>
          <p className="text-neutral-600 max-w-xl text-sm sm:text-base mt-2">
            Specialized engineering and analytical services designed to solve complex real-world data problems.
          </p>
        </div>

        {/* Accordion / Expanded Service Cards Stack matching Image 3 */}
        <div className="space-y-4">
          {SERVICES.map((service) => {
            const isExpanded = expandedId === service.id;

            return (
              <div
                key={service.id}
                className={`transition-all duration-300 rounded-2xl overflow-hidden border ${
                  isExpanded
                    ? 'bg-[#18181b] text-white border-neutral-800 shadow-2xl'
                    : 'bg-white/80 hover:bg-white text-neutral-900 border-neutral-200/80 shadow-xs'
                }`}
              >
                {/* Accordion Header Bar */}
                <button
                  onClick={() => setExpandedId(isExpanded ? '' : service.id)}
                  className="w-full px-6 py-6 sm:px-8 sm:py-7 flex items-center justify-between text-left cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-4 sm:gap-8">
                    <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-md ${
                      isExpanded ? 'bg-neutral-800 text-neutral-300' : 'bg-neutral-100 text-neutral-600'
                    }`}>
                      {service.number}
                    </span>

                    <h3 className={`text-xl sm:text-2xl md:text-3xl font-black font-display tracking-tight uppercase ${
                      isExpanded ? 'text-white' : 'text-neutral-900'
                    }`}>
                      {service.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-full transition-transform duration-300 ${
                      isExpanded ? 'bg-neutral-800 text-white rotate-180' : 'bg-neutral-100 text-neutral-700'
                    }`}>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </div>
                </button>

                {/* Expanded Content Box */}
                {isExpanded && (
                  <div className="px-6 pb-8 sm:px-8 sm:pb-8 pt-2 border-t border-neutral-800/80 animate-fadeIn">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                      
                      {/* Left: Description & Capability Highlights */}
                      <div className="lg:col-span-7 space-y-5">
                        <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                          {service.fullDesc}
                        </p>

                        <div className="space-y-2.5 pt-2">
                          <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold block">
                            Key Deliverables:
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {service.capabilities.map((cap) => (
                              <div
                                key={cap}
                                className="flex items-center gap-2 bg-neutral-900/80 border border-neutral-800 px-3.5 py-2 rounded-lg text-xs text-neutral-200"
                              >
                                <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                                <span>{cap}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right: Tools & Tech Badges */}
                      <div className="lg:col-span-5 bg-neutral-900 border border-neutral-800 p-5 rounded-xl space-y-4">
                        <div className="flex items-center gap-2 text-amber-400 text-xs font-mono uppercase tracking-wider font-semibold">
                          {getIcon(service.id)}
                          <span>Technology Stack</span>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {service.tools.map((tool) => (
                            <span
                              key={tool}
                              className="bg-neutral-800 border border-neutral-700/80 text-white text-xs font-mono px-3 py-1.5 rounded-md"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>

                        <div className="pt-2 text-xs text-neutral-400 leading-normal">
                          Configured to production-ready specifications with strict version control and test coverage.
                        </div>
                      </div>

                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

interface ServiceProps {}
