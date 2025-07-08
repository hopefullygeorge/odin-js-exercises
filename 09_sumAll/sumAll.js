const sumAll = function (int1, int2) {
  let sum = 0;
  if (
    Number.isInteger(int1) &&
    Number.isInteger(int2) &&
    int1 > 0 &&
    int2 > 0
  ) {
    let lowNumber = Math.min(...arguments);
    const hightNumber = Math.max(...arguments);

    for (; lowNumber <= hightNumber; lowNumber++) {
      sum += lowNumber;
    }
    return sum;
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = sumAll;
