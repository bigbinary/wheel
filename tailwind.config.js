module.exports = {
  important: true,
  purge: {
    enabled: process.env.NODE_ENV === "production" ? true : false,
    content: [
      "./app/javascript/**/*.js",
      "./app/javascript/**/**/*.js",
      "./app/javascript/**/**/**/*.js",
      "./app/javascript/**/*.jsx",
      "./app/javascript/**/**/*.jsx",
      "./app/javascript/**/**/**/*.jsx",
      "./app/views/**/**/*.slim",
      "./app/views/**/**/*/*.slim",
      "./node_modules/@bigbinary/neetoui/**/*",
    ],
    defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
  },
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
    },
  },
  variants: {
    borderWidth: ["last"],
  },
};
