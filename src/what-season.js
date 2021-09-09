import { NotImplementedError } from '../extensions/index.js';

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
export default function getSeason(date) {
  if (!date) return "Unable to determine the time of year!";
  if((!(date instanceof Date) || Object.keys(date).length > 0))  throw new Error('Invalid date!');
  const summer = [5,6,7]
  const autumn = [8,9,10]
  const winter = [11,0,1]
  const spring = [2,3,4]
   if(summer.includes(date.getMonth())) return 'summer';
   if(autumn.includes(date.getMonth())) return 'autumn';
   if(winter.includes(date.getMonth())) return 'winter';
   if(spring.includes(date.getMonth())) return 'spring';
  // remove line with error and write your code here
}
