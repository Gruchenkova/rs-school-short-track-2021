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
  const string = String(n);
  const arr = string.split('');
  const numberArr = [];
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    numberArr.push(+arr[i]);
  }
  numberArr.reverse();
  for (let k = 0; k < numberArr.length; k++) {
    let num = 0;
    for (let p = numberArr.length - 1; p >= 0; p--) {
      if (p !== k) {
        num = num * 10 + numberArr[p];
      }
    }
    result = Math.max(num, result);
  }
  return result;
}

module.exports = deleteDigit;
