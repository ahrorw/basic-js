const CustomError = require("../extensions/custom-error");

module.exports = function transform(myArr) {
  if (!Array.isArray(myArr)) throw new Error;

  let newArr = [];
  let canAdd = true;
  let canAddTwo = false;
  let iDiscarded = -1;
  
  myArr.forEach(function(item, i, myArr) {
    switch (item) {
      case '--discard-next':
        canAdd = false;
        iDiscarded = i + 1;
        break;

      case '--discard-prev':
        if (iDiscarded !== (i -1)) newArr.pop();
        break;

      case '--double-next':
        canAddTwo = true;
        break;

      case '--double-prev':
        if ((newArr.length > 0)&&(iDiscarded !== (i -1))) newArr.push(newArr[newArr.length-1]);
        break;
        
      default:
        if (canAdd) newArr.push(item);
        if ((canAdd) && (canAddTwo)) newArr.push(item);
        canAdd = true;
        canAddTwo = false;
        break;
    }
  });

  return newArr;
};
