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
  return matrix.reduce((sum, item, i) => {
    if (i === 0) return sum + item.reduce((s, it) => s + parseInt(it, 10), 0);
    return sum + item.reduce((s, it, index) => {
      if (matrix[i - 1][index] !== 0) return s + parseInt(it, 10);
      return s;
    }, 0);
  }, 0);
}

module.exports = getMatrixElementsSum;
