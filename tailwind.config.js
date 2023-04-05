/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Poppins",
    },
  },
  container: {
    padding: {
      // Default
      DEFAULT: "30px",
      lg: "0",
    },
  },
  screens: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1444px",
  },
  extend: {
    colors: {
      primary: "#2222222",
      secondary: "#F5E6E0",
    },

    background: {
      bgc: "rgb(0, 0, 97)",
    },
  },
  plugins: [],
};

// https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mh-1-4-outerwear-1641320113.png?crop=0.502xw:1.00xh;0.498xw,0&resize=640:*
