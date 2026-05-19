/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // ColorHunt palette (https://colorhunt.co/palette/9ab17ac3cc9be4dfb5fbe8ce)
        // Naming is just for convenience.
        kh: {
          deep: "#9AB17A",
          leaf: "#C3CC9B",
          sand: "#E4DFB5",
          bone: "#FBE8CE",
        },
      },
    },
  },
  plugins: [],
};

