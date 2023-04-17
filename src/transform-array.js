const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform( arr ) {
  //throw new NotImplementedError('Not implemented');
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
   
  let newArr = [...arr];
  
  const control = ['--double-next', '--double-prev', '--discard-next', '--discard-prev'];
  
  arr.forEach(item => {
      if(control.includes(item)) {
            if (item == '--double-next' ) doubleNext();
            if (item == '--double-prev' ) doublePrev();
            if (item == '--discard-next' ) discardNext();
            if (item == '--discard-prev' ) discardPrev();
      }
  });
  
  function doubleNext() {
    if (newArr.includes('--double-next')) {
        if (!newArr[newArr.indexOf('--double-next') + 1] || (arr[arr.indexOf('--double-next') + 1]) !== (newArr[newArr.indexOf('--double-next') + 1])) {
            newArr.splice([newArr.indexOf('--double-next')], 1);
        }
        else {
            newArr[newArr.indexOf('--double-next')] = newArr[newArr.indexOf('--double-next') + 1];
        }
    }
  }  
  
  function doublePrev() { 
    if (newArr.includes('--double-prev')) {
        if (!newArr[newArr.indexOf('--double-prev') - 1] || (arr[arr.indexOf('--double-prev') - 1]) !== (newArr[newArr.indexOf('--double-prev') - 1])) {
            newArr.splice([newArr.indexOf('--double-prev')], 1);
        } 
        else {
           newArr[newArr.indexOf('--double-prev')] = newArr[newArr.indexOf('--double-prev') - 1]; 
        }
    }
  }

  function discardNext() {   
    if (newArr.includes('--discard-next')) {
        if (!newArr[newArr.indexOf('--discard-next') + 1] || (arr[arr.indexOf('--discard-next') + 1]) !== (newArr[newArr.indexOf('--discard-next') + 1]) ) {
            newArr.splice([newArr.indexOf('--discard-next')], 1);
        }
        else {
          newArr.splice([newArr.indexOf('--discard-next')], 2);
        }
    } 
  }

  function discardPrev() {    
    if (newArr.includes('--discard-prev')) {
        if (!newArr[newArr.indexOf('--discard-prev') - 1] || (arr[arr.indexOf('--discard-prev') - 1]) !== (newArr[newArr.indexOf('--discard-prev') - 1])) {
          newArr.splice([newArr.indexOf('--discard-prev')], 1);
        }
        else {         
          newArr.splice([newArr.indexOf('--discard-prev')] -1, 2);
        }
    }
  }  
  
  return newArr; 
}

module.exports = {
  transform
};
