/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const indexArr = [];
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      indexArr.push(i);
    } else {
      newArr.push(arr[i]);
    }
  }
  newArr.sort((a, b) => a - b);
  for (let k = 0; k < indexArr.length; k++) {
    newArr.splice(indexArr[k], 0, -1);
  }
  return newArr;
}

module.exports = sortByHeight;
