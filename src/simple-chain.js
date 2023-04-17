const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chainMak: [],
  getLength() {
    //throw new NotImplementedError('Not implemented');
    return this.chainMak.length;
  },
  addLink( value ) {
    //throw new NotImplementedError('Not implemented');
    this.chainMak.push(`( ${value} )`);
    return this;
  },
  removeLink( position ) {
    //throw new NotImplementedError('Not implemented');
    if (typeof position === 'number') {
      if (position < 1 || position > this.getLength()){
        this.chainMak = [];
        throw new Error("You can't remove incorrect link!");
      } 
      this.chainMak.splice((position - 1), 1)
      return this;
    }
    throw new Error("You can't remove incorrect link!");
  },
  reverseChain() {
    //throw new NotImplementedError('Not implemented');
    this.chainMak.reverse();
    return this;
  },
  finishChain() {
    //throw new NotImplementedError('Not implemented');
    const chain =  this.chainMak.join('~~');
    this.chainMak = [];
    return chain;
  }
};

module.exports = {
  chainMaker
};
