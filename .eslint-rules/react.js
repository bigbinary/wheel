module.exports = {
  rules: {
    // not-auto-fixable: Prevent missing props validation in a React component definition.
    "react/prop-types": "off",
    // not-auto-fixable: Detect unescaped HTML entities, which might represent malformed tags.
    "react/no-unescaped-entities": "off",
    // not-auto-fixable: Prevent missing displayName in a React component definition. Useful when using React extensions in browser and checking for component name.
    "react/display-name": "error",
    // not-auto-fixable: Reports when this.state is accessed within setState.
    "react/no-access-state-in-setstate": "error",
    // not-auto-fixable: Prevent usage of dangerous JSX props. Currently jam3 plugin will take care of handling this.
    "react/no-danger": "off",
    // not-auto-fixable: Report when a DOM element is using both children and dangerouslySetInnerHTML.
    "react/no-danger-with-children": "warn",
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
    "react-hooks/exhaustive-deps": "off"
  }
};
