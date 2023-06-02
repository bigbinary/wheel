const process = require("process");

const Dotenv = require("dotenv-webpack");
const { webpackConfig, merge } = require("shakapacker");
const webpack = require("webpack");

const customizeWebpackDefaultRules = require("./helpers/customize-default-rules");
const resolve = require("./resolve");
const rules = require("./rules");

const dotEnvFileSuffix =
  process.env.NODE_ENV === "production" ? "" : `.${process.env.NODE_ENV}`;

let devtool = "hidden-source-map",
  mode = "production";
if (process.env.RAILS_ENV === "test") {
  devtool = false;
  mode = "none";
} else if (process.env.RAILS_ENV === "development") {
  devtool = "eval-cheap-module-source-map";
  mode = "development";
}

const commonOptions = {
  mode,
  infrastructureLogging: { level: "warn" },
  devtool,
  resolve,
  module: { rules },
  plugins: [
    new webpack.ProvidePlugin({ process: "process/browser" }),
    new Dotenv({
      path: `./.env${dotEnvFileSuffix}`,
      systemvars: true,
      silent: true,
    }),
  ],
  ignoreWarnings: [/Failed to parse source map/],
};

// This rule is causing issues to react-svg-loader
const defaultRules = {
  "asset/resource": {
    test: /\.(bmp|gif|jpe?g|png|tiff|ico|avif|webp|eot|otf|ttf|woff|woff2)$/,
  },
};

const customWebpackConfig = customizeWebpackDefaultRules(
  webpackConfig,
  defaultRules
);

module.exports = merge(customWebpackConfig, commonOptions);
