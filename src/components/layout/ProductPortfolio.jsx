import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Beaker } from "lucide-react";
import Product1 from "../../assets/images/product-1.webp";
import Product2 from "../../assets/images/product-2.webp";
import Product3 from "../../assets/images/product-3.webp";

const ProductPortfolio = () => {
  const products = [
    {
      tagline: "Probiotic Innovation",
      title: "Freeze-Dried Yogurt Bites",
      desc: "Probiotic snacks maintain 10 billion live probiotics per box, remaining stable at room temperature thanks to freeze-drying technology.",
      image: Product1,
      link: "#",
    },
    {
      tagline: "The 'Soft Gold'",
      title: "Cordyceps Mushroom",
      desc: "Freeze-dried medicinal mushrooms help maximize cordycepin content and absorption for health products.",
      image: Product2,
      link: "#",
    },
    {
      tagline: "Premium Ingredients",
      title: "Tropical Fruits & Veggies",
      desc: "Dried mango, durian, and jackfruit slices retain their natural color, crispness, and high antioxidant content.",
        image: Product3,
      link: "#",
    },
  ];

  return (
    <section id="products" className="py-24 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="mb-8 md:mb-0">
            <span className="text-surio-amber font-bold text-xs uppercase tracking-[0.3em] block mb-4">
              Diverse Portfolio
            </span>
            <h2 className="text-5xl font-playfair font-bold text-emerald-950 leading-tight">
              Tailored B2B Solutions
            </h2>
          </div>
          <div className="md:max-w-xs">
            <p className="text-sm text-gray-500 font-medium leading-relaxed">
              Flexible production lines support powder, tablet, filter bag or
              mixed forms for global F&B and processing industries.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {products.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[40px] overflow-hidden shadow-sm hover:shadow-2xl transition-all group border border-gray-100"
            >
              <div className="h-72 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-10">
                <span className="text-[10px] font-black uppercase tracking-widest text-surio-amber">
                  {p.tagline}
                </span>
                <h3 className="text-2xl font-bold text-emerald-950 mt-2 mb-4">
                  {p.title}
                </h3>
                <p className="text-gray-600 mb-8 line-clamp-3 text-sm leading-relaxed font-medium">
                  {p.desc}
                </p>
                <div className="flex items-center text-[10px] font-black text-surio-green uppercase tracking-widest cursor-pointer hover:underline">
                  View Specifications <ArrowRight className="ml-2" size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 bg-white border border-emerald-100 rounded-[40px] p-12 flex flex-col md:flex-row
        items-center justify-between shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full -mr-16 -mt-16 opacity-50" />

          <div className="flex items-center space-x-8 mb-8 md:mb-0 relative z-10">
            <div className="bg-emerald-50 p-5 rounded-2xl shadow-sm">
              <TrendingUp className="text-surio-green" size={32} />
            </div>
            <div>
              <p className="text-2xl font-bold text-emerald-950">
                Current Capacity: 7–10 Tons/Month
              </p>
              <p className="text-sm text-gray-500 font-medium mt-1">
                Scalability up to 20 tons within 18 months for large OEM
                contracts.
              </p>
            </div>
          </div>

          <button className="bg-emerald-950 hover:bg-surio-green text-white px-10 py-5 rounded-2xl font-bold shadow-xl transition-all active:scale-95 whitespace-nowrap relative z-10 uppercase text-xs tracking-widest">
            Discuss Volume Requirements
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductPortfolio;
