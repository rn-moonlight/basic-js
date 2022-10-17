const { NotImplementedError } = require('../extensions/index.js');

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
  let max = 0;
  let num = n.toString();

  for (let i = 0; i < num.length; i++) {
    let newNum = +num.replace(num[i], '');
    max = Math.max(newNum, max);
  }

  return max;
}

module.exports = {
  deleteDigit
};
