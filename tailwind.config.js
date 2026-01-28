/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "2xl-max": { max: "1440px" },
      "xl-max":  { max: "1280px" },
      "lg-max":  { max: "1024px" },
      "md-max":  { max: "768px"  },
      "sm-max":  { max: "480px"  },
      "ipad-max": { max: "820px" },
    },
    extend: {
      colors: {
        surio: {
          green: "#006B3F",
          amber: "#D97706",
          emerald: "#022C22",
          offwhite: "#FAFAF8",
        },
      },
      fontFamily: {
        playfair: ["'Playfair Display'", "serif"],
        inter: ["'Inter'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
