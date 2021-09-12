import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  constructor(res = true){
    this.res = res;
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }
    let resStr = '';
    key = key.toLowerCase();
    message = message.toLowerCase();
    while(key.length < message.length){
      for (let i = 0; key.length < message.length; i++){
        key += key[i];
        if( i == key.length - 1 ){
          i == 0;
        }
      }
    }
    for (let i = 0, j= 0; resStr.length !== message.length; i++, j++){
      if(message.charCodeAt(i) < 97 || message.charCodeAt(i) > 122) {
        resStr+=message[i];
        j--;
        continue
      }
      resStr += String.fromCharCode((message.charCodeAt(i)-97 + (key.charCodeAt(j)-97))%26 +97).toUpperCase()
    }
    if(this.res) {
      return resStr;
    }
    return resStr.split('').reverse().join('');
    // remove line with error and write your code here
  }
  decrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }
    let resStr = '';
    key = key.toLowerCase();
    message = message.toLowerCase();
    while(key.length < message.length){
      for (let i = 0; key.length < message.length; i++){
        key += key[i];
        if( i == key.length - 1 ){
          i == 0;
        }
      }
    }
    for (let i = 0, j= 0; resStr.length !== message.length; i++, j++){
      if(message.charCodeAt(i) < 97 || message.charCodeAt(i) > 122) {
        resStr+=message[i];
        j--;
        continue
      }
      resStr += String.fromCharCode((message.charCodeAt(i)-97 - (key.charCodeAt(j)-97) + 26)%26 +97).toUpperCase()
    }
    if(this.res) {
      return resStr;
    }
    return resStr.split('').reverse().join('');
    // remove line with error and write your code here
  }
}
