import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  darkMode: ["class"], // Enable dark mode based on a class

  theme: {
    extend: {
      fontFamily: {
        // Define Arabic and English font families
        arabic: ['"Tajawal"', '"Cairo"', "sans-serif"],
        english: ['"Inter"', '"Roboto"', "sans-serif"],
        poppins: ["var(--font-poppins)"],
        josefin: ["var(--font-josefin)"],
      },
      colors: {
        // Define colors for light and dark modes using CSS variables
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        // Adding radial and conic gradients
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        // Define custom screen sizes for responsive design
        "2xl": "1536px",
        xl: "1280px",
        lg: "1024px",
        md: "768px",
        sm: "640px",
        xs: "480px",
      },
    },
  },
  plugins: [],
};

export default config;
