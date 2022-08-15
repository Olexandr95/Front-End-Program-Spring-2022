import {expect,it, describe} from 'vitest'
import { extractNumbers } from './parser'

describe('Should return array', () => {
const obj = {
   num1 : 3,
   num2 : 4,
   get : function(key){
      return this[key]
   }
}
it('Parser test', () => {
   expect(extractNumbers(obj)).toStrictEqual([3, 4]);
})
})