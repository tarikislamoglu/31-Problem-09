/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "15px 50px 35px rgba(255, 255, 255, 0.1)",
      },
    },
  },
  plugins: [],
};
