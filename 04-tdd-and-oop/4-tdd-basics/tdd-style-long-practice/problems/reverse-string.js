module.exports = function reverseString(string) {
  if (typeof string === "string") {
    return string.split("").reverse().join("");
  } else {
    throw new TypeError(`${string} is not a string`);
  }
};
