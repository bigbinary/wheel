/*
  Customize default webpack rules/loaders configuration.
  A custom helpers till shakapacker introduces the feature.
  Track the following the issues to get the status of feature development in shakapacker:
  https://github.com/shakacode/shakapacker/issues/80
  https://github.com/shakacode/shakapacker/issues/87
  Usauge:
    const customizeWebpackDefaultRules = require("./helpers/customize-default-rules");
    const defaultRules = {
      "asset/resource": {
        test: /\.(bmp|gif|jpe?g|png|tiff|ico|avif|webp|eot|otf|ttf|woff|woff2)$/
      },
      "asset/source": {
        exclude: /\.(js|mjs|jsx|ts|tsx|js)$/,
      },
    };
    const customWebpackConfig = customizeWebpackDefaultRules(webpackConfig, defaultRules);
  NOTE:
    - Check if the option to optout deafult configuration is introduced or not before upgrading further.
    - Update the defaultRuleType constant whenever shakapacker introduces a new default rule/loader.
*/
const {
  filterBy,
  findIndexBy,
} = require("@bigbinary/neeto-commons-frontend/pure");

const modifyDefaultRulesConfig = (webpackConfig, rules = {}) => {
  const defaultRuleType = ["asset/resource", "asset/source"];

  Object.keys(rules).forEach(ruleName => {
    if (defaultRuleType.includes(ruleName)) {
      const rule = filterBy(
        { type: "asset/resource" },
        webpackConfig.module.rules
      )[0];

      const rulePosition = findIndexBy(
        { type: ruleName },
        webpackConfig.module.rules
      );

      Object.keys(rules[ruleName]).forEach(attribute => {
        if (rule[attribute] !== undefined) {
          rule[attribute] = rules[ruleName][attribute];
        }
      });

      webpackConfig.module.rules[rulePosition] = rule;
    } else {
      throw new Error("Invalid default rule type");
    }
  });

  return webpackConfig;
};

module.exports = modifyDefaultRulesConfig;
