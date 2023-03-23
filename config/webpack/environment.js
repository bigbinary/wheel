const process = require("process");

const Dotenv = require("dotenv-webpack");
const { webpackConfig, merge } = require("shakapacker");
const webpack = require("webpack");

const customizeWebpackDefaultRules = require("./helpers/customize-default-rules");
const resolve = require("./resolve");
const rules = require("./rules");

const commonOptions = {
  infrastructureLogging: {
    level: "warn",
  },
  resolve,
  module: {
    rules,
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
    new Dotenv({
      path: `./.env${
        process.env.NODE_ENV === "production" ? "" : `.${process.env.NODE_ENV}`
      }`,
      systemvars: true,
      silent: true,
    }),
  ],
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

const commonWebpackConfig = () => merge({}, customWebpackConfig, commonOptions);
module.exports = commonWebpackConfig;
