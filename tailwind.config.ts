import { type Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Redefining emerald to be a more elegant, less saturated "Pine/Sage" green
        emerald: {
          50: '#f6f7f6',
          100: '#e8ebe9',
          200: '#d0d8d4',
          300: '#adbdb5',
          400: '#849d92',
          500: '#618073',
          600: '#4c665a',
          700: '#3f534a',
          800: '#35453e',
          900: '#2d3a34',
          950: '#18201c',
        },
        amber: {
          400: '#e2c58a', // Softer, more muted gold
          500: '#d4b06a',
        }
      }
    }
  }
} satisfies Config;
