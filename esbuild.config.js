import { createRequire } from "module";
import path from "path";

import { build } from "esbuild";
import { nodeModulesPolyfillPlugin } from "esbuild-plugins-node-modules-polyfill";
import { sassPlugin } from "esbuild-sass-plugin";
import postcss from "postcss";
import { mergeDeepLeft } from "ramda";
import sass from "sass";

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
  plugins: [
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
      },
    }),
  ],
  alias,
  define: {
    process: "{'env': {}}",
    "process.env.RAILS_ENV": "'development'",
    "process.env.NODE_DEBUG": "'development'",
    "process.env": "{}",
  },
};

build(mergeDeepLeft(projectConfigWithoutExtensions, defaultConfigurations));
