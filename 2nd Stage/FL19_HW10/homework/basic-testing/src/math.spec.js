import {test, expect, describe} from 'vitest'
import { add } from './math'

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