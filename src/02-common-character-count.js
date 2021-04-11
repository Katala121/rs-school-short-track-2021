/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let res1 = s1.split('');
  let res2 = s2.split('');
  let clone1 = s1;
  let clone2 = s2;
  const stack = [];
  res1 = res1.map((item, i) => {
    if (res1[i + 1] === item) stack.push(item);
    else {
      const letters = item + stack.join('');
      stack.splice(0, stack.length);
      return letters;
    }
    return false;
  });
  res2 = res2.map((item, i) => {
    if (res2[i + 1] === item) stack.push(item);
    else {
      const letters = item + stack.join('');
      stack.splice(0, stack.length);
      return letters;
    }
    return false;
  });
  res1 = res1.filter((item) => item !== false);
  res2 = res2.filter((item) => item !== false);
  let count = 0;
  res1.map((item) => {
    if (clone2.includes(item)) {
      count += item.length;
      clone1 = clone1.split(item).join('');
      clone2 = clone2.split(item).join('');
      return 0;
    }
    return item;
  });
  res2.map((item) => {
    if (clone1.includes(item)) count += item.length;
    return 0;
  });
  return count;
}

module.exports = getCommonCharacterCount;
