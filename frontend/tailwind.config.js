/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#047AF8",
        "primary-50": "#E6F2FF",
        "primary-100": "#CDE5FE",
        "primary-200": "#9BCAFD",
        "primary-300": "#68B0FD",
        "primary-400": "#3696FC",
        "primary-600": "#0363C9",
        "primary-700": "#024A97",
        "primary-800": "#023164",

        secondary: "#011932",
      },

      backgroundImage: {
        "btn-gradient": "linear-gradient(to left, #0E4DB6 0%, #062250 100%)",
      },

      fontFamily: {
        heading: ["Outfit", "sans-serif"],
        para: ["Urbanist", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         primary: "#885a43",

//         "primary-50": "#F7F1EE",
//         "primary-100": "#EEE3DD",
//         "primary-200": "#DDC6BB",
//         "primary-300": "#CDAA98",
//         "primary-400": "#BC8D76",
//         "primary-600": "#895A43",
//         "primary-700": "#674432",
//         "primary-800": "#442D22",

//         secondary: "#F8F7F1",
//       },

//       backgroundImage: {
//         "btn-gradient": "linear-gradient(270deg, #062250 0%, #0E4DB6 100%)",
//       },

//       fontFamily: {
//         heading: ["Outfit", "sans-serif"],
//         para: ["Urbanist", "sans-serif"],
//       },
//     },
//   },
//   plugins: [],
// };
