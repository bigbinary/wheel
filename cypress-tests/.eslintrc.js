// DO NOT ADD ANY OTHER RULES TO THIS FILE WITHOUT
// CONSULTING WITH THE WHEEL TEAM.

const { buildPathGroupsBasedOnWebpackAliases } = require(__dirname +
  "/../.eslint-rules/helpers");
const pathGroups = buildPathGroupsBasedOnWebpackAliases({
  customJSRoot: "cypress-tests/",
  customAliasPath: "cypress-tests/cypress/webpack.config.js",
});

const pathGroupForKeepingReactImportsAtTop = {
  pattern: "react+(-native|)",
  group: "external",
  position: "before",
};

pathGroups.push(pathGroupForKeepingReactImportsAtTop);

module.exports = {
  root: true,
  extends: ["../.eslintrc"],
  rules: {
    // disable async/await for cypress given that cypress doesn't allow async/await syntax
    // https://docs.cypress.io/faq/questions/using-cypress-faq#Can-I-use-the-new-ES7-async-await-syntax
    "promise/prefer-await-to-then": "off",
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        alphabetize: { order: "asc", caseInsensitive: true },
        warnOnUnassignedImports: true,
        groups: [
          "builtin",
          "external",
          "internal",
          "index",
          "sibling",
          "parent",
          "object",
          "type",
        ],
        /*
         * Currently we check for existence of webpack alias
         * config and then iterate over the aliases and create
         * these pathGroups. Only caveat with this mechanism
         * is that in VSCode eslint plugin won't dynamically
         * read it. But eslint cli would!
         */
        pathGroups,
        // Ignore react imports so that they're always ordered to the top of the file.
        pathGroupsExcludedImportTypes: ["react", "react-native"],
      },
    ],
  },
};
