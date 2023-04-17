const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  //throw new NotImplementedError('Not implemented');
  let result;
  let min;
  n = String(n);
  let workNumb = String(n);
  workNumb = [...workNumb];
  
  if (n.length > 2) {
    let arrNumb = workNumb.reduce((acc, item, index) => {
      let numb = (String(workNumb[index]) + workNumb[index + 1]); 
      if (!isNaN(numb)) {
        if (String(workNumb[index]) === '0') acc.push(0);
        acc.push(+numb);
      } 
      return acc;
    },[]);
    min = String(Math.min(...arrNumb));
  } else {
    min = String(Math.min(...workNumb));
  }
  
  if (min.length === 1) {
    result = n.replace(new RegExp(min, 'i'), '');
  } else {
    let minIndex = n.indexOf(min);
    if (minIndex === 0) {
      result = n.substring(1);
    } else {
      result = n.substring(0, minIndex) + n.substring(minIndex + 1);
    }
  }
  
  return +result;
}

module.exports = {
  deleteDigit
};
