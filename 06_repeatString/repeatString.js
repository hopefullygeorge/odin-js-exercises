const repeatString = function (string, num) {
  let repeatedWord = "";
  if (num >= 0) {
    for (let i = 0; i < num; i++) {
      repeatedWord += string;
    }
    return repeatedWord;
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = repeatString;
