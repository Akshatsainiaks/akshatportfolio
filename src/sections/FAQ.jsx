import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

const EASE = [0.16, 1, 0.3, 1];

// Keep in sync with the FAQPage JSON-LD in index.html (answer engines compare both)
const faqs = [
  {
    q: 'Who is Akshat Saini?',
    a: 'Akshat Saini (Akshat Kumar Saini) is a Software Engineer from Udaipur, Rajasthan, India, focused on Full Stack development and DevOps. He holds a B.Tech in Computer Science from Techno India NJR Institute of Technology and is a Red Hat Certified System Administrator (RHCSA).',
  },
  {
    q: 'What is Srevox?',
    a: 'Srevox is a self-hosted Kubernetes observability and incident intelligence platform built by Akshat Saini. It detects CrashLoopBackOff, OOMKilled and LivenessProbe failures in real time, streams live pod logs in the browser and runs AI root-cause analysis using OpenAI, Anthropic or Ollama. It is live at srevox.in.',
  },
  {
    q: 'What technologies does Akshat Saini work with?',
    a: 'Akshat works with React.js, Next.js, Node.js, Express, Go, PostgreSQL, MongoDB, Redis, Docker, Kubernetes, Helm, Linux (RHCSA), AWS, Nginx, Grafana and CI/CD pipelines.',
  },
  {
    q: 'Is Akshat Saini open to new opportunities?',
    a: 'Yes. Akshat Saini is open to Software Engineer, Full Stack and DevOps roles, as well as freelance projects and collaborations.',
  },
  {
    q: 'How can I contact Akshat Saini?',
    a: 'You can email Akshat Saini at akshatsaini336@gmail.com, connect on LinkedIn, or use the contact form on www.akshatsaini.site.',
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="relative overflow-hidden px-6 py-24 bg-[#0a0a0c] text-white" aria-labelledby="faq-heading">
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-violet-500/30 bg-violet-500/10">
            <span className="text-xs font-bold tracking-[0.2em] text-violet-400 uppercase">Quick Answers</span>
          </div>
          <h2 id="faq-heading" className="text-4xl md:text-6xl font-black tracking-tighter uppercase">
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">FAQ</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.06 }}
                className={`rounded-2xl border transition-colors duration-300 ${
                  isOpen ? 'bg-[#111113] border-cyan-500/25' : 'bg-[#111113]/60 border-white/5 hover:border-white/10'
                }`}
              >
                <h3>
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-q-${i}`}
                    className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 cursor-pointer"
                  >
                    <span className={`font-semibold sm:text-lg ${isOpen ? 'text-white' : 'text-slate-300'}`}>{item.q}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25 }}
                      className={`w-8 h-8 shrink-0 flex items-center justify-center rounded-full border ${
                        isOpen ? 'border-cyan-500/40 text-cyan-400 bg-cyan-500/10' : 'border-white/10 text-slate-400'
                      }`}
                    >
                      <Plus size={16} />
                    </motion.span>
                  </button>
                </h3>
                {/* answer always in the DOM (crawlable); only its height animates */}
                <motion.div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-q-${i}`}
                  initial={false}
                  animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.35, ease: EASE }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-slate-400 leading-relaxed">{item.a}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
