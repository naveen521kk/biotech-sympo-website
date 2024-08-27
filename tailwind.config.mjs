/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Jersey 10"', "sans-serif"],
      },
      fontSize: {
        // lg should be 2rem - arrange the rest of the sizes accordingly
        base: "1.5rem",
        lg: "2rem",
        xl: "2.25rem",
        "2xl": "2.5rem",
        "3xl": "2.75rem",
        "4xl": "3rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
