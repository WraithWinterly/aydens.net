/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#061728",
        primaryPurple: "#260022",
        bgPurple: "#260022",
        bgBlue: "#061728",
        accent: "#56E2D6",
      },
    },
  },
  plugins: [
    require("prettier-plugin-tailwindcss"),
    require("tailwindcss-animate"),
  ],
};
