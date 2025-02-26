const path = require("path");

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
  resolve: {
    alias: {
      contexts: path.resolve(__dirname, "./app/javascript/src/contexts"),
      components: path.resolve(__dirname, "./app/javascript/src/components"),
      reducers: path.resolve(__dirname, "./app/javascript/src/reducers"),
      common: path.resolve(__dirname, "./app/javascript/src/common"),
      apis: path.resolve(__dirname, "./app/javascript/src/apis"),
      utils: path.resolve(__dirname, "./app/javascript/src/utils"),
      neetoui: "@bigbinary/neetoui",
      neetoicons: "@bigbinary/neeto-icons",
    },
  },
};

module.exports = config;
