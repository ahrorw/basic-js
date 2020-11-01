const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if ((sampleActivity === undefined)|| 
      (sampleActivity === null)|| 
      (typeof(sampleActivity) !== 'String')||
      (sampleActivity === '')) return false;

  let numActivity = Number(sampleActivity); 
  if (numActivity === NaN) return false;

  let k = 0.693/HALF_LIFE_PERIOD;
  let t = Math.log2(MODERN_ACTIVITY/numActivity) / k;

  return t;
};
