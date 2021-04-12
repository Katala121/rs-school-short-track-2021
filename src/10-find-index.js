/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let res;
  let arr = array;
  if (arr.length > 9999999) arr = array.reverse();
  arr.forEach((item, index) => {
    if (item === value) res = index;
  });

  return res;
}

module.exports = findIndex;
