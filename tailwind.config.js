/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        "primary-100": "var(--primary-100)",
        "primary-200": "var(--primary-200)",
        "primary-300": "var(--primary-300)",

        secondary: "var(--secondary)",

        gray: "var(--gray)",
        "gray-100": "var(--gray-100)",
        "gray-101": "var(--gray-101)",
        "gray-border": "var(--gray-border)",
        "gray-collapseopen": "var(--gray-collapseopen)",
        "gray-collapsehover": "var(--gray-collapsehover)",
        "gray-chevronhover": "var(--gray-chevronhover)",

        orange: "var(--orange)",

        green: "var(--green)",
        "green-hover": "var(--green-hover)",
        "green-border": "var(--green-border)",

        blue: "var(--blue)",
        "blue-tag": "var(--blue-tag)",
        "blue-taghover": "var(--blue-taghover)",

        // primary: {
        //   DEFAULT: "#0E1117",
        //   100: "#02040A",
        //   200: "#151B23",
        //   300: "#15191E",
        // },
        // secondary: { DEFAULT: "#F0F6FB" },
        // gray: {
        //   DEFAULT: "#9098A1",
        //   100: "#212830",
        //   101: "#242C32",
        //   border: "#3C444D",
        //   collapseopen: "#161A21",
        //   collapsehover: "#1E2429",
        //   chevronhover: "#2B3337",
        // },
        // orange: { DEFAULT: "#F78166" },
        // green: { DEFAULT: "#238636", hover: "#2A903B", border: "#449C51" },
        // blue: { DEFAULT: "#4493F8", tag: "#131D2E", taghover: "#1F6EEB" },
      },
    },
  },
  plugins: [],
};
