/**
 * @param {number} min
 * @param {number} max
 * @returns {number}
*/
function randomIntegerFromRange(min, max) { 
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * @param {number} oldMin
 * @param {number} oldMax
 * @param {number} newMin
 * @param {number} newMax
 * @param {number} value
 * @returns {number}
*/
function proportionalRange(
  oldMin, oldMax,
  newMin, newMax,
  value
) {
  return ((newMax - newMin) / (oldMax - oldMin)) * (value - oldMin) + newMin;
}

/**
 * - returns a string of the number with zeroes before it
 * @param {number} number
 * @param {number} size
 * @returns {string}
*/
function paddedNumber(number, size) {
  number = number.toString();
  while(number.length < size) {
    number = '0' + number;
  }
  return number;
}