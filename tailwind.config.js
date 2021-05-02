module.exports = {
  important: true,
  purge: [
    "./app/javascript/**/*.js",
    "./app/javascript/**/**/*.js",
    "./app/javascript/**/**/*/*.js",
    "./app/javascript/**/*.js",
    "./app/views/**/**/*.slim",
    "./app/views/**/**/*/*.slim",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          50: "#F6F8FD",
          100: "#EEF0FB",
          200: "#D4DAF4",
          300: "#BBC3EE",
          400: "#8796E1",
          500: "#5469D4",
          600: "#4C5FBF",
          700: "#323F7F",
          800: "#262F5F",
          900: "#192040",
        },
      },
    }
  },
  variants: {}
};
