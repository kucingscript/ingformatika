/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ["dracula"],
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
