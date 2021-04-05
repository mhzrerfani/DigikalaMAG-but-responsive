module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      phone: "640px",
      tablet: "768px",
      loptop: "1024px",
      desktop: "1280px",
    },
    fontFamily: {
      vazir: "Vazir",
    },
    extend: {
      keyframes: {
        modalShow: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        modalShow: "modalShow .1s ease-in-out",
      },
      colors: {
        primary: "#2899d5",
        footer1: "#6b7074",
        footer2: "#5a5f64",
        footer3: "#a6a9ab",
        instagram: "#FD1D1D",
        twitter: "#1DA1F2",
      },
      spacing: {
        13: "52px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
