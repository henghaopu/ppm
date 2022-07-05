import longestPalindrome from 'main/util/longestPalindrome'

test('the longest palindrome from "abccccddeeefff" could be "dccefafeccd"', () => {
  expect(longestPalindrome('abccccddeeefff')).toBe(11)
})

test('the longest palindrome from "a" is "a"', () => {
  expect(longestPalindrome('a')).toBe(1)
})
