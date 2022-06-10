import { isPalindrome, isPalindromeFp } from 'main/util/isPalindrome'

test('"civic" is a palindrome', () => {
  expect(isPalindrome('civic')).toBe(true)
  expect(isPalindromeFp('civic')).toBe(true)
})

test('"A man, a plan, a canal: Panama" is a palindrome', () => {
  expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true)
  expect(isPalindromeFp('A man, a plan, a canal: Panama')).toBe(true)
})

test('empty string "" is a palindrome', () => {
  expect(isPalindrome('')).toBe(true)
  expect(isPalindromeFp('')).toBe(true)
})

test('"001" is not a palinedrom', () => {
  expect(isPalindrome('001')).toBe(false)
  expect(isPalindromeFp('001')).toBe(false)
})
