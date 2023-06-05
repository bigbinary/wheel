const { curry, isNil } = require("ramda");

const matchesImpl = (pattern, object, __parent = object) => {
  if (object === pattern) return true;

  if (typeof pattern === "function" && pattern(object, __parent)) return true;

  if (isNil(pattern) || isNil(object)) return false;

  if (typeof pattern !== "object") return false;

  return Object.entries(pattern).every(([key, value]) =>
    matchesImpl(value, object[key], __parent)
  );
};

const matches = curry((pattern, object) => matchesImpl(pattern, object));

const findBy = curry((pattern, array) => array.find(matches(pattern)));

const findIndexBy = curry((pattern, array) =>
  array.findIndex(matches(pattern))
);

module.exports = { findBy, findIndexBy };
