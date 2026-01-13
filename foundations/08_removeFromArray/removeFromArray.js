const removeFromArray = function (arr, ...toRemove) {
  for (let i = 0; i < toRemove.length; i++) {
    const toRemoveArrayIndex = arr.indexOf(toRemove[i]);
    if (toRemoveArrayIndex !== -1) {
      arr.splice(toRemoveArrayIndex, 1);
      i--;
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
