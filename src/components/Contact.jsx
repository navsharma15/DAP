import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Linkedin, Github, CheckCircle, AlertCircle } from 'lucide-react';

const SOCIAL_LINKS = [
  {
    icon: Github,
    href: 'https://github.com/navsharma15',
    label: 'GitHub',
    defaultColor: 'text-white/50',
    hoverClass: 'hover:text-white hover:bg-[#333]/60 hover:border-white/30',
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/nav-sharma/',
    label: 'LinkedIn',
    defaultColor: 'text-white/50',
    hoverClass: 'hover:text-[#0A66C2] hover:bg-[#0A66C2]/20 hover:border-[#0A66C2]/50',
  },
  {
    icon: Mail,
    href: 'mailto:navsharma989@gmail.com',
    label: 'Email',
    defaultColor: 'text-white/50',
    hoverClass: 'hover:text-[#EA4335] hover:bg-[#EA4335]/20 hover:border-[#EA4335]/50',
  },
];

const Contact = () => {
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formsubmit.co/ajax/navsharma989@gmail.com', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputClass =
    'w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-white/10 focus:border-indigo-400 focus:outline-none focus:ring-1 focus:ring-indigo-400/30 transition-all text-white placeholder-white/25';

  return (
    <section id="contact" className="py-24 px-4 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-white/50 font-semibold mb-2 tracking-widest uppercase text-sm">Get in touch</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Let's work together</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Info Panel */}
          <div className="w-full lg:w-1/3 space-y-8">
            <p className="text-slate-400 leading-relaxed">
              Have a project in mind or just want to chat about data? Drop me a message and I'll get back to you as soon as possible.
            </p>

            {/* Contact Details */}
            <div className="space-y-5">
              <a
                href="mailto:navsharma989@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 group-hover:text-[#EA4335] group-hover:border-[#EA4335]/40 group-hover:bg-[#EA4335]/10 transition-all duration-200">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest mb-0.5">Email</p>
                  <p className="font-semibold text-white text-sm group-hover:text-[#EA4335] transition-colors">
                    navsharma989@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/nav-sharma/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 group-hover:text-[#0A66C2] group-hover:border-[#0A66C2]/40 group-hover:bg-[#0A66C2]/10 transition-all duration-200">
                  <Linkedin size={20} />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest mb-0.5">LinkedIn</p>
                  <p className="font-semibold text-white text-sm group-hover:text-[#0A66C2] transition-colors">
                    /in/nav-sharma
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/navsharma15"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 group-hover:text-white group-hover:border-white/30 group-hover:bg-white/10 transition-all duration-200">
                  <Github size={20} />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest mb-0.5">GitHub</p>
                  <p className="font-semibold text-white text-sm group-hover:text-white/80 transition-colors">
                    /navsharma15
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest mb-0.5">Location</p>
                  <p className="font-semibold text-white text-sm">India</p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label, defaultColor, hoverClass }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-11 h-11 rounded-full flex items-center justify-center bg-white/5 border border-white/10 ${defaultColor} ${hoverClass} transition-all duration-200`}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right Form Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-2/3 glass p-8 md:p-12 rounded-3xl border border-white/5 shadow-xl"
          >
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center gap-4">
                <CheckCircle size={56} className="text-emerald-400" />
                <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                <p className="text-slate-400 max-w-sm">
                  Thanks for reaching out. I'll get back to you at <span className="text-white">navsharma989@gmail.com</span> as soon as possible.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-4 px-6 py-2.5 rounded-xl border border-white/15 text-white/70 hover:text-white hover:border-white/30 transition-all text-sm"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Hidden FormSubmit fields */}
                <input type="hidden" name="_subject" value="New Portfolio Contact Message" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="text" name="_honey" style={{ display: 'none' }} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/70">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={inputClass}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/70">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/70">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className={inputClass}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/70">Message</label>
                  <textarea
                    name="message"
                    rows="5"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3">
                    <AlertCircle size={16} />
                    Something went wrong. Please try again or email directly.
                  </div>
                )}

                <motion.button
                  type="submit"
                  disabled={status === 'sending'}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-600/50 text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20 transition-all duration-200"
                >
                  {status === 'sending' ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send size={18} />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
