const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

const chainMaker = {
  string: [],

  getLength() {
    return this.string.length;
  },

  addLink(value) {
    this.string.push('' + value);
    return this;
  },

  removeLink(position) {
    if (typeof position !== 'number' || position <= 0 || position > this.string.length - 1) {
      this.string = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.string.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.string.reverse();
    return this;
  },

  finishChain() {
    let result = this.string.join(' )~~( ');
    this.string = [];
    result = '( ' + result + ' )';
    return result;
  }
};

module.exports = {
  chainMaker
};
