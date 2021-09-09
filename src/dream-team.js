import { NotImplementedError } from '../extensions/index.js';

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
export default function createDreamTeam(members) {
  if(!Array.isArray(members)) return false
  return members.map(item => {
    if (typeof item == 'string'){
      item.split('').filter(i => i !== ' ')
      return item.split('').filter(i => i !== ' ').join('')[0];
    }
    
 }).reduce((sum,current) => (typeof current == 'string')? sum + current : sum,'').toUpperCase().split('').sort().join('')
  // remove line with error and write your code here
}
