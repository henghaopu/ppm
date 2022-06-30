/**
 *
 * Given an array of integers nums, calculate the pivot index of this array.
 *
 * The pivot index is the index where the sum of all the numbers strictly to
 * the left of the index is equal to the sum of all the numbers strictly to the
 * index's right.
 *
 * If the index is on the left edge of the array, then the left sum is 0
 * because there are no elements to the left. This also applies to the right
 * edge of the array.
 *
 * Return the leftmost pivot index. If no such index exists, return -1.
 *
 *
 * Brute Froce: O(n^2)
 *
 * [1,2,3,5,6]
 *  ↑
 *  loop through pivot = 0... nums.length - 1   outer O(n)
 *    sum up left, sum up right,    inner O(n)
 *    if leftSum = rightSum
 *      return pivot
 *  return -1
 *
 *
 *  [1,2,3,5,6]
 *  ↑
 *
 *  concept: shift out right, push into left
 *  leftSum = 0
 *  rightSum = totalSum    O(n)
 *
 *  loop through the array  pivotIndex = 0 ... nums.length-1    O(n)
 *    rightSum -= nums[pivot]
 *    if leftSum === rightSum  rerutn pivot
 *    leftSum += nums[pivot]
 *
 *
 * concept: leftSum + nums[pivot] + rightSum = totalSum
 *   => instantiate the leftSum and calculate the totalSum in advance O(n)
 *   => the only unknown is rightSum, which can be derived from the other three
 *   => rightSum = totalSum - leftSum - nums[pivot]
 *
 */

const pivotIndex1 = (nums: number[]): number => {
  for (let pivot = 0; pivot < nums.length; pivot += 1) {
    const sumReducer = (acc: number, val: number): number => acc + val
    // if initialValue is provided but the array is empty, the solo value will be returned without calling callbackFn
    const leftSum = nums.slice(0, pivot).reduce(sumReducer, 0)
    const rightSum = nums.slice(pivot + 1).reduce(sumReducer, 0)

    if (leftSum === rightSum) return pivot
  }

  return -1
}

const pivotIndex2 = (nums: number[]): number => {
  const sumReducer = (acc: number, val: number): number => acc + val
  let leftSum = 0
  let rightSum = nums.reduce(sumReducer, 0)
  for (let pivot = 0; pivot < nums.length; pivot += 1) {
    rightSum -= nums[pivot]
    if (leftSum === rightSum) return pivot
    leftSum += nums[pivot]
  }
  return -1
}

const pivotIndex3 = (nums: number[]): number => {
  const sumReducer = (acc: number, val: number): number => acc + val
  const totalSum = nums.reduce(sumReducer, 0)
  let leftSum = 0
  for (let pivot = 0; pivot < nums.length; pivot += 1) {
    const rightSum = totalSum - leftSum - nums[pivot]
    if (leftSum === rightSum) return pivot
    leftSum += nums[pivot]
  }
  return -1
}

export { pivotIndex1, pivotIndex2, pivotIndex3 }
