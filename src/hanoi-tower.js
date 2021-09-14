import { NotImplementedError } from '../extensions/index.js';

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
export default function calculateHanoi(disksNumber, turnsSpeed) {
  let resNumber = (1*2)+1;
  while(disksNumber > 2){
    resNumber = resNumber * 2 + 1;
    disksNumber--;
  }
  let resSecond = Math.floor(resNumber * (3600/turnsSpeed));
  
  return { turns: resNumber, seconds: resSecond};
  // remove line with error and write your code here
}
