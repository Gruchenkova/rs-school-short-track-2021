/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arr1 = s1.split('');
  const arr2 = s2.split('');
  const obj1 = {};
  const obj2 = {};
  const objR = {};
  let result = 0;
  for (let i = 0; i < arr1.length; i++) {
    const keys = Object.keys(obj1);
    if (keys.includes(arr1[i]) === true) {
      obj1[arr1[i]]++;
    } else {
      obj1[arr1[i]] = 1;
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    const keys = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys.includes(arr2[i]) === true && keys2.includes(arr2[i]) === true) {
      obj2[arr2[i]]++;
    } else if (keys.includes(arr2[i]) === true && keys2.includes(arr2[i]) === false) {
      obj2[arr2[i]] = 1;
    }
  }
  for (const key in Object.keys(obj2)) {
    if (obj2[key] >= obj1[key]) {
      objR[key] = obj1[key];
    } else {
      objR[key] = obj2[key];
    }
  }
  for (const key in Object.keys(objR)) {
    result += objR[key];
  }
  return result;
}

module.exports = getCommonCharacterCount;
