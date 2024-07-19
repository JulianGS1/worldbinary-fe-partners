import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class", "[data-theme=dark]"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
    colors: {
      primary: {
        '50': '#f4f6fb',
        '100': '#e8ecf6',
        '200': '#ccd8eb',
        '300': '#9eb7db',
        '400': '#6a91c6',
        '500': '#4773b0',
        '600': '#365a93',
        '700': '#2c4978',
        '800': '#283f64',
        '900': '#263754',
        '950': '#111826',
    },
      dark: {
        100: "#202020",
        200: "#232323",
        300: "#292929",
        form: "#181818",
        900: "#121212",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
