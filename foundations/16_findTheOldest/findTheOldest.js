const findTheOldest = function (arr) {
  return arr.toSorted((a, b) => {
    let aDeath = a.yearOfDeath;
    let bDeath = b.yearOfDeath;
    if (aDeath === undefined) {
      aDeath = new Date().getFullYear();
    }
    if (bDeath === undefined) {
      bDeath = new Date().getFullYear();
    }
    return bDeath - b.yearOfBirth - (aDeath - a.yearOfBirth);
  })[0];
};

// Do not edit below this line
module.exports = findTheOldest;
