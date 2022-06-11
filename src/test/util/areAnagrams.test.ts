import { areAnagrams, areAnagramsFp } from 'main/util/areAnagrams'

test('"anagram" and "granmaa" are anagrams', () => {
  expect(areAnagrams('anagram', 'granmaa')).toBe(true)
  expect(areAnagramsFp('anagram', 'granmaa')).toBe(true)
})

test('"a" and "ab" are not anagrams', () => {
  expect(areAnagrams('a', 'ab')).toBe(false)
  expect(areAnagramsFp('a', 'ab')).toBe(false)
})
