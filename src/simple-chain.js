const CustomError = require("../extensions/custom-error");

const chainMaker = {
  myArr: [],

  getLength() {
    return this.myArr.length;
  },

  addLink(value) {
    (value === undefined) ? this.myArr.push('( )') : this.myArr.push('( '+ value + ' )');
    return this;
  },

  removeLink(position) {
    switch ((position < 1)||
            (position > (this.myArr.length))) {
      case true:
        this.myArr = [];
        throw new Error;  
        break;

      default:
        this.myArr.splice(position-1, 1);
        return this;
    }
  },

  reverseChain() {
    this.myArr.reverse();
    return this;
  },

  finishChain: function() {
    let str = this.myArr.join('~~');
    this.myArr = [];
    return str;
  }

};

module.exports = chainMaker;