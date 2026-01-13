const sumAll = function (sum1, sum2) {
  if (Number.isInteger(sum1) && Number.isInteger(sum2)) {
    if (sum1 < 0 || sum2 < 0) {
      return "ERROR";
    }

    if (sum2 < sum1) {
      const help = sum1;
      sum1 = sum2;
      sum2 = help;
    }

    let result = 0;
    for (let i = sum1; i <= sum2; i++) {
      result += i;
    }

    return result;
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = sumAll;
