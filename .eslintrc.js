module.exports = {
  env: {
    browser: true,
    es6: true,
    amd: true
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
  plugins: ["react", "prettier"],
  rules: {
    "prettier/prettier": "error",
    indent: ["error", 2, { SwitchCase: 1 }],
    "no-console": "error",
    "import/prefer-default-export": "off",
    "react/prop-types": "off",
    "no-unused-vars": "off",
    "no-undef": "off",
    "react/no-unescaped-entities": "off"
  }
};
