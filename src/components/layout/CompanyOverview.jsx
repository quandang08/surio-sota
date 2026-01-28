import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Factory,
  TrendingUp,
  Users,
  Globe,
  Award,
  Leaf,
  Microscope,
} from "lucide-react";

const CompanyOverview = () => {
  const stats = [
    {
      icon: <MapPin />,
      label: "Location",
      value: "Can Tho, Vietnam",
      sub: "680m² R&D + 2,000m² Farm",
    },
    {
      icon: <Factory />,
      label: "Expertise",
      value: "OEM/ODM Focus",
      sub: "Functional Foods",
    },
    {
      icon: <TrendingUp />,
      label: "Capacity",
      value: "9-13 Tons/Month",
      sub: "Export Standard",
    },
    {
      icon: <Users />,
      label: "Specialists",
      value: "Expert Alliance",
      sub: "CTU & Mycospring",
    },
  ];

  const satelliteIcons = [
    { icon: <Award size={22} />, label: "Quality" },
    { icon: <Leaf size={22} />, label: "Sustainability" },
    { icon: <Microscope size={22} />, label: "Innovation" },
    { icon: <Globe size={22} />, label: "Export" },
  ];

  return (
    <section id="overview" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <div>
            <div className="mb-12">
              <span className="text-surio-amber font-bold text-xs uppercase tracking-[0.3em] block mb-4">
                Pioneering Southeast Asia
              </span>
              <h2 className="text-5xl font-playfair font-bold text-emerald-950 leading-tight">
                Transforming Nature into <br /> Nutrient Density
              </h2>
            </div>

            <p className="text-gray-600 mb-12 text-lg leading-relaxed font-medium">
              Founded in 2018 in Can Tho—the agricultural hub of the Mekong
              Delta—Surio specializes in transforming natural, local ingredients
              into premium, nutrient-dense products using state-of-the-art
              lyophilization (freeze-drying) technology.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#F9FAF7] p-6 rounded-[32px] hover:shadow-xl transition-all border border-gray-100 group"
                >
                  <div className="text-surio-green mb-4 group-hover:scale-110 transition-transform duration-300">
                    {React.cloneElement(stat.icon, { size: 28 })}
                  </div>
                  <h4 className="text-[10px] font-black text-surio-amber uppercase tracking-widest mb-1">
                    {stat.label}
                  </h4>
                  <p className="text-xl font-bold text-emerald-950 tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-xs text-gray-400 font-medium italic">
                    {stat.sub}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square relative flex items-center justify-center max-w-2xl mx-auto">
              
              {/* Central Glow Background */}
              <div className="absolute inset-0 bg-emerald-50 rounded-full scale-90 blur-3xl opacity-40" />

              <div className="absolute inset-0 border-2 border-dashed border-emerald-300/70 rounded-full" />
              
              <div className="absolute inset-[15%] border-2 border-dashed border-emerald-200/70 rounded-full" />

              <div className="relative z-10 text-center max-w-xs px-4">
                <div className="bg-surio-green text-white w-20 h-20 rounded-3xl flex items-center 
                  justify-center mx-auto mb-8 shadow-[0_20px_50px_rgba(0,107,63,0.15)] rotate-3"
                >
                  <Globe size={40} />
                </div>
                <h3 className="text-3xl font-playfair font-bold text-emerald-950 mb-4 italic">
                  Our Vision
                </h3>
                <p className="text-sm text-gray-500 font-medium leading-relaxed">
                  Global leadership in Green Nutrition, aiming for
                  <span className="text-surio-green font-bold"> 30% of revenue </span>
                  from exports by 2026. Setting new benchmarks in sustainability.
                </p>
              </div>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-full h-full"
              >
                {satelliteIcons.map((item, i) => (
                  <div
                    key={i}
                    className="absolute w-14 h-14 bg-white shadow-lg rounded-2xl flex items-center justify-center
                    text-surio-green border border-emerald-50"
                    style={{
                      top: `${50 + 50 * Math.sin((i * Math.PI) / 2)}%`,
                      left: `${50 + 50 * Math.cos((i * Math.PI) / 2)}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    >
                      {item.icon}
                    </motion.div>
                  </div>
                ))}
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;