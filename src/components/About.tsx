import { Award, Briefcase, GraduationCap, Zap } from 'lucide-react';

const stats = [
  { icon: Briefcase, value: '8+', label: 'Years Financial Operations' },
  { icon: GraduationCap, value: 'Summer 2026', label: 'BSBA Graduation' },
  { icon: Award, value: 'PL-900', label: 'Microsoft Certified' },
  { icon: Zap, value: '3+', label: 'AI & Automation Projects' },
];

const skills = [
  { category: 'Power Platform', items: ['Power Apps Canvas & Flows', 'Power Automate', 'Power BI Dashboards', 'AI Builder Basics'] },
  { category: 'Business Process', items: ['Process Automation', 'Workflow Design', 'Data Modelling', 'Financial Systems Knowledge'] },
  { category: 'Cloud & Integration', items: ['Microsoft 365', 'Dataverse', 'SharePoint Integration', 'REST API Basics'] },
  { category: 'Professional', items: ['Problem Solving', 'Cross-functional Collaboration', 'Process Documentation', 'Rapid Prototyping'] },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">About Me</span>
            <h2 className="text-4xl font-bold text-white mt-3 mb-6 leading-tight">
              From Finance to AI-Powered Automation
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                With 8+ years in Financial Operations at JPMorgan Chase and beyond, I've developed a deep understanding of how business processes work at scale. Now, I'm channeling that expertise into building intelligent automation solutions on the Microsoft Power Platform.
              </p>
              <p>
                As a BSBA student graduating Summer 2026 and Microsoft Certified Power Platform Fundamentals professional, I focus on entry-level AI and automation that delivers measurable value — whether streamlining data processing, automating approvals, or building smart intake systems.
              </p>
              <p>
                My sweet spot is translating complex operational challenges into clean, user-friendly solutions that stakeholders actually want to use. I bring a financial operations mindset to every project: efficiency, accuracy, and accountability matter.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="bg-slate-900 border border-slate-700 rounded-2xl p-6 flex flex-col items-center text-center hover:border-blue-500/40 transition-colors group"
              >
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-3 group-hover:bg-blue-500/20 transition-colors">
                  <Icon size={22} className="text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">{value}</div>
                <div className="text-slate-400 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div id="skills">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">Core Skills</span>
          <h3 className="text-3xl font-bold text-white mt-3 mb-10">Technical Expertise</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map(({ category, items }) => (
              <div
                key={category}
                className="bg-slate-900 border border-slate-700 rounded-2xl p-6 hover:border-blue-500/40 transition-colors"
              >
                <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">{category}</h4>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-slate-400 text-sm">
                      <span className="mt-1.5 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
