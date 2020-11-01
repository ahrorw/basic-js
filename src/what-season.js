const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(myDate) {
  if (myDate === undefined) return 'Unable to determine the time of year!';
  if ( Object.prototype.toString.call(myDate) != '[object Date]') throw new Error('THROWN');

  let xMonth = myDate.getMonth() + 1;      
  
  if ((xMonth > 2) && (xMonth < 6))  return 'spring';
  if ((xMonth > 5) && (xMonth < 9))  return 'summer';
  if ((xMonth > 8) && (xMonth < 12)) return 'autumn';
  return 'winter';
};