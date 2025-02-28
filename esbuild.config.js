import { createRequire } from "module";
import path from "path";
import { build } from "esbuild";
import { nodeModulesPolyfillPlugin } from "esbuild-plugins-node-modules-polyfill";
import { sassPlugin } from "esbuild-sass-plugin";
import postcss from "postcss";
import { mergeDeepLeft } from "ramda";
import sass from "sass";

const require = createRequire(import.meta.url);
const projectConfigurations = require("./config/build/config.js");
const postCssConfig = require("./postcss.config.js");
const { alias, define, extensions } = projectConfigurations;

const isWatchMode = process.argv.includes("--watch");

const { extensions: _, ...projectConfigWithoutExtensions } =
  projectConfigurations;

const defaultConfigurations = {
  bundle: true,
  format: "esm",
  platform: "browser",
  mainFields: ["browser", "module", "main"],
  resolveExtensions: extensions,
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
      importMapper: filePath =>
        filePath.replace("@bigbinary/neetoui", "@bigbinary/neetoui/dist"),
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
  define,
};

build(mergeDeepLeft(projectConfigWithoutExtensions, defaultConfigurations));
