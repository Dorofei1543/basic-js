import { NotImplementedError } from '../extensions/index.js';

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
export default function encodeLine(str) {
  let resStr = '';
  let count = 0;
  for(let i=0; i <= str.length; i++) {  
    if(str.charAt(i) == str.charAt(i+1)){ 
      count++;
    }else {
      resStr +=  (count ? count + 1 : '') + str.charAt(i);
      count = 0;
    }
    }
    return resStr;
  // remove line with error and write your code here
}
