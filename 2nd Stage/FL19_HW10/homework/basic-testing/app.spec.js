import {test, expect, describe, it} from 'vitest'
import {transformToNumber} from '../basic-testing/src/util/numbers'
import { validateStringNotEmpty, validateNumber } from './src/util/validation'
import { add } from './src/math'
import { extractNumbers } from './src/parser/'


describe('Should return number', () => {

   test('Should return number', () => {
      expect(transformToNumber(1)).toBe(1)
      expect(transformToNumber(5)).equals(5)
   })
   test('Should not be empty', () => {
      expect(transformToNumber(1)).toBeDefined()
   })
})
describe('Should be not empty, and string', () => {
   test('should be not empty', () => {
      expect(validateStringNotEmpty(' abc ')).not.toBe('abc')
})
})
describe('Should be not empty, and number', () => {
   test('should be not empty', () => {
      expect(validateNumber('123')).not.toBe('123')
})
})
describe('Should return sum of number', () => {

   test('Should return number', () => {
      const arr = [1, 2, 3, 4, 5]
      expect(add(arr)).toBe(15)
      expect(add(arr)).equals(15)
   })
   test('Should not be empty', () => {
      const arr = [1, 2, 3, 4, 5]
      expect(add(arr)).toBeDefined()
   })
})
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