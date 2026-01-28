import React from 'react';
import { motion } from 'framer-motion';
import { ThermometerSnowflake, Zap, HeartPulse, Clock } from 'lucide-react';

const TechComparison = () => {
  const comparisonData = [
    {
      feature: "Nutrient Retention",
      icon: <HeartPulse className="text-emerald-500" />,
      surio: "95% - 97%",
      surioDetail: "Preserves active compounds, vitamins, and natural flavor.",
      conventional: "50% - 70%",
      conventionalDetail: "Significant loss due to high-heat exposure.",
      percentage: 97,
    },
    {
      feature: "Processing Temperature",
      icon: <ThermometerSnowflake className="text-blue-500" />,
      surio: "-40°C to -50°C",
      surioDetail: "Cold process preserves cellular structure & bioactive integrity.",
      conventional: "60°C to 120°C",
      conventionalDetail: "Heat causes structural damage and oxidation.",
      percentage: 100,
    },
    {
      feature: "Shelf Life",
      icon: <Clock className="text-amber-500" />,
      surio: "2 - 3 Years",
      surioDetail: "No preservatives needed; extremely low moisture content.",
      conventional: "6 - 12 Months",
      conventionalDetail: "Often requires additives to prevent spoilage.",
      percentage: 85,
    },
    {
      feature: "Physical Quality",
      icon: <Zap className="text-purple-500" />,
      surio: "Superior Integrity",
      surioDetail: "Light, crispy texture with excellent rehydration.",
      conventional: "Shrunken & Hard",
      conventionalDetail: "Changes in color, flavor, and texture.",
      percentage: 90,
    }
  ];

  return (
    <section id="tech-comparison" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold text-emerald-950 mb-6"
          >
            The Science of Superiority
          </motion.h2>
          <p className="text-gray-600 text-lg">
            Lyophilization (Freeze-drying) is the core of our competitive edge, ensuring 
            maximum retention of vital nutrients without artificial preservatives[cite: 306, 307].
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 gap-8">
            {comparisonData.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-surio-offwhite rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  {/* Feature Icon & Title */}
                  <div className="flex items-center gap-4 min-w-[250px]">
                    <div className="p-3 bg-white rounded-2xl shadow-sm italic">
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-xl text-emerald-900">{item.feature}</h3>
                  </div>

                  {/* Comparison Bars */}
                  <div className="flex-1 w-full space-y-4">
                    {/* Surio Standard */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                        <span className="text-emerald-600">Surio Freeze-Drying</span>
                        <span>{item.surio}</span>
                      </div>
                      <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.percentage}%` }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          className="h-full bg-emerald-500 rounded-full"
                        />
                      </div>
                      <p className="text-xs text-emerald-700/70 italic">{item.surioDetail}</p>
                    </div>

                    {/* Conventional Standard */}
                    <div className="space-y-1 opacity-60">
                      <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                        <span className="text-gray-500">Conventional Heat Drying</span>
                        <span>{item.conventional}</span>
                      </div>
                      <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.percentage * 0.5}%` }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          className="h-full bg-gray-400 rounded-full"
                        />
                      </div>
                      <p className="text-xs text-gray-500 italic">{item.conventionalDetail}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technical Callout */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-emerald-50 px-6 py-3 rounded-full border border-emerald-100">
            <p className="text-emerald-800 font-bold text-sm">
              Standard: Preserves 95-97% of active compounds vs 30-50% loss in conventional drying[cite: 41, 321].
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechComparison;