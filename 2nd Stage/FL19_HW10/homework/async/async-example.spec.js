import{test, expect, describe} from 'vitest'
import {generateTokenPromise, generateToken} from './async-example'

describe(' testing generateTokenPromise', () => {
   test('should return value async', async() => {
      const result = await generateTokenPromise('token');
      expect(result).toBeDefined()
   })
   test('should catch error async', () => {
      generateTokenPromise().catch( err => {
         expect(err).toBeInstanceOf(Error)
      })
   })
})

describe(' testing generateToken', () => {
   test('should return value async', async() => {
      const result = await generateToken('token');
      expect(result).not.toBeDefined()
   })
})