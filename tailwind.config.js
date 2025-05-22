/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        meme: ["Bangers", "cursive"],
        body: ["Chakra Petch", "sans-serif"],
      },
      colors: {
        textred: "EA384C",
      },
    },
  },
  plugins: [],
};
