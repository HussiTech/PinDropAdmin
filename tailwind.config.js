/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        theme: "#0774A3",
        "theme-green": "#A6F756",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        "menu-item": "0px 4px 6px 0px rgba(0, 0, 0, 0.8)",
        table: "0px 2px 8px 0px rgba(0, 0, 0, 0.15)",
        dropdown: "-2px 4px 6px 0px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
