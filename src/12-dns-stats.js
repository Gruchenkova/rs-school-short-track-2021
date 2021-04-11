/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const obj = {};
  let string = '';
  for (let i = 0; i < domains.length; i++) {
    string = '';
    const newArr = domains[i].split('.').reverse();
    const keys = Object.keys(obj);
    for (let k = 0; k < newArr.length; k++) {
      string += `.${newArr[k]}`;
      if (keys.indexOf(string) !== -1) {
        obj[string]++;
      } else {
        obj[string] = 1;
      }
    }
  } return obj;
}

module.exports = getDNSStats;
