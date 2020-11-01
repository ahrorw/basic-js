const CustomError = require("../extensions/custom-error");

module.exports = function countCats(catsCity) {
  let catsCount = 0;

  catsCity.forEach((catsHouse) => {
    catsHouse.forEach((animal) => {
      if (animal === '^^') catsCount++;        
    })
  })

  return catsCount;
};
