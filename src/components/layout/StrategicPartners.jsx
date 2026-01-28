import React from 'react';
import { motion } from 'framer-motion';
import { Beaker, Globe2, Building2, GraduationCap } from 'lucide-react';

const StrategicPartners = () => {
  const rdPartners = [
    {
      name: "Can Tho University",
      role: "Scientific Direction & Technology Transfer",
      desc: "Leading expert collaboration in medicinal mushrooms and functional foods research.",
      icon: <GraduationCap size={32} />
    },
    {
      name: "Mycospring Vietnam",
      role: "R&D Alliance & Supply Chain",
      desc: "Strategic partnership achieving 15-20% cost optimization through process innovation.",
      icon: <Beaker size={32} />
    }
  ];

  const businessPartners = [
    { name: "Mămmy", category: "Baby Snacks & Nutrition", cite: "65, 81" },
    { name: "Tropiex", category: "Nutritional Bars", cite: "81" },
    { name: "HNA Global", category: "Milk Cake & Confectionery", cite: "81" },
    { name: "RetekUSA", category: "Freeze-Dried Yogurt", cite: "81" },
    { name: "International Partners", category: "USA & Asian Distribution", cite: "461" }
  ];

  return (
    <section id="partners" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold text-emerald-950 mb-6"
          >
            Strategic Alliance
          </motion.h2>
          <p className="text-gray-600">
            Surio operates on a B2B/OEM model, leveraging high-tech agriculture and 
            scientific research to serve reliable clients domestically and internationally.
          </p>
        </div>

        {/* R&D Alliance Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {rdPartners.map((partner, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-emerald-50 rounded-[3rem] p-10 flex items-start gap-8 border border-emerald-100 group hover:bg-emerald-600 transition-all duration-500"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-emerald-600 shadow-sm group-hover:scale-110 transition-transform">
                {partner.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-emerald-950 mb-2 group-hover:text-white transition-colors">
                  {partner.name}
                </h3>
                <p className="text-emerald-600 font-bold text-sm uppercase tracking-wider mb-4 group-hover:text-emerald-200 transition-colors">
                  {partner.role}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                  {partner.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Logo/Name Ticker (Business Partners) */}
        <div className="border-t border-gray-100 pt-16">
          <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-[0.4em] mb-12 italic">
            Trusted by Market Leaders
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {businessPartners.map((brand, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center group cursor-default"
              >
                <div className="px-8 py-4 bg-surio-offwhite rounded-2xl border border-transparent group-hover:border-emerald-200 group-hover:bg-white transition-all shadow-sm group-hover:shadow-md">
                  <span className="text-xl font-serif font-bold text-emerald-900/40 group-hover:text-emerald-700 transition-colors">
                    {brand.name}
                  </span>
                </div>
                <span className="mt-3 text-[10px] font-bold text-gray-400 uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">
                  {brand.category}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Global Orientation Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-24 p-1 rounded-3xl bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-600"
        >
          <div className="bg-white rounded-[1.4rem] p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="flex items-center gap-4">
              <Globe2 className="text-emerald-500 animate-pulse" size={40} />
              <div>
                <h4 className="text-xl font-bold text-emerald-950">Targeting Global Markets</h4>
                <p className="text-gray-500 text-sm italic">USA, Japan, South Korea & Middle East (Halal focus).</p>
              </div>
            </div>
            <div className="flex gap-4">
               <div className="px-4 py-2 bg-emerald-50 rounded-lg text-emerald-700 font-bold text-xs uppercase">FDA Registered </div>
               <div className="px-4 py-2 bg-emerald-50 rounded-lg text-emerald-700 font-bold text-xs uppercase">Halal in Progress </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default StrategicPartners;