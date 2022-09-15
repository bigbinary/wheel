const { environment } = require("@rails/webpacker");

const customAliasConfig = require("./alias");

environment.config.merge(customAliasConfig);

const babelLoader = environment.loaders.get("babel");
babelLoader.exclude = [/\.(d.ts)$/i];

environment.loaders.insert(
  "ignore",
  {
    test: /\.(d.ts)$/,
    use: babelLoader.use.concat([
      {
        loader: "ignore-loader",
      },
    ]),
  },
  { before: "file" }
);

module.exports = environment;
