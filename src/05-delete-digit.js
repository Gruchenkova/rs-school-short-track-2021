/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const string = n.toString();
  const arr = [];
  for (let i = 0; i < string.length; i++) {
    for (let k = 0; k < string.length; k++) {
      if (i !== k) {
        const newString = string[i] + string[k];
        const numb = +newString;
        arr.push(numb);
      }
    }
  }
  arr.sort((a, b) => a - b);
  return arr[arr.length - 1];
}

module.exports = deleteDigit;
