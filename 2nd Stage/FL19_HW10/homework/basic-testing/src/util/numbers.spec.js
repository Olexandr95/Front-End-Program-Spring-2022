import {test, expect, describe} from 'vitest'
import {transformToNumber} from './numbers'

describe('Should return number', () => {

   test('Should return number', () => {
      expect(transformToNumber(1)).toBe(1)
      expect(transformToNumber(5)).equals(5)
   })
   test('Should not be empty', () => {
      expect(transformToNumber(1)).toBeDefined()
   })
})