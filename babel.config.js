const VALID_ENVIRONMENTS = ["development", "test", "production"];

module.exports = function (api) {
  const currentEnv = api.env();
  const isDevelopmentEnv = api.env("development");
  const isProductionEnv = api.env("production");
  const isTestEnv = api.env("test");

  if (!VALID_ENVIRONMENTS.includes(currentEnv)) {
    throw new Error(
      "Please specify a valid `NODE_ENV` or `BABEL_ENV` environment variables. " +
        'Valid values are "development", "test", and "production". ' +
        `Instead, received: ${JSON.stringify(currentEnv)}.`
    );
  }

  return {
    presets: [
      isTestEnv
        ? [
            "@babel/preset-env",
            { targets: { node: "current" }, modules: "commonjs" },
          ]
        : [
            "@babel/preset-env",
            {
              forceAllTransforms: isProductionEnv,
              useBuiltIns: "entry",
              corejs: "3.27.0",
              modules: false,
            },
          ],
      ["@babel/preset-react", { development: isDevelopmentEnv || isTestEnv }],
    ].filter(Boolean),
    plugins: [
      "babel-plugin-macros",
      "js-logger",
      "@babel/plugin-transform-runtime",
      isTestEnv
        ? "babel-plugin-dynamic-import-node" // tests run in node environment
        : "@babel/plugin-syntax-dynamic-import",
      isProductionEnv && [
        "babel-plugin-transform-react-remove-prop-types",
        { removeImport: true },
      ],
    ].filter(Boolean),
  };
};
