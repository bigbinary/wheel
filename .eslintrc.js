module.exports = {
  env: {
    browser: true,
    es6: true,
    commonjs: true,
    node: true
  },
  extends: [
    "plugin:json/recommended",
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier"
  ],
  settings: {
    react: {
      version: "detect"
    }
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    logger: true,
    module: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  parser: "babel-eslint",
  plugins: ["react", "prettier", "import", "react-hooks"],
  rules: {
    "prettier/prettier": "error",
    indent: ["error", 2, { SwitchCase: 1 }],
    "no-unused-vars": "error",
    "no-undef": "error",
    "no-console": "error",
    "consistent-return": "error",
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "var", next: "return" }
    ],
    "react/prop-types": "off",
    "react/no-unescaped-entities": "off",
    "react/display-name": "error",
    "react/no-access-state-in-setstate": "error",
    "react/no-danger": "error",
    "react/no-danger-with-children": "error",
    "react/no-unused-prop-types": "error",
    "react/sort-prop-types": [
      "error",
      {
        callbacksLast: true,
        requiredFirst: true,
        sortShapeProp: true
      }
    ],
    "react/jsx-key": "error",
    "react/jsx-no-duplicate-props": "error",
    "react/jsx-no-undef": "error",
    "react/jsx-no-useless-fragment": ["error", { allowExpressions: true }],
    "react/jsx-pascal-case": ["error", { allowNamespace: true }],
    "react/jsx-uses-vars": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "off",
    "import/prefer-default-export": "off",
    "import/no-cycle": ["error", { maxDepth: 1, ignoreExternal: true }],
    "import/no-useless-path-segments": ["error", { noUselessIndex: true }],
    "import/export": "error",
    "import/no-mutable-exports": "error",
    "import/first": "error",
    "import/exports-last": "error",
    "import/newline-after-import": ["error", { count: 1 }],
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
          "type"
        ],
        pathGroups: [
          { pattern: "apis/**", group: "internal" },
          { pattern: "common/**", group: "internal" },
          { pattern: "components/**", group: "internal" },
          { pattern: "constants/**", group: "internal" },
          { pattern: "contexts/**", group: "internal" },
          { pattern: "reducers/**", group: "internal" },
          { pattern: "neetoui/**", group: "external" },
          { pattern: "react+(-native|)", group: "external", position: "before" }
        ],
        pathGroupsExcludedImportTypes: ["react", "react-native"]
      }
    ]
  },
  overrides: [
    {
      files: [
        ".eslintrc.js",
        ".prettierrc.js",
        "app/assets/**/*.{js,jsx}",
        "app/javascript/packs/**/*.{js,jsx}",
        "*.json"
      ],
      rules: {
        "import/order": "off",
        "react-hooks/rules-of-hooks": "off"
      }
    },
    {
      files: ["app/javascript/packs/**/*.{js,jsx}"],
      rules: {
        "no-redeclare": "off"
      }
    }
  ]
};
