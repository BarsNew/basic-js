const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  //throw new NotImplementedError('Not implemented');
  if (options.separator) options.separator = String(options.separator);
  if (options.addition) options.addition = String(options.addition);
  if (options.additionSeparator) options.additionSeparator = String(options.additionSeparator);
  
  if (!options.separator) options.separator = '+';
  if (!options.additionSeparator) options.additionSeparator = '|';
  
  let string = '';
  let interval = '';
  
  let countInter = 0;
  
  do {
      
      interval += options.addition + ((countInter < options.additionRepeatTimes - 1) ? options.additionSeparator : '');
      
      countInter++;
  } while(countInter < options.additionRepeatTimes)   
  
  console.log( typeof interval)
  count = 0;
  
  do {
      
      string += str + ((interval != 'undefined') ? interval : '') + ((count < options.repeatTimes - 1) ? options.separator : ''); 
      
      count++;
  } while (count < options.repeatTimes)

 

  return string;
}

module.exports = {
  repeater
};
