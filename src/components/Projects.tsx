import HealthcareProject from './HealthcareProject';
import FleetManagement from './FleetManagement';

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">Featured Work</span>
          <h2 className="text-4xl font-bold text-white mt-3 mb-4">Projects & Architecture</h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            A selection of solutions designed and delivered on Microsoft Power Platform — from concept through to production.
          </p>
        </div>

        <div className="space-y-8">
          <HealthcareProject />
          <FleetManagement />
        </div>
      </div>
    </section>
  );
}
