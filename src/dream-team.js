const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  //throw new NotImplementedError('Not implemented');
  if (!Array.isArray(members)) return false;

  let name = members.reduce((acc, str) => acc + ((typeof str === 'string' && str.trim() !== '') ? str.trim()[0] : ''), '');
  
  if (name != '') { return name
  .toUpperCase()
  .split("")
  .sort()
  .join("");
  }
  
  return false;
}

module.exports = {
  createDreamTeam
};
