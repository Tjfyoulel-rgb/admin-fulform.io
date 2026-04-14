import { Mail, Linkedin, Github, MapPin, MessageSquare } from 'lucide-react';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@yourportfolio.com',
    href: 'mailto:hello@yourportfolio.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/yourprofile',
    href: 'https://linkedin.com',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/yourhandle',
    href: 'https://github.com',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'United Kingdom',
    href: null,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-900">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">Get In Touch</span>
          <h2 className="text-4xl font-bold text-white mt-3 mb-4">Let's build something together</h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            Whether you have a project in mind, need a Power Platform consultation, or just want to connect — my inbox is always open.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {contactLinks.map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="group bg-slate-800 border border-slate-700 hover:border-blue-500/40 rounded-2xl p-5 flex items-center gap-4 transition-all duration-200"
              >
                <div className="w-11 h-11 bg-blue-500/10 group-hover:bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                  <Icon size={20} className="text-blue-400" />
                </div>
                <div>
                  <div className="text-slate-500 text-xs uppercase tracking-wide mb-0.5">{label}</div>
                  {href ? (
                    <a href={href} className="text-white text-sm font-medium hover:text-blue-400 transition-colors">
                      {value}
                    </a>
                  ) : (
                    <span className="text-white text-sm font-medium">{value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8">
            <div className="flex items-center gap-2 mb-6">
              <MessageSquare size={18} className="text-blue-400" />
              <h3 className="text-white font-semibold">Send a Message</h3>
            </div>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-slate-400 text-xs uppercase tracking-wide mb-1.5">Your Name</label>
                <input
                  type="text"
                  placeholder="John Smith"
                  className="w-full bg-slate-900 border border-slate-700 focus:border-blue-500 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-slate-400 text-xs uppercase tracking-wide mb-1.5">Email Address</label>
                <input
                  type="email"
                  placeholder="john@company.com"
                  className="w-full bg-slate-900 border border-slate-700 focus:border-blue-500 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-slate-400 text-xs uppercase tracking-wide mb-1.5">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-slate-900 border border-slate-700 focus:border-blue-500 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 outline-none transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-400 text-white font-semibold py-3 rounded-xl transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
