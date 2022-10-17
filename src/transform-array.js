const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */

function transform(arr) {
  if (!Array.isArray(arr)) {
		throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const result = [];

  arr.map((elem, index) => {
    if (elem === '--discard-next') {
      arr[index + 1] && arr.splice(index, 2);
    }
    else if (elem === '--discard-prev') {
      arr[index - 1] && result.pop();
    }
    else if (elem === '--double-next') {
      arr[index + 1] && result.push(arr[index + 1]);
    }
    else if (elem === '--double-prev') {
      arr[index - 1] && result.push(arr[index - 1]);
    }
    else {
      result.push(elem);
    }
  });

  return result;
}

module.exports = {
  transform
};
