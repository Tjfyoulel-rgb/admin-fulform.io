import { ArrowDown, ExternalLink, Github } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />

        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(148 163 184) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-8">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-blue-300 text-sm font-medium">Available for new opportunities</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
          Power Platform
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Solutions Architect
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Designing intelligent, scalable business applications with Microsoft Power Platform —
          from automated workflows to enterprise-grade data integrations.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-blue-500/25 hover:shadow-blue-400/30 hover:-translate-y-0.5"
          >
            View My Work
            <ExternalLink size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
          >
            <Github size={16} />
            Get In Touch
          </a>
        </div>

        <div className="mt-20 flex items-center justify-center gap-12 flex-wrap">
          {['Power Apps', 'Power Automate', 'Power BI', 'Dataverse', 'Azure'].map((tech) => (
            <div key={tech} className="text-slate-500 text-sm font-medium hover:text-slate-400 transition-colors">
              {tech}
            </div>
          ))}
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 hover:text-slate-300 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
}
