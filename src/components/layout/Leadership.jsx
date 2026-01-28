import { motion } from "framer-motion";

const Leadership = () => {
  const team = [
    {
      name: "Mr. Ido Peres",
      role: "Strategic R&D Advisor",
      title: "CEO of Mycospring",
      desc: "Israeli high-tech agriculture pioneer and architect of the Israel-Vietnam Tech Bridge. Managing $400K invested capital in innovation.",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "Mr. Trịnh Văn Hoàng",
      role: "Production Director",
      title: "Chemical Engineer",
      desc: "Over 10 years of expertise in GMP/HACCP manufacturing with zero major non-conformities. Overseeing the 2,500m² Tra Noc facility.",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    },
    {
      name: "Dr. Trịnh Thị Xuân",
      role: "Chief Scientific Officer",
      title: "Can Tho University",
      desc: "Leading expert in medicinal mushrooms and functional foods research, driving the strategic R&D Alliance with CTU.",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    },
  ];

  return (
    <section id="leadership" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-surio-amber font-bold text-xs uppercase tracking-[0.3em] block mb-4">
            Innovation Hub
          </span>
          <h2 className="text-5xl font-playfair font-bold text-emerald-950 leading-tight">
            Leadership Powered by Science
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mt-16">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group"
            >
              <div className="aspect-[4/5] rounded-[40px] overflow-hidden mb-8 relative border border-gray-100 shadow-sm">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-emerald-950/20 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/85 backdrop-blur-md border border-white/40
                rounded-3xl shadow-xl">
                  <p className="text-[10px] font-black text-emerald-950 uppercase tracking-widest">
                    {member.role}
                  </p>
                </div>
              </div>
              <h4 className="text-2xl font-bold text-emerald-950 mb-1">
                {member.name}
              </h4>
              <p className="text-surio-green font-black text-[10px] uppercase tracking-[0.2em] mb-4">
                {member.title}
              </p>
              <p className="text-sm text-gray-500 leading-relaxed font-medium">
                {member.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 border-t border-gray-100 pt-12 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-xl font-playfair font-bold italic text-emerald-900">
              Can Tho University
            </span>
            <span className="text-xl font-playfair font-bold italic text-emerald-900">
              Mycospring Vietnam
            </span>
          </div>
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mt-8 md:mt-0 text-center md:text-right">
            Strategic R&D & Technology Transfer Alliance
          </p>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
