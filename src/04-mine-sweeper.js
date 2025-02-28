/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const newMatrix = matrix.map((item, i) => {
    const line = item.map((cell, index) => {
      let count = 0;
      if (i > 0 && index > 0 && matrix[i - 1][index - 1] === true) count++;
      if (i > 0 && matrix[i - 1][index] === true) count++;
      if (i > 0 && index < item.length - 1 && matrix[i - 1][index + 1] === true) count++;
      if (index > 0 && matrix[i][index - 1] === true) count++;
      if (index < item.length - 1 && matrix[i][index + 1] === true) count++;
      if (i < matrix.length - 1 && index > 0 && matrix[i + 1][index - 1] === true) count++;
      if (i < matrix.length - 1 && matrix[i + 1][index] === true) count++;
      if (i < matrix.length - 1 && index < item.length - 1
        && matrix[i + 1][index + 1] === true) count++;
      return count;
    });
    return line;
  });
  return newMatrix;
}

module.exports = minesweeper;
