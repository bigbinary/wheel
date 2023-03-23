const { existsSync } = require("fs");
const { resolve } = require("path");

const { env } = require("shakapacker");

const envSpecificConfig = () => {
  const path = resolve(__dirname, `${env.nodeEnv}.js`);
  if (existsSync(path)) {
    return require(path);
  }

  // Probably an error if the file for the NODE_ENV does not exist
  throw new Error(`Got Error with NODE_ENV = ${env.nodeEnv}`);
};

// See the shakacode/shakapacker README and docs directory for advice on customizing your webpackConfig.
const webpackConfiguration = envSpecificConfig();

module.exports = webpackConfiguration;
