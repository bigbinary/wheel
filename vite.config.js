import { mergeDeepRight } from "ramda";

const resolveConfig = require("./config/build/resolve");
const postCssConfig = require("./postcss.config");

const port = process.env.DEVSERVER_PORT || 8000;

const baseConfig = {
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
    alias: {},
  },
};

const viteConfig = mergeDeepRight(baseConfig, {
  resolve: {
    alias: resolveConfig.alias,
    extensions: resolveConfig.extensions,
  },
});

module.exports = viteConfig;
