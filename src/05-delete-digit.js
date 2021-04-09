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
  let lengthNumber = n.toString().length;
    let num = n + '';
    let firstNumb = + num.substr(0,lengthNumber-1)
    let secondNumb = + num.substr(1,lengthNumber-1)
    if (firstNumb>secondNumb){
    return firstNumb
    }else {
    return secondNumb
    }
}

module.exports = deleteDigit;
