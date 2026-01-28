import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Factory, TrendingUp } from "lucide-react";
import hero from "../../assets/images/hero.webp";
const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center bg-[#FAFAF8]">
      <div className="absolute top-0 right-0 w-2/3 h-full bg-[#F2F3EE] rounded-bl-[100px] -z-10" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-emerald-50 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center space-x-3 mb-6">
            <span className="w-12 h-[1px] bg-surio-amber" />
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-surio-amber">
              Vietnamese Green Gold
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold leading-[0.95] text-emerald-950 mb-8 ">
            The Future of <br />
            <span className="text-surio-green italic font-normal tracking-tight font-playfair">
              Premium Nutrition
            </span>
          </h1>
          <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed font-medium">
            Surio is a pioneering Vietnamese manufacturer specializing in
            high-value, freeze-dried functional foods and nutritional
            ingredients, committed to quality, sustainability, and global export
            standards
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              className="bg-surio-green hover:bg-emerald-800 text-white px-10 py-5 rounded-xl font-bold
            flex items-center justify-center transition-all group shadow-xl"
            >
              Our Capabilities
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              className="bg-white border border-gray-200 text-emerald-950 hover:bg-gray-50 px-10 py-5
            rounded-xl font-bold transition-all shadow-sm"
            >
              Contact B2B Team
            </button>
          </div>

          <div className="mt-20 flex space-x-12">
            <div>
              <p className="text-3xl font-bold text-emerald-950">97%</p>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mt-1">
                Nutrient Retention
              </p>
            </div>
            <div className="w-[1px] h-12 bg-gray-200" />
            <div>
              <p className="text-3xl font-bold text-emerald-950">FDA</p>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mt-1">
                Export Ready
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="rounded-[40px] overflow-hidden shadow-2xl relative border-[12px] border-white">
            <img
              src={hero}
              alt="State of the art freeze drying lab"
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 to-transparent" />

            <div className="absolute bottom-8 left-8 right-8 p-8 glass-card rounded-3xl border border-white/40 backdrop-blur-md bg-white/30">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-surio-amber uppercase tracking-widest mb-1">
                    Company Status
                  </p>
                  <p className="text-xl font-bold text-emerald-950 uppercase tracking-tighter">
                    Active Plant: Tra Noc IP
                  </p>
                </div>
                <div className="bg-surio-green/10 p-3 rounded-full">
                  <Factory className="text-surio-green" />
                </div>
              </div>
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-4 bg-white p-6 shadow-2xl rounded-2xl border border-emerald-50 hidden md:block"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-amber-50 p-3 rounded-xl">
                <TrendingUp className="text-surio-amber" size={24} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  Roadmap
                </p>
                <p className="text-lg font-bold text-emerald-950">
                  20 Tons / Month
                </p>
                <p className="text-xs text-gray-500 font-medium">
                  Scalable in 18 months
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
