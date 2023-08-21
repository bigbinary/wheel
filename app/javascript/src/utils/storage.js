import { isPresent } from "utils";

const setToLocalStorage = (key, value) => {
  if (value !== null) {
    localStorage.setItem(key, JSON.stringify(value));
  } else localStorage.removeItem(key);
};

const getFromLocalStorage = key => {
  let response = null;
  try {
    const value = localStorage.getItem(key);
    response = isPresent(value) ? JSON.parse(value) : null;
  } catch (error) {
    logger.error(error);
  }

  return response;
};

const clearLocalStorageCredentials = () => {
  setToLocalStorage("authEmail", null);
  setToLocalStorage("authToken", null);
};

export { setToLocalStorage, getFromLocalStorage, clearLocalStorageCredentials };
