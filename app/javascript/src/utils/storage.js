const setToLocalStorage = (key, value) => {
  if (value !== null) {
    localStorage.setItem(key, JSON.stringify(value));
  } else localStorage.removeItem(key);
};

const getFromLocalStorage = key => JSON.parse(localStorage.getItem(key));

const clearLocalStorageCredentials = () => {
  setToLocalStorage("authEmail", null);
  setToLocalStorage("authToken", null);
};

export { setToLocalStorage, getFromLocalStorage, clearLocalStorageCredentials };
