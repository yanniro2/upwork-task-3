module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      "Mobile": { "min": "200px", "max": "480px" },
      "Tablet": { "min": "480px", "max": "768px" },
      "default": { "min": "768px", "max": "1024px" },
      "Desktop": { "min": "1024px", "max": "1200px" },
      "large": "1440px",
    },
    colors: {
      // ## Colors

      // ### Primary



      // ### Neutral

      "Dark-blue": "#1B1C2D",
      "Dark-blue-2": "#131420",
      "Dark-blue-3": "rgba(19, 20, 32, 0.4)",
      "Dark-blue-4": "#20143A",
      "Blue": "#794DFD",
      "Icon-color": "#27272F",
      "Gray": "#7E7E7E",
      "Gray-2": "#454545",
      "yellow": "#FFE923",


      // Default
      "White": "#ffffff",


    },
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
    },
    fontSize: {
      normal: "14px",
    },
    fontWeight: {
      n: 400,
      m: 500,
      l: 700,
    },


    extend: {},
  },
  plugins: [],
}
