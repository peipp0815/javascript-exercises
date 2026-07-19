const totalIntegers = function (array) {
  if (typeof array === "object") {
    let count = 0;
    function findInts(value) {
      if (typeof value === "object" && value !== null) {
        Object.values(value).forEach((element) => {
          findInts(element);
        });
      } else {
        if (Number.isInteger(value) === true) {
          count++;
        }
      }
    }
    findInts(array);
    return count;
  }
};
// Do not edit below this line
module.exports = totalIntegers;
