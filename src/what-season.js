const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  //throw new NotImplementedError('Not implemented');

  if (date === undefined || date === false) return "Unable to determine the time of year!";

  if (!(date instanceof Date) || isNaN(date) || typeof date == "function" || typeof date == "number" || Array.isArray(date)) {
    throw new Error('Invalid date!');
  }

  if (Object.prototype.toString.call(date) !== '[object Date]') throw new Error('Invalid date!'); 
          
    if ((date.getMonth() +1) >= 0 && (date.getMonth() +1) <= 2 || (date.getMonth() +1) == 12) month = 'winter';
    if ((date.getMonth() +1) >= 3 && (date.getMonth() +1) <= 5) month = 'spring';
    if ((date.getMonth() +1) >= 6 && (date.getMonth() +1)<= 8) month = 'summer';
    if ((date.getMonth() +1) >= 9 && (date.getMonth() +1) <= 11) month = 'autumn (fall)';
  
    return month;
}

module.exports = {
  getSeason
};
