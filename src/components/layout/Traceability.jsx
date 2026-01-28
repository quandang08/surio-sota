import { motion } from 'framer-motion';
import { Map, ShieldCheck, Factory, Truck, ClipboardCheck } from 'lucide-react';

const Traceability = () => {
  const steps = [
    {
      icon: <Map size={32} />,
      title: "Local Sourcing",
      desc: "Direct collaboration with farms in the Mekong Delta - the agricultural hub of SE Asia.",
      detail: "Ensuring fresh, stable, and traceable raw materials.",
      cite: ""
    },
    {
      icon: <ClipboardCheck size={32} />,
      title: "Complete Control",
      desc: "Closely monitored from harvesting to processing and packaging.",
      detail: "100% traceability from farm to finished goods.",
      cite: "[cite: 77, 409]"
    },
    {
      icon: <Factory size={32} />,
      title: "Global Standards",
      desc: "Manufacturing facility located in Tra Noc Industrial Park, Can Tho.",
      detail: "Certified by GMP, HACCP, and ISO 22000.",
      cite: "[cite: 207, 416]"
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Verified Quality",
      desc: "Final products meeting stringent US FDA and international benchmarks.",
      detail: "Assuring safety and bioactive integrity.",
      cite: "[cite: 193, 240]"
    }
  ];

  return (
    <section id="traceability" className="py-24 bg-emerald-950 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-emerald-400 font-bold text-xs uppercase tracking-[0.3em] block mb-4"
            >
              Transparency First
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif font-bold leading-tight"
            >
              Closed & Transparent <br /> Supply Chain
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="bg-emerald-800/50 p-4 rounded-2xl border border-emerald-700 backdrop-blur-sm"
          >
            <p className="text-emerald-200 text-sm font-medium">
              "100% traceability from local farms to finished goods"
            </p>
          </motion.div>
        </div>

        {/* Process Flow */}
        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-emerald-800 to-transparent -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-emerald-900 rounded-3xl flex items-center justify-center text-emerald-400 border border-emerald-800 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500 shadow-xl">
                    {step.icon}
                  </div>
                  <div className="absolute -top-4 -right-2 text-6xl font-black text-emerald-900/40 select-none group-hover:text-emerald-800/40 transition-colors">
                    0{i + 1}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-emerald-200/70 text-sm leading-relaxed mb-4">
                  {step.desc}
                </p>
                <div className="pt-4 border-t border-emerald-800">
                  <p className="text-[11px] font-bold text-emerald-500 uppercase tracking-wider">
                    {step.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Map Visual / Location Callout */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-24 p-8 md:p-12 rounded-[3rem] bg-gradient-to-br from-emerald-900/50 to-emerald-950 border border-emerald-800
          text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10">
             <Truck size={200} />
          </div>
          <h4 className="text-2xl font-serif italic mb-4">Strategic Location: Can Tho City</h4>
          <p className="max-w-2xl mx-auto text-emerald-200/60 text-sm">
            Located in the heart of the Mekong Delta, our 2,500 m² facility in Tra Noc Industrial Park ensures 
            convenient logistics and stable production operations for global export.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Traceability;