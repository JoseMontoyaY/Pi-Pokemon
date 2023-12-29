// validation.js

const isString = (value) => typeof value === "string";

const isValidLength = (value, min, max) =>
  value.length >= min && value.length <= max;

const hasValidCharacters = (value) => /^[a-zA-Z0-9 ]*$/.test(value);

const isNumber = (value) => !isNaN(value) && typeof Number(value) === "number";

const isInRange = (value, min, max) => value >= min && value <= max;

const validateName = (name) => {
  if (!isString(name)) {
    return "Name must be a string";
  }
  if (!isValidLength(name, 3, 15)) {
    return "Name must be between 3 and 15 characters";
  }
  if (!hasValidCharacters(name)) {
    return "Name must not contain special characters";
  }
  return null;
};

const validateStat = (stat, statName) => {
  if (!isNumber(stat)) {
    return `${statName} must be a number`;
  }
  if (!isInRange(stat, 1, 999)) {
    return `${statName} must be between 1 and 999`;
  }
  return null;
};

export { validateName, validateStat };
