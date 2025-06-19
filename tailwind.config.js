const {nextui} = require('@nextui-org/theme');
// tailwind.config.js
const {heroui} = require("@heroui/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@nextui-org/theme/dist/components/(card|ripple).js",
    "./node_modules/@heroui/theme/dist/components/(button|card|ripple|spinner).js"
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [heroui(),nextui()],
};