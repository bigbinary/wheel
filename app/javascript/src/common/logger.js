import Logger from "js-logger";

export const initializeLogger = () => {
  /* eslint react-hooks/rules-of-hooks: "off" */
  Logger.useDefaults();
  if (import.meta.env.RAILS_ENV === "production") {
    Logger.setLevel(Logger.OFF);
  }
};
