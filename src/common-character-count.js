const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  //throw new NotImplementedError('Not implemented');
  const arr1 = [...s1].reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});
  
  const arr2 = [...s2].reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});
  
  let count = 0;
  
  for (let it in arr1) {
    if (arr2.hasOwnProperty(it)) {
      count += Math.min(arr1[it], arr2[it]);
    }
  }
  
  return count;
}

module.exports = {
  getCommonCharacterCount
};
