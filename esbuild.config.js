import { createRequire } from "module";
import path from "path";

import { build } from "esbuild";
import { nodeModulesPolyfillPlugin } from "esbuild-plugins-node-modules-polyfill";
import rails from "esbuild-rails";
import { sassPlugin } from "esbuild-sass-plugin";
import postcss from "postcss";
import { mergeDeepLeft } from "ramda";
import * as sass from "sass";

import projectConfigurations from "./config/esbuild/config.js";
import postCssConfig from "./postcss.config.js";

const require = createRequire(import.meta.url);
const isWatchMode = process.argv.includes("--watch");

const { extensions, ...projectConfigWithoutExtensions } = projectConfigurations;

const alias = {
  images: path.resolve(process.cwd(), "app/assets/images"),
  crypto: require.resolve("crypto-browserify"),
  path: require.resolve("path-browserify"),
  buffer: require.resolve("buffer"),
  stream: require.resolve("stream-browserify"),
  http: require.resolve("stream-http"),
  https: require.resolve("https-browserify"),
  zlib: require.resolve("browserify-zlib"),
  url: require.resolve("url/"),
  assert: require.resolve("assert/"),
  util: require.resolve("util/"),
};

const defaultConfigurations = {
  bundle: true,
  format: "esm",
  platform: "browser",
  mainFields: ["browser", "module", "main"],
  outdir: path.join(process.cwd(), "app/assets/builds"),
  sourcemap: isWatchMode ? true : "external",
  loader: {
    ".png": "file",
    ".jpeg": "file",
    ".jpg": "file",
    ".svg": "file",
    ".ico": "file",
  },
  external: ["path", "os", "events"],
  plugins: [
    rails(),
    sassPlugin({
      transform: async source => {
        const { css } = await postcss(postCssConfig.plugins).process(source, {
          from: undefined,
        });

        return css;
      },
      importMapper: path =>
        path.replace("@bigbinary/neetoui", "@bigbinary/neetoui/dist"),
      logger: sass.Logger.silent,
    }),
    nodeModulesPolyfillPlugin({
      modules: {
        events: true,
        fs: true,
        process: true,
        buffer: true,
        stream: true,
        http: true,
        https: true,
        zlib: true,
        url: true,
        util: true,
        assert: true,
      },
    }),
  ],
  alias,
  define: {
    global: "window",
    process: "{}",
    Buffer: "{}",
    "process.env.RAILS_ENV": "'development'",
    "process.env.NODE_DEBUG": "'development'",
    "process.env": "{}",
    "import.meta.env.RAILS_ENV": "'development'",
  },
  jsx: "automatic",
  resolveExtensions: [".js", ".jsx", ".mjs", ".ts", ".tsx", ".json", ".svg"],
};

build(mergeDeepLeft(projectConfigWithoutExtensions, defaultConfigurations));
