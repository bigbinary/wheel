const fs = require("fs");

const { transformAsync, createConfigItem } = require("@babel/core");
const pluginTransformReactConstantElements = require("@babel/plugin-transform-react-constant-elements");
const presetEnv = require("@babel/preset-env");
const presetReact = require("@babel/preset-react");
const { createFilter } = require("@rollup/pluginutils");
const { transform } = require("@svgr/core");
const jsx = require("@svgr/plugin-jsx");
const svgo = require("@svgr/plugin-svgo");

const babelOptions = {
  babelrc: false,
  configFile: false,
  presets: [
    createConfigItem(presetReact, { type: "preset" }),
    createConfigItem([presetEnv, { modules: false }], { type: "preset" }),
  ],
  plugins: [createConfigItem(pluginTransformReactConstantElements)],
};

const plugin = (options = {}) => {
  const filter = createFilter(options.include || "**/*.svg", options.exclude);

  return {
    name: "svgr",

    async transform(_data, id) {
      if (!filter(id)) return null;

      if (id.slice(-4) !== ".svg") return null;

      const load = fs.readFileSync(id, "utf8");

      const jsCode = await transform(load, options, {
        filePath: id,
        caller: {
          name: "@svgr/rollup",
          previousExport: null, // Force default export
          defaultPlugins: [svgo, jsx],
        },
      });

      const result = await transformAsync(jsCode, babelOptions);
      if (!result?.code) {
        throw new Error("Error while transforming using Babel");
      }

      return { code: result.code, map: null };
    },
  };
};

module.exports = plugin;
