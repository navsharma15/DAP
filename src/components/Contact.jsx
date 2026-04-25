import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Linkedin, Github, CheckCircle, AlertCircle } from 'lucide-react';

const SOCIAL_LINKS = [
  {
    icon: Github,
    href: 'https://github.com/navsharma15',
    label: 'GitHub',
    defaultColor: 'text-black',
    hoverClass: 'hover:text-black hover:bg-[#C8BA95]/20 hover:border-[#C8BA95]/40',
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/nav-sharma/',
    label: 'LinkedIn',
    defaultColor: 'text-black',
    hoverClass: 'hover:text-black hover:bg-[#0A66C2]/20 hover:border-[#0A66C2]/40',
  },
  {
    icon: Mail,
    href: 'mailto:navsharma989@gmail.com',
    label: 'Email',
    defaultColor: 'text-black',
    hoverClass: 'hover:text-black hover:bg-[#EA4335]/20 hover:border-[#EA4335]/40',
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
    'w-full px-4 py-3 rounded-xl bg-[#4f633c] border border-[#C8BA95]/20 focus:border-[#94a679] focus:outline-none focus:ring-1 focus:ring-[#94a679]/30 transition-all text-black placeholder-[#C8BA95]/50 shadow-sm';

  return (
    <section id="contact" className="py-24 px-4 text-black relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-black font-semibold mb-2 tracking-widest uppercase text-xs">Get in touch</h3>
          <h2 className="text-2xl md:text-3xl font-bold text-black">Let's work together</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Info Panel */}
          <div className="w-full lg:w-1/3 space-y-8">
            <p className="text-black leading-relaxed">
              Have a project in mind or just want to chat about data? Drop me a message and I'll get back to you as soon as possible.
            </p>

            {/* Contact Details */}
            <div className="space-y-5">
              <a
                href="mailto:navsharma989@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#C8BA95]/5 border border-[#C8BA95]/20 shadow-sm flex items-center justify-center text-black group-hover:text-black group-hover:border-[#EA4335]/40 group-hover:bg-[#EA4335]/10 transition-all duration-200">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-black uppercase tracking-widest mb-0.5">Email</p>
                  <p className="font-semibold text-black text-sm transition-colors">
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
                <div className="w-12 h-12 rounded-xl bg-[#C8BA95]/5 border border-[#C8BA95]/20 shadow-sm flex items-center justify-center text-black group-hover:text-black group-hover:border-[#0A66C2]/40 group-hover:bg-[#0A66C2]/10 transition-all duration-200">
                  <Linkedin size={20} />
                </div>
                <div>
                  <p className="text-xs text-black uppercase tracking-widest mb-0.5">LinkedIn</p>
                  <p className="font-semibold text-black text-sm transition-colors">
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
                <div className="w-12 h-12 rounded-xl bg-[#C8BA95]/5 border border-[#C8BA95]/20 shadow-sm flex items-center justify-center text-black group-hover:text-black group-hover:border-[#C8BA95]/40 group-hover:bg-[#C8BA95]/10 transition-all duration-200">
                  <Github size={20} />
                </div>
                <div>
                  <p className="text-xs text-black uppercase tracking-widest mb-0.5">GitHub</p>
                  <p className="font-semibold text-black text-sm transition-colors">
                    /navsharma15
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#C8BA95]/5 border border-[#C8BA95]/20 shadow-sm flex items-center justify-center text-black">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-black uppercase tracking-widest mb-0.5">Location</p>
                  <p className="font-semibold text-black text-sm">India</p>
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
                  className={`w-11 h-11 rounded-full flex items-center justify-center bg-[#C8BA95]/5 border border-[#C8BA95]/20 shadow-sm ${defaultColor} ${hoverClass} transition-all duration-200`}
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
            className="w-full lg:w-2/3 bg-[#C8BA95]/5 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-[#C8BA95]/20 shadow-xl"
          >
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center gap-4">
                <CheckCircle size={56} className="text-[#94a679]" />
                <h3 className="text-2xl font-bold text-black">Message Sent!</h3>
                <p className="text-black max-w-sm">
                  Thanks for reaching out. I'll get back to you at <span className="text-black font-semibold">navsharma989@gmail.com</span> as soon as possible.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-4 px-6 py-2.5 rounded-xl border border-[#C8BA95]/30 text-black hover:text-black hover:border-[#C8BA95]/50 hover:bg-[#C8BA95]/10 transition-all text-sm"
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
                    <label className="text-sm font-semibold text-black">Name</label>
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
                    <label className="text-sm font-semibold text-black">Email</label>
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
                  <label className="text-sm font-semibold text-black">Subject</label>
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
                  <label className="text-sm font-semibold text-black">Message</label>
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
                  <div className="flex items-center gap-2 text-red-300 text-sm bg-red-900/20 border border-red-900/30 rounded-xl px-4 py-3">
                    <AlertCircle size={16} />
                    Something went wrong. Please try again or email directly.
                  </div>
                )}

                <motion.button
                  type="submit"
                  disabled={status === 'sending'}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-[#94a679] hover:bg-[#94a679]/90 disabled:bg-[#94a679]/50 text-[#4f633c] rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-[#94a679]/20 transition-all duration-200"
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
