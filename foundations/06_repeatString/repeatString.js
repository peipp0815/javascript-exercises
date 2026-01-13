const repeatString = function (str, num) {
  let repeatString = "";
  if (num < 0) {
    return "ERROR";
  } else {
    for (let i = 1; i <= num; i++) {
      repeatString += str;
    }
  }
  return repeatString;
};

// Do not edit below this line
module.exports = repeatString;
