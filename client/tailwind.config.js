module.exports = {
  purge: [],
  plugins: [
    require("@tailwindcss/forms"),
    // ...
  ],
  theme: {
    extend: {
      colors: {
        "dark-cyan-blue": "#2d3e50",
      },
      listStyleType: {
        square: "square",
      },
    },
  },
};
