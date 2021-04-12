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
  const dnsStats = {};
  const domainsParse = domains.map((item) => item.split('.'));
  console.log(domainsParse);
  dnsStats[`.${domainsParse[0][domainsParse[0].length - 1]}`] = domainsParse.reduce((count, item) => {
    let i;
    if (item[item.length - 1] === domainsParse[0][domainsParse[0].length - 1]) i = 1;
    return count + i;
  }, 0);
  dnsStats[`.${domainsParse[0][domainsParse[0].length - 1]}.${domainsParse[0][domainsParse[0].length - 2]}`] = domainsParse.reduce((count, item) => {
    let i;
    if (item[item.length - 2] === domainsParse[0][domainsParse[0].length - 2]) i = 1;
    return count + i;
  }, 0);
  if (domainsParse[1] && domainsParse[1].length === 3) {
    dnsStats[`.${domainsParse[1][2]}.${domainsParse[1][1]}.${domainsParse[1][0]}`] = domainsParse.reduce((count, item) => {
      let i = 0;
      if (item.length === 3) {
        i = 1;
        console.log(count);
      }
      return count + i;
    }, 0);
  }
  return dnsStats;
}

module.exports = getDNSStats;
