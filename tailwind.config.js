module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "pallete-light-yellow": "#FFE15D",
        "pallete-yellow": "#F49D1A",
        "pallete-red": "#DC3535",
        "pallete-purple": "#B01E68",
      },
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
