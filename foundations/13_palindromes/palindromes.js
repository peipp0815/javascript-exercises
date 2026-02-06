const palindromes = function (string) {
  const forward = string
    .split("")
    .filter((char) => {
      return /[a-zA-Z0-9]/.test(char);
    })
    .join("")
    .toLowerCase();
  const backward = [...forward].reverse().join("");
  return forward === backward;
};

// Do not edit below this line
module.exports = palindromes;
