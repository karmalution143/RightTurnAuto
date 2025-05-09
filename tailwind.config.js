/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'false',
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",      // App Router (Next.js 13+)
    "./src/pages/**/*.{js,ts,jsx,tsx}",    // Legacy Pages Router (if any)
    "./src/components/**/*.{js,ts,jsx,tsx}", // Custom components
    "./src/**/*.{js,ts,jsx,tsx}",          // Any other files in the src directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
