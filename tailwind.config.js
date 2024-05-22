/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "hsl(0,0,46%)",
        title: "hsl(0,0,20%)",
        "title-dark": "hsl(0,0,0)",
        body: "hsl(0, 0, 98%)",
      },
    },
  },
  plugins: [],
};
