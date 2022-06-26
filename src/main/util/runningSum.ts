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
  // sumB4Cur = 0
  // [1,2,3,4]
  //  ↑           curIdx
  const result: number[] = []
  let sumB4Cur = 0

  for (let curIdx = 0; curIdx < nums.length; curIdx += 1) {
    const sumToCur = sumB4Cur + nums[curIdx]
    result[curIdx] = sumToCur
    sumB4Cur = sumToCur
  }
  return result
}

type Acc = {
  result: number[]
  sumB4Cur: number
}

function runningSum3(nums: number[]): number[] {
  // reduce from [1,2,3,4] to {result: [1,3,6,10], sumB4Cur: ..}
  return nums.reduce(
    (acc: Acc, cur: number): Acc => {
      const sumToCur = acc.sumB4Cur + cur
      return {
        result: [...acc.result, sumToCur],
        sumB4Cur: sumToCur,
      }
    },
    { result: [], sumB4Cur: 0 },
  ).result
}

function runningSum4(nums: number[]): number[] {
  // we call f(curIdx=0)
  // f(curIdx=0) process and update the result, then it calls f(curIdx=1)
  // f(curIdx=1) process and update the result, then it calls f(curIdx=2)
  // ...
  // until curIdx passes the last element idx

  // closure
  const mutableResult: number[] = []

  function recursiveRunningSum(
    numArr: number[],
    curIdx: number,
    sumB4Cur: number,
  ): void {
    // base case
    if (curIdx === numArr.length) return

    // recursive case
    const sumToCur = numArr[curIdx] + sumB4Cur
    mutableResult[curIdx] = sumToCur // or mutableResult.push(sumToCur)
    recursiveRunningSum(numArr, curIdx + 1, sumToCur)
  }

  recursiveRunningSum(nums, 0, 0)
  return mutableResult
}

export { runningSum1, runningSum2, runningSum3, runningSum4 }
