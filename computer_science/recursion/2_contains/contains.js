const contains = function (obj, str) {
  const val = Object.values(obj);
  if (val.includes(str)) return true;
  const nestedObjects = val.filter(
    (value) => typeof value === "object" && value !== null,
  );

  return nestedObjects.some((nestedObject) => contains(nestedObject, str));
};

// Do not edit below this line
module.exports = contains;
