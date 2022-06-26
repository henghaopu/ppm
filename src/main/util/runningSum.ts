/**
 * Given an array nums. We define a running sum of an array as runningSum[i] =
 * sum(nums[0]…nums[i]).
 *
 * Return the running sum of nums.
 *
 * Input: nums = [1,2,3,4]
 * Output: [1,3,6,10]
 * Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4]
 *
 */

function runningSum1(nums: number[]): number[] {
  // [1,2,3,4]
  //    ↑        end = 0...length - 1     (provide upperbound/end index)
  //  ↑          start = 0...end          (sum up 0 to upperbound)
  //               add to temp
  //             push temp to output
  // time: O(n^2)

  const output = []
  for (let end = 0; end < nums.length; end += 1) {
    let sumToEnd = 0
    for (let start = 0; start <= end; start += 1) {
      sumToEnd += nums[start]
    }
    output.push(sumToEnd)
  }
  return output
}

function runningSum2(nums: number[]): number[] {
  return nums
}

function runningSum3(nums: number[]): number[] {
  return nums
}

function runningSum4(nums: number[]): number[] {
  return nums
}

export { runningSum1, runningSum2, runningSum3, runningSum4 }
