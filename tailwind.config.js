/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "15px",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1400px",
      },
    },
    extend: {
      fontFamily: {
        oswald: ["var(--font-oswald)"],
        roboto: ["var(--font-roboto)"],
      },
      backgroundImage: {
        hero: "url('/assets/gym-background.png')",
        membership: "url('/assets/membership.jpg')",
      },
      colors: {
        primary: {
          DEFAULT: "#333",
          100: "#484848",
          200: "#151515",
          300: "#111",
        },
        accent: "#d4000d",
      },
    },
  },
  plugins: [],
};
