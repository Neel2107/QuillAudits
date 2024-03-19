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
        'button-gradient': 'linear-gradient(266.04deg, #7184FD 20%, #3F7AF0 50%, #4F37EE 100%)',
      },
    },
  },
  plugins: [],
};
