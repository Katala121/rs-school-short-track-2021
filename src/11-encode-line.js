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
  const stack = [];
  const lettersList = str.split('').map((item, i) => {
    if (str[i + 1] === item) stack.push(item);
    else {
      stack.push(item);
      const letters = `${stack.length === 1 ? '' : stack.length}${stack[0]}`;
      stack.splice(0, stack.length);
      return letters;
    }
    return false;
  });
  return lettersList.filter((item) => item).join('');
}

module.exports = encodeLine;
