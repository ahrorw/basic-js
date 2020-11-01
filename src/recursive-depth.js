const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  calculateDepth(myArr) {
    if (!Array.isArray(myArr)) return 0;

    let xCurrent = 1;
    let xNested = 0;
    let maxNested = 0;

    myArr.forEach((item) => {
      xNested = 0;
      xNested += this.calculateDepth(item);
      if (xNested > maxNested) maxNested = xNested;
    })

    return xCurrent + maxNested;
  }  

};