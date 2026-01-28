import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, ArrowRight } from "lucide-react";

const ContactCTA = () => {
  return (
    <section className="py-24 bg-emerald-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-surio-green rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-surio-amber rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-8 leading-tight">
            Bring <span className="text-surio-green italic">"Green Gold"</span> <br />
            to your World.
          </h2>
          
          <p className="text-emerald-100/70 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Contact us today to explore how our freeze-drying expertise can elevate 
            your brand's nutritional offerings and market reach.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto bg-white text-emerald-950 hover:bg-emerald-50 px-10 py-5 rounded-2xl
            font-bold transition-all shadow-xl flex items-center justify-center group">
              Start Partnership
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>

            <a 
              href="tel:0919636915" 
              className="w-full sm:w-auto border border-white/20 hover:border-white/50 bg-white/5 backdrop-blur-md
              text-white px-10 py-5 rounded-2xl font-bold transition-all flex items-center justify-center"
            >
              <Phone className="mr-3 text-surio-amber" size={20} />
              0919.636.915
            </a>
          </div>

          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col items-center">
             <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em] mb-2">
               Manufacturing Base
             </p>
             <p className="text-sm text-emerald-100/50 font-medium italic">
               14/7 Mau Than, Can Tho, Vietnam 
             </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;