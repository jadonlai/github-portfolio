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
      },
      typography: () => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": "var(--gray)",
            "--tw-prose-headings": "var(--secondary)",
            "--tw-prose-lead": "var(--secondary)",
            "--tw-prose-links": "var(--secondary)",
            "--tw-prose-bold": "var(--secondary)",
            "--tw-prose-counters": "var(--secondary)",
            "--tw-prose-bullets": "var(--secondary)",
            "--tw-prose-hr": "var(--gray-border)",
          },
        },
      }),
    },
    screens: {
      sm: "780px",
      md: "1110px",
      lg: "1340px",
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-motion")],
};
