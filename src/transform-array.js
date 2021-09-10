import { NotImplementedError } from '../extensions/index.js';

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
export default function transform(arr) {
  if(!Array.isArray(arr)) throw new Error ("'arr' parameter must be an instance of the Array!");
  if(arr.includes(Array)) return arr;
  const listArr = ['--discard-next','--double-next','--double-prev','--discard-prev'];
  const checkArr = arr.slice();
  const resArr = [];
  for(let i = 0 ; i < checkArr.length; i++){
    if(!(listArr.includes(checkArr[i]))) {
      resArr.push(checkArr[i]);
      continue;
    }
    if(checkArr[i] == '--discard-next'){
      if(typeof checkArr[i+1] == 'number'){
        checkArr.splice(i+1,1);
      }
      continue;
    }
    if(checkArr[i] == '--double-next' && i != arr.length - 1){
      if(typeof checkArr[i+1] == 'number'){
        resArr.push(checkArr[i+1])
      }
      continue;
    }
    if(checkArr[i] == '--double-prev'){
      if(typeof checkArr[i-1] == 'number'){
        resArr.push(checkArr[i-1])
      }
      continue;
    }
    if(checkArr[i] == '--discard-prev' && i >= 1){
      if(typeof checkArr[i-1] == 'number'){
        resArr.pop();
      }
      continue;
    }
  }
  return resArr

  // remove line with error and write your code here
}
