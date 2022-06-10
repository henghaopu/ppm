import { isAnagram, areAnagramsFp } from 'main/util/isAnagram'

test('"anagram" and "granmaa" are anagrams', () => {
  expect(isAnagram('anagram', 'granmaa')).toBe(true)
  expect(areAnagramsFp('anagram', 'granmaa')).toBe(true)
})

test('"a" and "ab" are not anagrams', () => {
  expect(isAnagram('a', 'ab')).toBe(false)
  expect(areAnagramsFp('a', 'ab')).toBe(false)
})
