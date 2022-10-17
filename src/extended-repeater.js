const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  let {
    repeatTimes = 0,
    separator = '+',
    addition = '',
    additionRepeatTimes = 0,
    additionSeparator = '|',
  } = options;

  if (typeof str !== 'string') str = String(str);
  if (typeof addition !== 'string') addition = String(addition);

  let result = Array(repeatTimes ? repeatTimes : 1)
                .fill(str)
                .map(elem => elem + (addition ? repeater(addition, { repeatTimes: additionRepeatTimes,
                    separator: additionSeparator }) : ''))
                .join(separator);

  return result;
}

module.exports = {
  repeater
};
