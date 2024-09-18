/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: {
          background: "#f5f5f5",
          text: "#000000",
        },
        dark: {
          background: "#1a202c",
          text: "#a0aec0",
        },
      },
    },
  },
  plugins: [],
};
