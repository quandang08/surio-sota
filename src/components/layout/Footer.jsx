import { MapPin, Mail, Globe, Phone } from "lucide-react";
import Logo from "../../assets/images/logo.webp";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FAFAF8] pt-20 pb-10 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-4 =">
              <div className="w-24 h-24 flex items-center justify-center overflow-hidden -mt-8">
                <img
                  src={Logo}
                  alt="Surio Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <p className="text-sm text-gray-500 font-medium leading-relaxed mb-8">
              Pioneering advanced lyophilization technology to transform
              Vietnam's finest natural ingredients into high-value nutritional
              solutions.
            </p>
            <div className="flex space-x-6">
              {["Linkedin", "Facebook", "Global Export"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-[10px] font-black uppercase tracking-widest text-emerald-950 hover:text-surio-green transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-8">
              Contact Headquarters
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <MapPin size={20} className="text-surio-green shrink-0" />
                <span className="text-sm text-gray-600 font-medium leading-tight">
                  14/7 Mau Than, Can Tho City, <br /> Vietnam (Tra Noc IP)
                  [cite: 16, 130]
                </span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone size={20} className="text-surio-green shrink-0" />
                <a
                  href="tel:0919636915"
                  className="text-sm text-gray-600 font-medium hover:text-surio-green"
                >
                  0919.636.915{" "}
                </a>
              </li>
              <li className="flex items-center space-x-4">
                <Mail size={20} className="text-surio-green shrink-0" />
                <a
                  href="mailto:suriovn@gmail.com"
                  className="text-sm text-gray-600 font-medium hover:text-surio-green"
                >
                  suriovn@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-8">
              Quick Access
            </h4>
            <ul className="space-y-4">
              {[
                "Overview",
                "Technology",
                "Products",
                "Leadership",
                "Certifications",
              ].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-xs font-bold uppercase tracking-widest text-emerald-950 hover:text-surio-green transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-emerald-50 p-4 rounded-[32px] border border-emerald-100/50 shadow-sm">
            <p className="text-xs font-bold text-surio-green uppercase tracking-widest mb-2">
              B2B & OEM Solutions
            </p>
            <p className="text-sm text-emerald-900/70 font-medium mb-6">
              Expert OEM/ODM manufacturing for functional foods and high-value
              ingredients.
            </p>
            <button className="w-full bg-emerald-950 text-white py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-surio-green transition-all shadow-lg active:scale-95">
              Contact B2B Team →
            </button>
          </div>
        </div>

        <div className="pt-10 sm-max:pt-0 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center md:text-left">
            Copyright © {currentYear} SURIO LIMITED LIABILITY COMPANY.{" "}
            <br className="md:hidden" />
            All rights reserved. Design by sotagroup.vn
          </p>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                FDA ID:
              </span>
              <span className="text-[10px] font-bold text-emerald-950">
                16141656998
              </span>
            </div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              ISO 22000 & HACCP Certified
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
