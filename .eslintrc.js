module.exports = {
  env: {
    // window object etc part of browser are made available globally.
    browser: true,
    es6: true,
    commonjs: true,
    node: true
  },
  /*
   * The order of extending each plugin matters a LOT!!
   * Thus don't change order of items in this array
   * unless you're sure of it.
   */
  extends: [
    "plugin:cypress/recommended",
    "plugin:json/recommended",
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier",
    "./.eslint-rules/globals",
    "./.eslint-rules/imports/order",
    "./.eslint-rules/overrides",
    // ensure that you don't add custom rules
    // without taking permission from team leads.
    "./.eslint-rules/custom",
    // custom rules cannot override the following rules.
    "./.eslint-rules/imports/enforced",
    "./.eslint-rules/react",
    "./.eslint-rules/promise"
  ],
  settings: {
    react: {
      version: "detect"
    }
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  // babel-eslint is deprecated now. This is the latest package.
  parser: "@babel/eslint-parser",
  plugins: ["react", "prettier", "import", "react-hooks", "promise", "jam3"],
  rules: {
    // auto-fixable: Respect all Prettier rules and apply it.
    "prettier/prettier": "error",
    // not-auto-fixable: No unused variables allowed.
    "no-unused-vars": "error",
    // not-auto-fixable: No undefined variables allowed.
    "no-undef": "error",
    // not-auto-fixable: Dont use console statements. Use logger which babel will remove during bundling.
    "no-console": "error",
    // not-auto-fixable: require `return` statements to either always or never specify values.
    "consistent-return": "error",
    // auto-fixable: sadly this doesn't support guard clauses yet.
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "if", next: ["if", "return"] }
    ],
    // auto-fixable: Single line statements needn't have any braces. But in all other cases enforce curly braces.
    curly: ["error", "multi-line"],
    // auto-fixable: Remove the else part, if the "if" or "else-if" chain has a return statement
    "no-else-return": "error",
    // not-auto-fixable: Prevent un-sanitized dangerouslySetInnerHTML.
    "jam3/no-sanitizer-with-danger": [
      2,
      {
        wrapperName: ["dompurify", "sanitizer", "sanitize"]
      }
    ]
  }
};
