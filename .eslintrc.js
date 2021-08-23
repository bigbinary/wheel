module.exports = {
  env: {
    browser: true,
    es6: true,
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
  plugins: ["react", "prettier", "import"],
  rules: {
    "prettier/prettier": "error",
    indent: ["error", 2, { SwitchCase: 1 }],
    "no-console": "error",
    "import/prefer-default-export": "off",
    "react/prop-types": "off",
    "no-unused-vars": "off",
    "no-undef": "off",
    "react/no-unescaped-entities": "off",
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
          "external",
          "internal",
          "index",
          "sibling",
          "parent",
          "builtin",
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
          { pattern: "neetoui/**", group: "external" }
        ],
        pathGroupsExcludedImportTypes: ["builtin"]
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
        "import/order": "off"
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
