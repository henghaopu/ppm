/**
 * Given an array nums of distinct integers, return all the possible
 * permutations. You can return the answer in any order.
 *
 * Constraints
 *    1 <= nums.length <= 6
 *  -10 <= nums[i] <= 10
 *  All the integers of nums are unique.
 *
 *
 * references
 * 1.Stanford: https://www.youtube.com/watch?v=NdF1QDTRkck
 * 2.http://simonsays-tw.com/web/Backtracking/Backtracking.html
 * 3.https://blog.csdn.net/crystal6918/article/details/51924665
 * 4.https://www.gushiciku.cn/pl/pXfx/zh-tw
 * 5.https://programmercarl.com/%E5%9B%9E%E6%BA%AF%E6%80%BB%E7%BB%93.html
 * 6.https://leetcode-solution-leetcode-pp.gitbook.io/leetcode-solution/medium/46.permutations
 * 7.https://segmentfault.com/a/1190000021387242
 *
 */

// e.g. permute([1,2,3])
const permute = (nums: number[]): number[][] => {
  const output: number[][] = []
  // recPermute([], [1,2,3]), recPermute([1], [2,3]), recPermute([1, 2], [3]),..
  function recursivePermute(soFar: number[], rest: number[]) {
    if (rest.length === 0) {
      // if the input is not unique, we don't add the replicate results in
      // const strArr = output.map(arr => JSON.stringify(arr))
      // if (strArr.includes(JSON.stringify(rest))) return
      output.push(soFar)
    } else {
      for (let i = 0; i < rest.length; i += 1) {
        const next = [...soFar, rest[i]]
        const remaining = [...rest.slice(0, i), ...rest.slice(i + 1)]
        recursivePermute(next, remaining)
      }
    }
  }

  recursivePermute([], nums)
  return output
}

export default permute
