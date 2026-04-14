import { Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-blue-500 rounded-lg flex items-center justify-center">
            <Zap size={14} className="text-white" />
          </div>
          <span className="text-slate-400 text-sm">Power Platform Portfolio</span>
        </div>
        <p className="text-slate-600 text-sm text-center">
          Built with React, Tailwind CSS &amp; Microsoft Power Platform expertise
        </p>
        <p className="text-slate-600 text-sm">&copy; {new Date().getFullYear()} All rights reserved</p>
      </div>
    </footer>
  );
}
