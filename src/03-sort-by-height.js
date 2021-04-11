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
  const res = arr.filter((item) => item !== -1).sort((a, b) => {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
    return a;
  });
  arr.map((item, i) => {
    if (item === -1) {
      res.splice(i, 0, item);
    }
    return item;
  });
  return res;
}

module.exports = sortByHeight;
