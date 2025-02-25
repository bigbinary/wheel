const postCssConfig = require("./postcss.config");

const port = process.env.DEVSERVER_PORT || 8000;

const config = {
  assetsInclude: ["**/*.yaml"],
  css: { postcss: postCssConfig },
  server: { port, origin: `http://localhost:${port}` },
  build: {
    manifest: true,
    sourcemap: true,
    cssCodeSplit: false,
  },
  root: "app/javascript/packs",
};

module.exports = { config };
