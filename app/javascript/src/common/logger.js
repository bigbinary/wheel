export const initializeLogger = () => {
  /* eslint react-hooks/rules-of-hooks: "off" */
  const Logger = require("js-logger");
  Logger.useDefaults();
  if (process.env.RAILS_ENV === "production") {
    Logger.setLevel(Logger.OFF);
  }
};
