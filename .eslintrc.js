module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "amd": true
  },
  "extends": ["eslint:recommended", "plugin:react/recommended", "prettier"],
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "parser": "babel-eslint",
  "plugins": [
    "react"
  ],
  "rules": {
    "semi": ["error", "always"],
    "no-console": "error"
  }
};
