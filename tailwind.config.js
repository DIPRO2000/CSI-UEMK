/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rowdies: ["Rowdies", "cursive"], // Adding Rowdies font
        orbitron: ["Orbitron", "sans-serif"]  // Adding Orbitron font
      },
    },
  },
  plugins: [],
};
