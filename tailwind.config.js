/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        oasis: {
          navy: "#0D2A4A",
          navy2: "#0B213A",
          silver: "#C9CFD8",
          silverSoft: "#E6E9ED",
          accent: "#46C2A9"
        }
      },
      backgroundImage: {
        "oasis-radial": "radial-gradient(ellipse at top, #0D2A4A, #0B213A)"
      }
    },
  },
  plugins: [],
}
