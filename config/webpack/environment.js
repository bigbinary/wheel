const { environment } = require("@rails/webpacker");

const customAliasConfig = require("./alias");
environment.config.merge(customAliasConfig);

module.exports = environment;
