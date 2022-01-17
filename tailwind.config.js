module.exports = {
  purge: ["./**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#FF6263",
      },
      fontFamily: {
        body: ["Open Sans"],
      },
      backgroundColor: {
        primary: "#FF6263",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
