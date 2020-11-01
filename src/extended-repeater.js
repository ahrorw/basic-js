const CustomError = require("../extensions/custom-error");

module.exports = function repeater(my_Str, myObj) {
  let i;
  let iEnd = myObj.repeatTimes || 1;
  let iEndExt = myObj.additionRepeatTimes || 1;
  let arrSep = myObj.separator || '+';
  let arrSepExt = myObj.additionSeparator || '|';
  let arr = [];
  let myStrExt = (myObj.addition !== undefined) ? String(myObj.addition) : '';

  for (i = 1; i <= iEndExt; i++) arr.push(myStrExt);
  myStrExt = String(my_Str) + arr.join(arrSepExt);

  arr = [];
  for (i = 1; i <= iEnd; i++) arr.push(myStrExt);
  
  return arr.join(arrSep);;
};