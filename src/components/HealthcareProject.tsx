import { CheckCircle, ArrowRight, Database, Workflow, BarChart2, Shield } from 'lucide-react';

const outcomes = [
  'Reduced patient intake time by 60% through digital form submission',
  'Eliminated paper-based processes across 3 clinic locations',
  'Automated triage routing to the correct department via Power Automate',
  'Real-time capacity dashboards for admissions staff in Power BI',
  'GDPR-compliant data handling via Dataverse role-based access',
];

const techStack = [
  { icon: Database, label: 'Dataverse', desc: 'Central patient data model with relational tables' },
  { icon: Workflow, label: 'Power Automate', desc: 'Approval flows, triage routing, email notifications' },
  { icon: BarChart2, label: 'Power BI', desc: 'Live intake volume and capacity reporting' },
  { icon: Shield, label: 'Azure AD', desc: 'Role-based access control for clinical staff' },
];

const phases = [
  { step: '01', title: 'Discovery', desc: 'Mapped existing paper intake process through stakeholder workshops and process observation.' },
  { step: '02', title: 'Data Modelling', desc: 'Designed Dataverse schema covering patients, appointments, staff, and departments.' },
  { step: '03', title: 'App Build', desc: 'Canvas app for patient self-service and model-driven app for clinical staff management.' },
  { step: '04', title: 'Automation', desc: 'Multi-stage Power Automate flows for triage, escalation, and cross-system notifications.' },
  { step: '05', title: 'Reporting', desc: 'Power BI embedded dashboards for real-time and historical intake analytics.' },
  { step: '06', title: 'Rollout', desc: 'Phased go-live across 3 sites with training, change management, and hypercare support.' },
];

export default function HealthcareProject() {
  return (
    <div className="bg-slate-800 rounded-3xl overflow-hidden border border-slate-700">
      <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-8 md:p-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-white/20 text-white text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full">
            Healthcare
          </span>
          <span className="bg-white/20 text-white text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full">
            Power Platform
          </span>
        </div>
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          Healthcare Smart Intake
        </h3>
        <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
          An end-to-end digital patient intake system replacing paper-based workflows across a multi-site
          healthcare provider — built entirely on Microsoft Power Platform.
        </p>
      </div>

      <div className="p-8 md:p-12">
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h4 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
              <CheckCircle size={20} className="text-green-400" />
              Key Outcomes
            </h4>
            <ul className="space-y-3">
              {outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-3">
                  <ArrowRight size={16} className="text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 text-sm leading-relaxed">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Technology Stack</h4>
            <div className="grid grid-cols-2 gap-4">
              {techStack.map(({ icon: Icon, label, desc }) => (
                <div key={label} className="bg-slate-900 rounded-xl p-4 border border-slate-700">
                  <div className="w-8 h-8 bg-blue-500/15 rounded-lg flex items-center justify-center mb-2">
                    <Icon size={16} className="text-blue-400" />
                  </div>
                  <div className="text-white text-sm font-semibold mb-1">{label}</div>
                  <div className="text-slate-500 text-xs leading-relaxed">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold text-lg mb-8">Delivery Phases</h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {phases.map(({ step, title, desc }) => (
              <div key={step} className="relative bg-slate-900 rounded-xl p-5 border border-slate-700 hover:border-blue-500/40 transition-colors group">
                <div className="text-5xl font-black text-slate-800 group-hover:text-slate-700 transition-colors absolute top-4 right-4 leading-none select-none">
                  {step}
                </div>
                <div className="relative">
                  <div className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-1">{step}</div>
                  <div className="text-white font-semibold mb-2">{title}</div>
                  <div className="text-slate-400 text-sm leading-relaxed">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
