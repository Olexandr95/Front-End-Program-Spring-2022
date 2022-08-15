import {test, expect, describe} from 'vitest'
import { validateStringNotEmpty, validateNumber } from './validation'

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