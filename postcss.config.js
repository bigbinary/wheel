const replaceColorAdjust = () => {
  return {
    postcssPlugin: "postcss-replace-color-adjust",
    Declaration(decl) {
      if (decl.prop === "color-adjust") {
        decl.prop = "print-color-adjust";
      }
    },
  };
};
replaceColorAdjust.postcss = true;

module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss")("./tailwind.config.js"),
    replaceColorAdjust,
    require("postcss-flexbugs-fixes"),
    require("postcss-preset-env")({
      autoprefixer: {
        flexbox: "no-2009",
      },
      stage: 3,
    }),
    require("autoprefixer"),
  ],
};
