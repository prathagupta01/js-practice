const convertToCelsius = function(tempre) {
  let celsius = (tempre - 32) * (5 / 9);
  return Number(celsius.toFixed(1))
};
//If celsius = 36.666..., then Math.round(36.666... * 10) = Math.round(366.66...) = 367, and 367 / 10 = 36.7.
const convertToFahrenheit = function(tempre) {
  let fahrenheit = (tempre * (9 / 5)) + 32;
  return Number(fahrenheit.toFixed(1))
};
// ------------------------------- Alternative solution ----------------------------
// const convertToCelsius = function(fahrenheit) {
//   return Math.round((fahrenheit - 32) * (5 / 9) * 10) / 10;
// }; 
// const convertToFahrenheit = function(celsius) {
//   return Math.round(((celsius * 9) / 5 + 32) * 10) / 10;
// };

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
