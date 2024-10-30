/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0E1117",
          100: "#02040A",
          200: "#151B23",
          300: "#15191E",
        },
        secondary: { DEFAULT: "#F0F6FB" },
        gray: {
          DEFAULT: "#9098A1",
          100: "#212830",
          101: "#242C32",
          border: "#3C444D",
          collapseopen: "#161A21",
          collapsehover: "#1E2429",
        },
        orange: { DEFAULT: "#F78166" },
        green: { DEFAULT: "#238636", hover: "#2A903B", border: "#449C51" },
        blue: { DEFAULT: "#4493F8", tag: "#131D2E", taghover: "#1F6EEB" },
      },
    },
  },
  plugins: [],
};
