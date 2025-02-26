import Logger from "js-logger";

export const initializeLogger = () => {
  /* eslint react-hooks/rules-of-hooks: "off" */
  Logger.useDefaults();
  if (import.meta.env.MODE === "production") {
    Logger.setLevel(Logger.OFF);
  }
};
