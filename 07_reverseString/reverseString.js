const reverseString = function (string) {
  let reverse = [];
  for (char of string) {
    reverse.push(char);
  }
  return reverse.reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
