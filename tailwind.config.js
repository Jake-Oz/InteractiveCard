/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      desktop: "375px",
      largeScreen: "1440px",
    },
    extend: {
      colors: {
        lightGrayishViolet: "hsl(270, 3%, 87%)",
        darkGrayishViolet: "hsl(279, 6%, 55%)",
        veryDarkViolet: "hsl(278, 68%, 11%)",
        errors: "hsl(0, 100%, 66%)",
        gradient1: "hsl(249, 99%, 64%)",
        gradient2: "hsl(278, 94%, 30%)",
        red: "hsl(0, 100%, 66%)",
      },
      backgroundImage: {
        leftPanel: "url('/bg-main-desktop.png')",
        mobile: "url('/bg-main-mobile.png')",
      },
    },
  },
  plugins: [],
};
