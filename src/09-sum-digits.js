/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let numb = n
  let string = numb + '';
  for (let k = 0; k < string.length; k++) {
  string = numb + '';
    if (string.length != 1) {
      numb = 0;
      let arr = string.split('')
      for (let i = 0; i < arr.length; i++) {
        let k = +arr[i];
        numb += k;
      }
    }
  }return numb
}

module.exports = getSumOfDigits;
