import R from 'ramda'
// enable for ... of loop
/* eslint-disable no-restricted-syntax */

/**
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.

  An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 * solution 1: sort
 * s = "anagram"    => aaamngr   O(nlogn)
 * t = "granmaa"    => aaamngr
 * output = true
 *
 * solution 2: map - build a custom frequency counter
 * for ... of s.split('') and t.split('') to build mapS and mapT
 * mapS = {a: 3, m: 1, n: 1, g: 1, r: 1}  O(n)
 * mapT = {a: 3, m: 1, n: 1, g: 1, r: 1}  O(n)
 * for ... in mapsS and mapT to compare each property value
 *  - any difference -> return false
 *  - all same -> return true
 * 
 * solution 3: use fp's built-in frequency counter - R.countBy(R.identity)
 * reference: https://ramdajs.com/docs/#countBy
 * further study: https://stackoverflow.com/questions/71018098/how-to-calculate-relative-frequency-of-array-elements-using-ramda-js
 * 
 */

const isAnagram = (s: string, t: string): boolean => {
  // early return an edge case
  if (s.length !== t.length) return false

  // build a map of string s (to count the frequency of each char)
  const mapS = [...s].reduce(
    (acc: Record<string, number>, char: string): Record<string, number> => ({
      ...acc,
      [char]: acc[char] ? acc[char] + 1 : 1,
    }),
    {},
  )

  // build a map of string t
  const mapT: Record<string, number> = {}
  for (const char of [...t]) {
    mapT[char] = (mapT[char] ?? 0) + 1
  }

  // compare the two maps' propery values
  for (const propS in mapS) {
    // not an anagram if some of the properties/chars have different amount
    if (mapS[propS] !== mapT[propS]) {
      return false
    }
  }
  // a string's an anagram should have the same char counts for all the chars
  return true
}

// fun fp way
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const areAnagrams = (s: string, t: string): boolean =>
  // const freqCounterS = R.countBy(R.identity, [...s])
  // const freqCounterS = R.countBy<string>(R.identity)([...s])
  // const freqCounterT = R.countBy<string>(R.identity)([...t])
  // return R.equals(freqCounterS, freqCounterT)
  R.equals(R.countBy(R.identity, [...s]), R.countBy(R.identity, [...t]))

export default isAnagram
