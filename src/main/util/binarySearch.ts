/**
 * Given an array of integers nums which is sorted in ascending order, and an
 * integer target, write a function to search target in nums with O(log n) time
 * complexity. If target exists, then return its index. Otherwise, return -1.
 *
 *
 *   [0, 1]   target 2
 *    ↑  ↑    middle = floor((0 + 1) / 2) = 0
 *    ↑       start = middle ❌ (cause infinite loop)
 *       ↑    start = middle + 1 ✅
 */

const binarySearch1 = (nums: number[], target: number): number => {
  let start = 0
  let end = nums.length - 1

  // no need to write additional code to check start and end - O(log 3n)
  // middle can cover start and end with the equal condition (start <= end)
  // if (nums[start] === target) return start;
  // if (nums[end] === target) return end;

  while (start <= end) {
    // if (nums[start] === target) return start;
    // if (nums[end] === target) return end;
    const middle = Math.floor((start + end) / 2)
    if (nums[middle] === target) return middle

    if (nums[middle] < target) {
      start = middle + 1
    } else {
      end = middle - 1
    }
  }
  return -1
}

const binarySearch2 = (nums: number[], target: number): number => {
  // reshape signature for recursion
  function binarySearch(
    numArray: number[],
    aim: number,
    start: number,
    end: number,
  ): number {
    // base case 1
    if (start > end) return -1

    const middle = Math.floor((start + end) / 2)
    // base case 2
    if (numArray[middle] === aim) return middle

    // can replce if else with ternary
    // if (numArray[middle] < aim) {
    //   return binarySearch(numArray, aim, middle + 1, end)
    // }
    // return binarySearch(numArray, aim, start, middle - 1)

    // recursive case
    return numArray[middle] < aim
      ? binarySearch(numArray, aim, middle + 1, end)
      : binarySearch(numArray, aim, start, middle - 1)
  }

  return binarySearch(nums, target, 0, nums.length - 1)
}

export { binarySearch1, binarySearch2 }
