/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (!str) {
    return '';
  }
  const letters = str.split('');
  let currentLetterCount = 1;
  let currentLeter = letters[0];
  let result = '';

  for (let i = 0; i < str.length - 1; i++) {
    if (currentLeter === letters[i + 1]) {
      currentLetterCount++;
    } else {
      result = result + currentLetterCount + currentLeter;
      currentLeter = letters[i + 1];
      currentLetterCount = 1;
    }
  }
  result = result + currentLeter + currentLetterCount;
  result = result.replace(/1/g, '');
  return result;
}

module.exports = encodeLine;
