/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Number}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let result = [];
  let res = '';
  const regex = /^[\-A-Fa-f0-9]+$/g;
  let arr = n.split('');
  for (let i = 2; i < arr.length; i += 3) {
    if (arr[i] === '-') {
      result.push(true)
    } else result.push(false)
  }

  if (regex.test(n)) {
    res = true;
  } else {
    res = false;
  }
  if (result.indexOf(false) === -1 && res === true) {
    return true
  } else return false
}

module.exports = isMAC48Address;
