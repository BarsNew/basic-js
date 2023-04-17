const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight( arr ) {
  //throw new NotImplementedError('Not implemented');

  let repeatArr = [];
  let checkFalse = {};
  let check = {};

  let nums = arr.filter(function(item, index) {
      if (arr.indexOf(item) === arr.lastIndexOf(item) && arr.indexOf(item) === index) {
          check[item] = true;
          return true;
      }
      else {
          check[item] = false;
          checkFalse[item] = false;
          repeatArr.push(item);
          return false;
      }
  }).sort(function(a, b) {
      return a - b;
  });


  if (!Object.values(check)[0]) {
      let newArr = [];
      for (let item of repeatArr) {
          newArr.push(+item)
      }
      for (let item of nums) {
          newArr.push(+item)
      }
      
      return newArr;
  }

  arr.forEach((item, index) => {
      if (check[item]) {
          let numb = nums.shift();
          arr[index] = +numb;
      }
  });

  return arr;
}

module.exports = {
  sortByHeight
};
