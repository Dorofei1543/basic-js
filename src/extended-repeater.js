import { NotImplementedError } from '../extensions/index.js';

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
export default function repeater(str, options) {
  if(options.hasOwnProperty('addition')){
    if(options.additionRepeatTimes && options.additionRepeatTimes > 1){
      let arrAddition = [];
      while(arrAddition.length < options.additionRepeatTimes){
        arrAddition.push(String(options.addition))
      }
      if(options.additionSeparator){
       arrAddition = arrAddition.join(options.additionSeparator);
      }else{
        arrAddition = arrAddition.join('|')
      }
      str += arrAddition;
    }
    else{
      str+=options.addition
    }
  }
  if(options.repeatTimes && options.repeatTimes > 1){
    let arrStr = [];
    while (arrStr.length < options.repeatTimes){
      arrStr.push(str);
    }
    if(options.separator){
      arrStr = arrStr.join(options.separator);
    }else{
      arrStr = arrStr.join('+')
    }
    str = arrStr
  }
  return str
  // remove line with error and write your code here
}
