const setToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getFromLocalStorage = key => {
  let storedValue = null;
  try {
    storedValue = JSON.parse(localStorage.getItem(key));
  } catch (error) {
    logger.error(error);
    localStorage.setItem(key, JSON.stringify(null));
  }
  return storedValue;
};

export { setToLocalStorage, getFromLocalStorage };
