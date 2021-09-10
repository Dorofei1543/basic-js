import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(n) {
  const obj = {};
  const resArr = n.map(item=> `.${item.split('.').reverse().join('.')}`);
  resArr.map(item=>{
    let value = item;
    for(let i = value.length; i >= 0 ; i--){
      if(item[i] === '.' && i == 0) continue;
      if(item[i] === '.' && !obj.hasOwnProperty(value.slice(0,i))){
        obj[value.slice(0,i)] = 1;
        continue;
      }
      if(item[i] === '.'){
        obj[value.slice(0,i)] += 1;
        continue
      }
      obj[value] = 1;
    }
  })

  return obj
  // remove line with error and write your code here
}
