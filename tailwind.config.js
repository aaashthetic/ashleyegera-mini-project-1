module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        arial: ["Arial", "sans-serif"],
        playfair: ["'Playfair Display'", "serif"],
        sacramento: ["Sacramento", "cursive"],
      },
    },
  },
  plugins: [],
};