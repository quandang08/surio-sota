import React from "react";
import { motion } from "framer-motion";
import { Box, Beaker, TrendingUp, ShieldCheck, Zap } from "lucide-react";

const CoreTechnology = () => {
  return (
    <section
      id="technology"
      className="py-24 bg-emerald-950 text-white overflow-hidden relative"
    >
      <div className="absolute top-0 right-0 opacity-10 pointer-events-none translate-x-1/4 -translate-y-1/4">
        <Box size={600} strokeWidth={0.5} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-surio-amber font-bold text-xs uppercase tracking-[0.3em] block mb-4">
            Superior Lyophilization
          </span>
          <h2 className="text-5xl font-playfair font-bold text-white leading-tight italic">
            Preserving the <br /> Cellular Integrity
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 p-10 rounded-[40px] backdrop-blur-sm hover:bg-white/10 transition-all group"
          >
            <div
              className="bg-surio-amber/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-12
            transition-transform"
            >
              <Beaker className="text-surio-amber" size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-6">Cold Process</h3>
            <p className="text-emerald-100/70 leading-relaxed mb-8">
              Water is removed at extremely low temperatures from {"-40°C to -50°C"} 
              under high vacuum, preventing heat damage and preserving the delicate 
              cellular structure of the ingredients.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-sm font-bold text-emerald-300">
                <ShieldCheck size={18} className="mr-3 text-surio-amber" /> No
                Preservatives Required
              </li>
              <li className="flex items-center text-sm font-bold text-emerald-300">
                <ShieldCheck size={18} className="mr-3 text-surio-amber" />{" "}
                Color & Shape Stability
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 border border-white/10 p-10 rounded-[40px] backdrop-blur-sm hover:bg-white/10 transition-all group"
          >
            <div className="bg-surio-amber/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform">
              <TrendingUp className="text-surio-amber" size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-6">Nutrient Retention</h3>
            <p className="text-emerald-100/70 leading-relaxed mb-6">
              Our process preserves {"95-97%"} of vital vitamins and bioactive 
              compounds, significantly outperforming conventional heat-drying 
              methods that cause major nutrient loss.
            </p>
            
            <div className="flex items-end space-x-3 mt-10">
              <div className="flex flex-col items-center">
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: 112 }}
                  className="w-10 bg-surio-green rounded-t-lg shadow-[0_0_15px_rgba(0,107,63,0.4)]"
                />
                <span className="text-[8px] mt-2 font-bold opacity-50 uppercase">
                  Surio
                </span>
              </div>
              <div className="flex flex-col items-center">
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: 48 }}
                  className="w-10 bg-white/20 rounded-t-lg"
                />
                <span className="text-[8px] mt-2 font-bold opacity-50 uppercase">
                  Conventional
                </span>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 pb-2 ml-2">
                Superior Tech
              </span>
            </div>
          </motion.div>

          {/* Card 3: Product Quality */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-white/5 border border-white/10 p-10 rounded-[40px] backdrop-blur-sm hover:bg-white/10 transition-all group"
          >
            <div className="bg-surio-amber/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-12
            transition-transform">
              <Zap className="text-surio-amber" size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-6">Product Quality</h3>
            <p className="text-emerald-100/70 leading-relaxed mb-6">
              The result is a light, crispy texture with exceptional rehydration 
              properties and a stable shelf life of up to 2-3 years at ambient 
              temperatures.
            </p>
            <div className="pt-8 border-t border-white/10 mt-8">
              <p className="text-xs font-bold text-surio-amber uppercase tracking-widest mb-4">
                Ideal for:
              </p>
              <div className="flex flex-wrap gap-2">
                {["Baby Food", "Wellness Snacks", "Pharma"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-3 py-1 bg-white/5 rounded-full border border-white/10 font-bold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoreTechnology;