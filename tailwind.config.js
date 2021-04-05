module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
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
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
