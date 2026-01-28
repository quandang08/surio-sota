import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle2, Globe2, Lock } from "lucide-react";

const StrategicCertifications = () => {
  const certifications = [
    {
      title: "FDA Registered",
      info: "NO. 16141656998",
      desc: "Essential for US export markets",
      status: "Verified",
      icon: <Globe2 className="text-surio-green" size={20} />,
    },
    {
      title: "ISO 22000",
      info: "FOOD SAFETY",
      desc: "Comprehensive management system",
      status: "Certified",
      icon: <ShieldCheck className="text-surio-green" size={20} />,
    },
    {
      title: "HACCP",
      info: "RISK ANALYSIS",
      desc: "Production integrity from farm to factory",
      status: "Certified",
      icon: <Lock className="text-surio-green" size={20} />,
    },
    {
      title: "Halal Ready",
      info: "IN PROGRESS Q4 2025",
      desc: "Unlocking the global Muslim market",
      status: "Strategic",
      icon: <CheckCircle2 className="text-surio-amber" size={20} />,
    },
  ];

  return (
    <section id="certifications" className="py-24 bg-[#FAFAF8] overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-surio-amber font-bold text-xs uppercase tracking-[0.4em] block mb-4">
            Strategic Compliance
          </span>
          <h2 className="text-5xl font-playfair font-bold text-emerald-950">
            Global Trust Architecture
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white p-10 rounded-[40px] shadow-[0_15px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] transition-all duration-500 border border-emerald-950/5 flex flex-col items-center group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50/30 rounded-full -mr-12 -mt-12 transition-transform group-hover:scale-110" />

              <div className="w-20 h-20 bg-emerald-50/50 rounded-full flex items-center justify-center mb-8 border border-emerald-100/50 group-hover:bg-emerald-100 transition-colors duration-300">
                <span className="text-[10px] font-black text-emerald-800 uppercase tracking-widest">
                  Cert
                </span>
              </div>

              <h3 className="text-xl font-bold text-emerald-950 mb-1">
                {cert.title}
              </h3>
              <p className="text-[10px] font-black text-surio-green uppercase tracking-[0.15em] mb-4">
                {cert.info}
              </p>
              <p className="text-sm text-gray-400 font-medium leading-tight max-w-[180px]">
                {cert.desc}
              </p>

              <div className="mt-10 pt-6 border-t border-gray-100 w-full flex items-center justify-center space-x-2">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {cert.icon}
                </motion.div>
                <span className="text-[10px] font-black text-emerald-950 uppercase tracking-widest">
                  {cert.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategicCertifications;
