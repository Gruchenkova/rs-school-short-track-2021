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
  const lengthNumber = n.toString().length;
  const num = `${n}`;
  const firstNumb = +num.substr(0, lengthNumber - 1);
  const secondNumb = +num.substr(1, lengthNumber - 1);
  if (firstNumb > secondNumb) {
    return firstNumb;
  }
  return secondNumb;
}

module.exports = deleteDigit;
