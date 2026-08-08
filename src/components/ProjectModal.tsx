import React, { useState } from 'react';
import { X, ExternalLink, Github, Check, Play, RefreshCw, BarChart2, ShieldCheck, Cpu, ArrowUpRight, Sparkles } from 'lucide-react';
import { Project } from '../types';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, BarChart, Bar, CartesianGrid } from 'recharts';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  // State for interactive CareAI SHAP simulator
  const [patientAge, setPatientAge] = useState<number>(28);
  const [epdsScore, setEpdsScore] = useState<number>(14);
  const [sleepHours, setSleepHours] = useState<number>(5);

  // State for PySpark Big Data simulator
  const [processingStage, setProcessingStage] = useState<'idle' | 'bronze' | 'silver' | 'gold'>('idle');

  // State for MLOps simulator
  const [dagStatus, setDagStatus] = useState<string>('Ready');

  // CareAI PPD Risk Calculation
  const calculatedRisk = Math.min(98, Math.max(5, Math.round((epdsScore * 4) + (35 - patientAge) * 0.8 + (8 - sleepHours) * 6)));

  // Sample Recharts dataset for Global Superstore
  const salesForecastData = [
    { month: 'Jan', actualSales: 42000, forecastSales: 41500, profitMargin: 18 },
    { month: 'Feb', actualSales: 48000, forecastSales: 47000, profitMargin: 21 },
    { month: 'Mar', actualSales: 55000, forecastSales: 54000, profitMargin: 24 },
    { month: 'Apr', actualSales: 52000, forecastSales: 53500, profitMargin: 22 },
    { month: 'May', actualSales: 61000, forecastSales: 60000, profitMargin: 26 },
    { month: 'Jun', actualSales: 68000, forecastSales: 67500, profitMargin: 29 },
    { month: 'Jul (Est)', actualSales: null, forecastSales: 74000, profitMargin: 31 },
    { month: 'Aug (Est)', actualSales: null, forecastSales: 79000, profitMargin: 33 },
  ];

  const triggerPipeline = () => {
    setProcessingStage('bronze');
    setTimeout(() => setProcessingStage('silver'), 800);
    setTimeout(() => setProcessingStage('gold'), 1600);
  };

  const triggerAirflowDag = () => {
    setDagStatus('Running DAG...');
    setTimeout(() => setDagStatus('Validating DVC Artifacts...'), 1000);
    setTimeout(() => setDagStatus('Logging Metrics in MLflow...'), 2000);
    setTimeout(() => setDagStatus('Model Registered Successfully v2.4'), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="p-6 border-b border-neutral-200/80 flex items-center justify-between bg-neutral-50 sticky top-0 z-20">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-amber-700 bg-amber-100 border border-amber-200 px-2.5 py-1 rounded-md font-semibold">
              {project.category}
            </span>
            <h2 className="text-2xl font-bold font-display text-neutral-900 mt-1">
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-neutral-200 text-neutral-600 hover:text-black transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
          
          {/* Main Image Banner */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-200">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Role & Tech Stack Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-neutral-50 p-4 rounded-xl border border-neutral-200">
            <div>
              <span className="text-xs font-mono text-neutral-500 uppercase block">Role</span>
              <span className="text-sm font-semibold text-neutral-900">{project.role}</span>
            </div>

            <div className="sm:col-span-2">
              <span className="text-xs font-mono text-neutral-500 uppercase block">Tech Stack</span>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {project.techStack.map(tech => (
                  <span key={tech} className="bg-white border border-neutral-300 text-neutral-800 text-xs font-mono px-2 py-0.5 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold font-display text-neutral-900">
              Project Overview
            </h3>
            <p className="text-neutral-700 text-sm leading-relaxed">
              {project.fullDesc}
            </p>
          </div>

          {/* Highlights */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold font-display text-neutral-900">
              Technical Achievements & Deliverables
            </h3>
            <div className="grid grid-cols-1 gap-2.5">
              {project.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-neutral-50 rounded-xl border border-neutral-200/80">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-neutral-800">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Feature Simulator */}
          <div className="bg-neutral-900 text-white p-6 rounded-2xl border border-neutral-800 space-y-5">
            
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
              <div className="flex items-center gap-2 text-amber-400 font-mono text-xs uppercase tracking-wider font-bold">
                <Sparkles className="w-4 h-4" />
                <span>Interactive Live System Demo</span>
              </div>
              <span className="text-[11px] font-mono text-neutral-400">Simulation Mode</span>
            </div>

            {/* CareAI SHAP Simulator */}
            {project.demoType === 'careai' && (
              <div className="space-y-4">
                <p className="text-xs text-neutral-300">
                  Adjust patient screening parameters to observe real-time SHAP feature attribution risk scoring:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-neutral-800 p-3 rounded-xl">
                    <label className="text-xs text-neutral-400 font-mono block">Patient Age: {patientAge}</label>
                    <input
                      type="range"
                      min="18"
                      max="45"
                      value={patientAge}
                      onChange={(e) => setPatientAge(Number(e.target.value))}
                      className="w-full mt-2 accent-amber-400 cursor-pointer"
                    />
                  </div>

                  <div className="bg-neutral-800 p-3 rounded-xl">
                    <label className="text-xs text-neutral-400 font-mono block">EPDS Score: {epdsScore}/30</label>
                    <input
                      type="range"
                      min="0"
                      max="30"
                      value={epdsScore}
                      onChange={(e) => setEpdsScore(Number(e.target.value))}
                      className="w-full mt-2 accent-amber-400 cursor-pointer"
                    />
                  </div>

                  <div className="bg-neutral-800 p-3 rounded-xl">
                    <label className="text-xs text-neutral-400 font-mono block">Sleep Hours/Day: {sleepHours}h</label>
                    <input
                      type="range"
                      min="2"
                      max="10"
                      value={sleepHours}
                      onChange={(e) => setSleepHours(Number(e.target.value))}
                      className="w-full mt-2 accent-amber-400 cursor-pointer"
                    />
                  </div>
                </div>

                <div className="p-4 bg-neutral-950 rounded-xl border border-neutral-800 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-mono text-neutral-400">Predicted PPD Risk Probability</span>
                    <div className="text-2xl font-extrabold font-mono text-emerald-400 mt-1">
                      {calculatedRisk}% {calculatedRisk > 50 ? '(High Risk — Dialogflow Alert Active)' : '(Low Risk)'}
                    </div>
                  </div>

                  <div className="text-right text-xs font-mono text-neutral-400">
                    <div>SHAP Top Factor: {epdsScore > 12 ? '+EPDS Depression Inventory' : '+Sleep Deprivation'}</div>
                    <div className="text-amber-400">PostgreSQL Schema Encrypted</div>
                  </div>
                </div>
              </div>
            )}

            {/* PySpark Big Data Pipeline Simulator */}
            {project.demoType === 'pyspark' && (
              <div className="space-y-4">
                <p className="text-xs text-neutral-300">
                  Simulate Medallion Lakehouse PySpark transformation execution:
                </p>

                <div className="grid grid-cols-3 gap-3 text-center font-mono text-xs">
                  <div className={`p-3 rounded-xl border ${processingStage === 'bronze' || processingStage === 'silver' || processingStage === 'gold' ? 'bg-amber-950/60 border-amber-500 text-amber-300' : 'bg-neutral-800 border-neutral-700 text-neutral-500'}`}>
                    BRONZE
                    <div className="text-[10px] opacity-80 mt-1">Raw JSON Log Ingestion</div>
                  </div>

                  <div className={`p-3 rounded-xl border ${processingStage === 'silver' || processingStage === 'gold' ? 'bg-amber-950/60 border-amber-500 text-amber-300' : 'bg-neutral-800 border-neutral-700 text-neutral-500'}`}>
                    SILVER
                    <div className="text-[10px] opacity-80 mt-1">Schema Cleansed Parquet</div>
                  </div>

                  <div className={`p-3 rounded-xl border ${processingStage === 'gold' ? 'bg-emerald-950/60 border-emerald-500 text-emerald-300' : 'bg-neutral-800 border-neutral-700 text-neutral-500'}`}>
                    GOLD
                    <div className="text-[10px] opacity-80 mt-1">MongoDB Atlas Queryable</div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <button
                    onClick={triggerPipeline}
                    className="bg-amber-400 hover:bg-amber-300 text-black font-semibold text-xs px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer transition-colors"
                  >
                    <Play className="w-3.5 h-3.5" />
                    <span>Run PySpark Data Ingestion Job</span>
                  </button>

                  <span className="text-xs font-mono text-neutral-400">
                    Status: {processingStage === 'idle' ? 'Ready' : processingStage === 'gold' ? 'Pipeline Succeeded (0.42s)' : 'Processing...'}
                  </span>
                </div>
              </div>
            )}

            {/* Global Superstore Recharts Forecasting Chart */}
            {project.demoType === 'superstore' && (
              <div className="space-y-3">
                <p className="text-xs text-neutral-300">
                  Multi-region sales volume vs. regression forecast model (Power BI & Python Statsmodels):
                </p>

                <div className="h-48 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={salesForecastData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                      <XAxis dataKey="month" stroke="#888" fontSize={11} />
                      <YAxis stroke="#888" fontSize={11} />
                      <Tooltip contentStyle={{ backgroundColor: '#111', borderColor: '#444', fontSize: '12px' }} />
                      <Area type="monotone" dataKey="actualSales" stroke="#38bdf8" fill="#0284c7" fillOpacity={0.3} name="Actual Sales ($)" />
                      <Area type="monotone" dataKey="forecastSales" stroke="#f59e0b" fill="#d97706" fillOpacity={0.2} name="Forecast ($)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}

            {/* Customer Churn MLOps DAG Runner */}
            {project.demoType === 'churn' && (
              <div className="space-y-4">
                <p className="text-xs text-neutral-300">
                  Apache Airflow DAG runner & MLflow experiment logging:
                </p>

                <div className="bg-neutral-950 p-3 rounded-xl border border-neutral-800 font-mono text-xs text-emerald-400 flex items-center justify-between">
                  <span>Airflow DAG Status:</span>
                  <span className="text-amber-300">{dagStatus}</span>
                </div>

                <div className="flex items-center justify-between">
                  <button
                    onClick={triggerAirflowDag}
                    className="bg-white hover:bg-neutral-200 text-black font-semibold text-xs px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer transition-colors"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Trigger Churn Model Retraining</span>
                  </button>

                  <div className="text-[11px] font-mono text-neutral-400">
                    Artifacts: DVC / DAGsHub | Docker Container
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-neutral-200 bg-neutral-50 flex items-center justify-between">
          <a
            href={project.githubUrl || "https://github.com/SandaniSenevirathna"}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-900 hover:text-black bg-white border border-neutral-300 px-4 py-2 rounded-full transition-all"
          >
            <Github className="w-4 h-4" />
            <span>View GitHub Repository</span>
          </a>

          <button
            onClick={onClose}
            className="bg-black hover:bg-neutral-800 text-white font-semibold text-xs px-5 py-2.5 rounded-full cursor-pointer transition-colors"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
};
