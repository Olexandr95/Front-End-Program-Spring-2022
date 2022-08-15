import{test, expect, describe} from 'vitest'
import { User } from './hooks'
describe('Testing class User', () => {
   const testUser = new User()
   test('shoul be defind updateEmail', () => {
      expect(testUser.updateEmail).toBeDefined()
   })
   test('shoul be defind removeEmail', () => {
      expect(testUser.removeEmail).toBeDefined()
   })
})