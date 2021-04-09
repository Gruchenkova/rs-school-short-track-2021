/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let result = 0;
  let obj = {};
  let arr = [];
  for (let k = 0; k < matrix[0].length; k++) {
    if (matrix[0][k] === 0) {
      arr.push(matrix[0].indexOf(matrix[0][k]))
    }
    result += matrix[0][k];
  }
  for (let i = 1; i < matrix.length; i++) {
    let subArr = matrix[i];
    for (let a = 0; a < subArr.length; a++)
      if (subArr[a] === 0) {
        arr.push(subArr.indexOf(subArr[a]))
        subArr[a] = 'x';
      } else if (arr.indexOf(subArr.indexOf(subArr[a])) === -1) {
        result += subArr[a]
      }
  }
  return result
}

module.exports = getMatrixElementsSum;
