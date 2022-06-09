import isAnagram from 'main/util/isAnagram'

test('"anagram" and "granmaa" are anagrams', () => {
  expect(isAnagram('anagram', 'granmaa')).toBe(true)
})

test('"a" and "ab" are not anagrams', () => {
  expect(isAnagram('a', 'ab')).toBe(false)
})
