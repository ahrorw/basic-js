const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(myFriends) {
  if (!Array.isArray(myFriends)) return false;

  let arrTeam = [];

  myFriends.forEach((friendName) => {
    if (typeof(friendName) === 'string') arrTeam.push(friendName.trim().toUpperCase()[0]); 
  })

  return arrTeam.sort().join('');
};
