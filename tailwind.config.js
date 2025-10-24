/** @type {import('tailwindcss').Config} */
module.exports = {
  // Add NativeWind preset so nativewind's metro helper can validate Tailwind
  // configuration when Metro loads `metro.config.js`.
  // Use the installed preset entrypoint which resolves to the compiled
  // `dist/tailwind` code (`nativewind/preset`), ensuring Node can resolve it.
  presets: [require('nativewind/preset')],
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        pinktober: {
          DEFAULT: "#ec4899", // rose principal
          dark: "#be185d", // rose foncé
        },
      },
    },
  },
  plugins: [],
};
