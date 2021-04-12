/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const stack = [];
  const newArr = names.map((item) => {
    let res = item;
    let count = 0;
    stack.map((i) => {
      const reg1 = new RegExp(`^${item}$`);
      const reg2 = new RegExp(`^${item}\\(?[0-9]?\\)?$`);
      if (reg1.test(i)) count++;
      else if (reg2.test(i)) count++;
      return i;
    });
    if (count) res += `(${count})`;
    stack.push(res);
    return res;
  });
  return newArr;
}

module.exports = renameFiles;
