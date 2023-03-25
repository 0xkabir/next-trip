/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        tripTheme: {
          primary: "#1A2C51",
          secondary: "#222222",
          accent: "#17AEBF",
          neutral: "#333333",
          info: "#5DADE2",
          success: "#3CB371",
          warning: "#FFA07A",
          danger: "#8B0000",
          "base-100": "#ffffff"
        },
      },
      "dark",
      "cupcake",
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
