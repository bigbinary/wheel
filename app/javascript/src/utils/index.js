const isEmpty = obj => {
  // eslint-disable-next-line eqeqeq
  if (obj == null) return true;

  if (typeof obj === "number") return false;

  if (typeof obj === "string" || obj instanceof String) return obj === "";

  if (Array.isArray(obj)) return obj?.length === 0 || false;

  if (typeof obj === "object") {
    const isKeyValuePairEmpty = true;
    for (const _ in obj) return !isKeyValuePairEmpty;
    return isKeyValuePairEmpty;
  }

  return !!obj;
};

export const isPresent = obj => !isEmpty(obj);
