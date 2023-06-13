/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        timberwolf: "#D3D3D4",
        jet: "#2D2E2E",
        "eerie-black": "#1F1F1F",
        "battleship-gray": "#8F8E8D",
      },
      fontFamily: {
        sans: ["var(--font-raleway)"],
        mono: ["var(--font-roboto)"],
      },
    },
  },
  plugins: [],
};

