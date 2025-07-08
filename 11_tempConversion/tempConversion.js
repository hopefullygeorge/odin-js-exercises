const convertToCelsius = function (temp) {
  // (32°F − 32) × 5/9 = 0°C

  const faren = (temp - 32) * (5 / 9);
  return parseFloat(faren.toFixed(1));
};

const convertToFahrenheit = function (temp) {
  // (0°C × 9/5) + 32 = 32°F

  const cels = temp * (9 / 5) + 32;
  return parseFloat(cels.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
