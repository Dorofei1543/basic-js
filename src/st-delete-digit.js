import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number}
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
    let arr = [];
    for(let i = 0; i < n.toString().split('').length; i++){
      arr.push(n.toString().split('').filter((item, index) => index !== i).join(''))
    }
  return +arr.sort()[arr.length-1]
  // remove line with error and write your code here
}
