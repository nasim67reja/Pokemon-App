/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    // "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    borderRadius: {
      DEFAULT: "0.8rem",
    },
    extend: {
      colors: {
        fly: "#30A7D7",
        "from-fly": "#BDBDBD",
        PRIMARYYL: "#FFCB05",
        PRIMARYBL: "#2B73B9",
        SECONDARYBL: "#9BCC50",
        SECONDARYPO: "#B97FC9",
        SECONDARYFR: "#FC7C23",
        SECONDARYPS: "#F366B9",
        SECONDARYWA: "#4592C4",
        SECONDARYBU: "#729F3F",
        SECONDARYIC: "#3DC7EF",
        ACCENTGR: "#D9D9D9",
        ACCENTBL: "#000000",
      },
    },
  },
  plugins: [],
};
