import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, TestTube2, BadgeCheck, BarChart4, Ship, Handshake } from 'lucide-react';

const OEMWorkflow = () => {
  const steps = [
    {
      icon: <Lightbulb size={28} />,
      title: "Consultation & Concept",
      desc: "Discussing your vision, target market, and specific OEM/ODM requirements.",
      cite: "Custom product development tailored to partner needs."
    },
    {
      icon: <TestTube2 size={28} />,
      title: "R&D & Formulation",
      desc: "Our scientific team develops custom formulas using advanced freeze-drying tech.",
      cite: "Comprehensive solutions from formula research to production."
    },
    {
      icon: <BadgeCheck size={28} />,
      title: "Sampling & Validation",
      desc: "Creating prototypes (MVP) to ensure nutritional and flavor benchmarks are met.",
      cite: "Focusing on retaining 97% of nutritional value."
    },
    {
      icon: <BarChart4 size={28} />,
      title: "Compliance & Mass Production",
      desc: "Scaling up with 7-10 tons/month capacity under FDA and ISO standards.",
      cite: "Strict quality control according to GMP and HACCP."
    },
    {
      icon: <Ship size={28} />,
      title: "Packaging & Logistics",
      desc: "Final packaging and shipping with complete traceability from farm to port.",
      cite: "Ensuring seamless entry into global markets."
    }
  ];

  return (
    <section id="oem-workflow" className="py-24 bg-surio-offwhite">
      <div className="container mx-auto px-6">

        <div className="max-w-3xl mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-emerald-600 font-bold text-xs uppercase tracking-[0.3em] block mb-4"
          >
            Partnership Path
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-emerald-950 mb-6 italic">
            Your Vision, Our Expertise
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Surio provides end-to-end OEM/ODM solutions, enabling brands to rapidly launch 
            innovative, high-quality nutritional products ready for the international market.
          </p>
        </div>

        {/* Workflow Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 relative">

          <div className="hidden lg:block absolute top-1/3 left-0 w-full h-px border-t border-dashed border-emerald-200 -z-0" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative z-10 bg-white p-6 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all group flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                {step.icon}
              </div>
              <h3 className="font-bold text-emerald-950 mb-3 text-lg leading-tight">
                {step.title}
              </h3>
              <p className="text-gray-500 text-xs mb-4 flex-grow">
                {step.desc}
              </p>
              <div className="pt-4 border-t border-gray-50 mt-auto">
                <span className="text-[10px] text-emerald-700/60 italic leading-tight">
                  {step.cite}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-20 bg-emerald-900 rounded-[3rem] p-10 text-white flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center">
              <Handshake size={32} className="text-emerald-400" />
            </div>
            <div>
              <h4 className="text-2xl font-serif font-bold">Ready to Elevate Your Brand?</h4>
              <p className="text-emerald-200/60 text-sm italic">"Bringing Vietnam's Green Gold to the World".</p>
            </div>
          </div>
          <button className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-4 px-10 rounded-2xl transition-all shadow-lg shadow-emerald-900/40">
            Start Collaboration
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default OEMWorkflow;