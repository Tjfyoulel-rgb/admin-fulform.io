import { Truck, AlertTriangle, CalendarCheck, BarChart2, ArrowRight, Cloud, Smartphone, Database, Cog } from 'lucide-react';

const architectureLayers = [
  {
    layer: 'Presentation Layer',
    color: 'from-blue-500/20 to-blue-600/10',
    border: 'border-blue-500/30',
    badge: 'bg-blue-500/20 text-blue-300',
    components: [
      { icon: Smartphone, label: 'Driver App', desc: 'Canvas Power App for job dispatch, vehicle checks, and incident reporting' },
      { icon: BarChart2, label: 'Manager Dashboard', desc: 'Power BI workspace with live fleet KPIs, utilisation, and cost tracking' },
    ],
  },
  {
    layer: 'Logic & Automation Layer',
    color: 'from-cyan-500/20 to-cyan-600/10',
    border: 'border-cyan-500/30',
    badge: 'bg-cyan-500/20 text-cyan-300',
    components: [
      { icon: Cog, label: 'Power Automate Flows', desc: 'Maintenance scheduling, fault escalation, and compliance reminder workflows' },
      { icon: CalendarCheck, label: 'Scheduling Engine', desc: 'Automated job allocation based on driver availability and vehicle status' },
    ],
  },
  {
    layer: 'Data Layer',
    color: 'from-slate-600/30 to-slate-700/10',
    border: 'border-slate-600/30',
    badge: 'bg-slate-600/40 text-slate-300',
    components: [
      { icon: Database, label: 'Dataverse', desc: 'Unified fleet data model — vehicles, drivers, jobs, maintenance logs, compliance records' },
      { icon: Cloud, label: 'Azure SQL', desc: 'Historical telemetry and reporting data lake for long-term analytics' },
    ],
  },
  {
    layer: 'Integration Layer',
    color: 'from-slate-700/30 to-slate-800/10',
    border: 'border-slate-700/30',
    badge: 'bg-slate-700/50 text-slate-400',
    components: [
      { icon: Truck, label: 'Telematics API', desc: 'Real-time GPS and vehicle diagnostics ingested via custom connector' },
      { icon: AlertTriangle, label: 'DVSA Compliance', desc: 'Automated MOT and licence checks via government API integration' },
    ],
  },
];

const highlights = [
  { label: 'Vehicles Tracked', value: '200+' },
  { label: 'Manual Processes Automated', value: '14' },
  { label: 'Compliance Rate', value: '99.8%' },
  { label: 'Cost Reduction', value: '28%' },
];

export default function FleetManagement() {
  return (
    <div className="bg-slate-800 rounded-3xl overflow-hidden border border-slate-700">
      <div className="bg-gradient-to-br from-slate-700 to-slate-800 p-8 md:p-12 border-b border-slate-700">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full">
            Fleet Ops
          </span>
          <span className="bg-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full">
            Architecture
          </span>
        </div>
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          Fleet Management Platform
        </h3>
        <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
          A layered architecture for managing a large vehicle fleet — combining real-time telematics,
          compliance automation, and operational dashboards on Microsoft Power Platform and Azure.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
          {highlights.map(({ label, value }) => (
            <div key={label} className="bg-slate-900/60 rounded-xl p-4 text-center border border-slate-700/50">
              <div className="text-2xl font-bold text-cyan-400 mb-1">{value}</div>
              <div className="text-slate-400 text-xs">{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-8 md:p-12">
        <h4 className="text-white font-semibold text-lg mb-8">Solution Architecture</h4>

        <div className="space-y-4">
          {architectureLayers.map(({ layer, color, border, badge, components }) => (
            <div
              key={layer}
              className={`bg-gradient-to-r ${color} border ${border} rounded-2xl p-6`}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${badge}`}>
                  {layer}
                </span>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {components.map(({ icon: Icon, label, desc }) => (
                  <div key={label} className="flex items-start gap-3 bg-slate-900/50 rounded-xl p-4">
                    <div className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-slate-300" />
                    </div>
                    <div>
                      <div className="text-white text-sm font-semibold mb-1">{label}</div>
                      <div className="text-slate-400 text-xs leading-relaxed">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-slate-900 rounded-2xl p-6 border border-slate-700">
          <h5 className="text-white font-semibold mb-4 flex items-center gap-2">
            <ArrowRight size={16} className="text-cyan-400" />
            Architecture Decisions
          </h5>
          <div className="grid sm:grid-cols-3 gap-4 text-sm">
            {[
              { title: 'Why Dataverse?', body: 'Native Power Platform integration, offline-capable mobile sync, and granular security roles for drivers vs. managers.' },
              { title: 'Why Azure SQL?', body: 'Telematics data volume exceeds Dataverse storage limits — Azure SQL handles high-frequency writes with long-term retention.' },
              { title: 'Why Canvas App?', body: 'Offline mode support was critical for drivers in remote areas with poor connectivity.' },
            ].map(({ title, body }) => (
              <div key={title} className="border-l-2 border-cyan-500/40 pl-4">
                <div className="text-cyan-300 font-semibold mb-1 text-xs uppercase tracking-wide">{title}</div>
                <div className="text-slate-400 leading-relaxed">{body}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
