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
  const arr = String(n).split('');
  let min = 9;
  arr.map((item) => {
    min = item <= min ? item : min;
    return item;
  });
  delete arr[arr.indexOf(min)];
  return Number(arr.join(''));
}

module.exports = deleteDigit;
