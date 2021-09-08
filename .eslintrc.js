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
    // Makes logger function available everywhere. Else eslint will complaint of undef-var.
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
  plugins: ["react", "prettier", "import", "react-hooks", "promise"],
  rules: {
    // auto-fixable: Respect all Prettier rules and apply it.
    "prettier/prettier": "error",
    // auto-fixable: Indent by 2 spaces. Same as editorconfig and Rubocop config.
    indent: ["error", 2, { SwitchCase: 1 }],
    // not-auto-fixable: No unused variables allowed.
    "no-unused-vars": "error",
    // not-auto-fixable: No undefined variables allowed.
    "no-undef": "error",
    // not-auto-fixable: Dont use console statements. Use logger which babel will remove during bundling.
    "no-console": "error",
    // not-auto-fixable: require `return` statements to either always or never specify values.
    "consistent-return": "error",
    // auto-fixable: require or disallow padding lines between statements. Helps maintain blank space after guard clauses etc.
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "var", next: "return" }
    ],
    // not-auto-fixable: ensure people use async/await promising chaining rather than using "then-catch-finally" statements
    "promise/prefer-await-to-then": "error",
    // auto-fixable: avoid calling "new" on a Promise static method like reject, resolve etc
    "promise/no-new-statics": "error",
    // not-auto-fixable: Prevent missing props validation in a React component definition.
    "react/prop-types": "off",
    // not-auto-fixable: Detect unescaped HTML entities, which might represent malformed tags.
    "react/no-unescaped-entities": "off",
    // not-auto-fixable: Prevent missing displayName in a React component definition. Useful when using React extensions in browser and checking for component name.
    "react/display-name": "error",
    // not-auto-fixable: Reports when this.state is accessed within setState.
    "react/no-access-state-in-setstate": "error",
    // not-auto-fixable: Prevent usage of dangerous JSX props.
    "react/no-danger": "error",
    // not-auto-fixable: Report when a DOM element is using both children and dangerouslySetInnerHTML.
    "react/no-danger-with-children": "error",
    // not-auto-fixable: Prevent definitions of unused prop types.
    "react/no-unused-prop-types": "error",
    // not-auto-fixable: Report missing key props in iterators/collection literals. Important rule!
    "react/jsx-key": "error",
    // not-auto-fixable: Enforce no duplicate props.
    "react/jsx-no-duplicate-props": "error",
    // not-auto-fixable: Disallow undeclared variables in JSX.
    "react/jsx-no-undef": "error",
    // not-auto-fixable: Enforce PascalCase for user-defined JSX components.
    "react/jsx-pascal-case": ["error", { allowNamespace: true }],
    // not-auto-fixable: Prevent variables used in JSX to be marked as unused.
    "react/jsx-uses-vars": "error",
    // not-auto-fixable: Ensures https://reactjs.org/docs/hooks-rules.html.
    "react-hooks/rules-of-hooks": "error",
    // not-auto-fixable: Ensures https://reactjs.org/docs/hooks-rules.html - Checks effect dependencies.
    "react-hooks/exhaustive-deps": "off",
    // not-auto-fixable: Prefer a default export if module exports a single name.
    "import/prefer-default-export": "off",
    // not-auto-fixable: Forbid a module from importing a module with a dependency path back to itself.
    "import/no-cycle": ["error", { maxDepth: 1, ignoreExternal: true }],
    // not-auto-fixable: Prevent unnecessary path segments in import and require statements.
    "import/no-useless-path-segments": ["error", { noUselessIndex: true }],
    // not-auto-fixable: Report any invalid exports, i.e. re-export of the same name.
    "import/export": "error",
    // not-auto-fixable: Forbid the use of mutable exports with var or let.
    "import/no-mutable-exports": "error",
    // not-auto-fixable: Ensure all imports appear before other statements.
    "import/first": "error",
    // not-auto-fixable: Ensure all exports appear after other statements.
    "import/exports-last": "error",
    // auto-fixable: Enforce a newline after import statements.
    "import/newline-after-import": ["error", { count: 1 }],
    // auto-fixable: Enforce a convention in module import order - we enforce https://www.bigbinary.com/react-best-practices/sort-import-statements
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
        /*
         * These are the paths defined in our alias.js file.
         * Thus when making change in alias.js, ensure that
         * change is reflected over here. All aliases should be
         * marked as "internal" group.
         * TODO: find a dynamic way to fetch this content
         * from the alias.js itself.
         * TODO: Also check the possiblity of using "@/" prefix
         * to import aliases. This way we can mark all "@/" pattern
         * as "internal" group.
         */
        pathGroups: [
          { pattern: "apis/**", group: "internal" },
          { pattern: "common/**", group: "internal" },
          { pattern: "components/**", group: "internal" },
          { pattern: "constants/**", group: "internal" },
          { pattern: "contexts/**", group: "internal" },
          { pattern: "reducers/**", group: "internal" },
          { pattern: "neetoui/**", group: "external" },
          // react imports should be at the top.
          { pattern: "react+(-native|)", group: "external", position: "before" }
        ],
        // Ignore react imports so that they're always ordered to the top of the file.
        pathGroupsExcludedImportTypes: ["react", "react-native"]
      }
    ]
  },
  // Currently we are using this section for excluding certain files from certain rules.
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
