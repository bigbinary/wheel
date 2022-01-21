const setToLocalStorage = (key, value) => {
  if (value !== null) {
    localStorage.setItem(key, JSON.stringify(value));
  } else localStorage.removeItem(key);
};

const getFromLocalStorage = key => JSON.parse(localStorage.getItem(key));

export { setToLocalStorage, getFromLocalStorage };
