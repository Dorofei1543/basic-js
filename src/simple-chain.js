import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  arr: [],
  getLength() {
    return this.arr.length;
    // remove line with error and write your code here
  },
  addLink(value) {
    this.arr.push(`${value}`);
    return this
    // remove line with error and write your code here
  },
  removeLink(position) {
    if(typeof position !== 'number' || position > this.arr.length || position < 1){
      this.arr = [];
      throw new Error("You can't remove incorrect link!")
    }
    this.arr.splice(position - 1,1);
    return this
    // remove line with error and write your code here
  },
  reverseChain() {
    this.arr = this.arr.reverse()
    return this
    // remove line with error and write your code here
  },
  finishChain() {
    let regExp = /,/g;
    let resStr = this.arr.join(',').replace(regExp,' )~~( ');
    resStr = `( ${resStr} )`
    this.arr = []
    return resStr
    // remove line with error and write your code here
  }
};
