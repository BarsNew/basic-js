const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  //throw new NotImplementedError('Not implemented');
  let obj= {};
  let count = [];

  for(let i = 0; i < str.length; i++) {
      let letter = str.charAt(i);

      if (isNaN(obj[letter])) {
          if (i !== 0) {
              count[count.length] = obj;
              obj = {};
          }
          obj[letter] = 1; 
      }
      else {
          obj[letter] += 1;
      }

      if (str[i+1] == undefined) count[count.length] = obj;
  }

   count = count.map(obj => {
    let [key, value] = Object.entries(obj)[0];
    return [`${value}${key}`];
  });
  
  return count.join('').replace(/1/gi, '');
}

module.exports = {
  encodeLine
};
