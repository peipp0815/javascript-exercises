const fibonacci = function (a) {
  a = parseInt(a);
  if (a < 0) {
    return "OOPS";
  }
  let currentValue = 1;
  let prevValue = 0;
  let result = 1;
  if (a === 0) {
    result = 0;
  }
  while (a > 1) {
    result = prevValue + currentValue;
    prevValue = currentValue;
    currentValue = result;
    a--;
  }
  return result;
};

// Do not edit below this line
module.exports = fibonacci;
