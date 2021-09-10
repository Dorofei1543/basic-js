import { NotImplementedError } from '../extensions/index.js';

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
export default function sortByHeight(arr) {
  if(!arr.includes(-1)) {
    return arr.sort((a,b)=>{
      if(a>b ){
        return 1
      }
      return -1
    })
  }
  const arrRes = arr.filter(i => i !== -1).sort((a,b)=>{
    if(a>b){
      return 1
    }
    return -1
  });
  let j = 0;
  outer: for (let i = 0; i < arrRes.length; i++){
    for (;j < arr.length; j++){
      if(arr[j] !== -1) {
        arr[j] = arrRes[i];
        console.log(j)
        j++
        continue outer;
      }
    }
  }
  return arr
  // remove line with error and write your code here
}
