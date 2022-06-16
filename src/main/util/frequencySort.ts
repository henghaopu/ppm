/* eslint-disable no-restricted-syntax */
/**
 * Given an array of integers nums, sort the array in increasing/ascending
 * order based on the frequency of the values. If multiple values have the same
 * frequency, sort them in decreasing/descending order.
 *
 * Return the sorted array
 *
 *
 * [1,1,2,2,2,3] -> [3,1,1,2,2,2]
 *
 * [2,3,1,3,2] -> [1,3,3,2,2]
 *
 *  TODO: figure out how to use Ramda to implement this. use reduce?
 *
 */

const frequencySort = (nums: number[]): number[] => {
  // loop comparison: https://thecodebarbarian.com/for-vs-for-each-vs-for-in-vs-for-of-in-javascript.html

  // count frequency
  const freq: Record<string, number> = {}
  for (const num of nums) {
    freq[num] = (freq[num] ?? 0) + 1
  }

  return [...nums].sort((a, b) => {
    // desc
    if (freq[a] === freq[b]) return b - a
    // asc
    return freq[a] - freq[b]

    // if (map[a] > map[b]) {
    //   return 1
    // } else if (map[b] < map[b]) {
    //   return -1
    // } else {
    //   if (a > b) {
    //     return -1
    //   } else if (a < b) {
    //     return 1
    //   } else {
    //     return 0
    //   }
    // }
  })
}

export default frequencySort
