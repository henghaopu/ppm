/**
 *  A B C D E   C(5, 2) = 5!/(3!·2!) = 10
 *  A B         1
 *  A   C       2
 *  A     D     3
 *  A       E   4
 *    B C       5
 *    B   D     6
 *    B     E   7
 *      C D     8
 *      C   E   9
 *        D E   10
 *
 *    Tree structure:
 *
 *    ([],[A,B,C,D,E])
 *        ([A],[B,C,D,E])
 *            ([A,B],[C,D,E])  ([A,C], [D,E])  ([A,D], [E], ([A,E], [])
 *        ([B], [C,D,E])
 *            ([B,C],[D,E])  ([B,D],[E])  ([B,E], [])
 *        ([C], [D,E])
 *            ([C,D],[E])  ([C,E],[])
 *        ([D], [E])
 *            ([D,E],[])
 *        ([E], [])
 *
 */

const combine = (nUniqueItems: unknown[], k: number): unknown[][] => {
  const output: unknown[][] = []
  // const nums = [...Array(n).fill(0).keys()].map((val) => val + 1)

  function recursiveCombine(soFar: unknown[], rest: unknown[]) {
    if (soFar.length === k) {
      output.push([...soFar])
    } else {
      for (let i = 0; i < rest.length; i += 1) {
        soFar.push(rest[i])
        recursiveCombine([...soFar], [...rest].slice(i + 1))
        // backtracking pattern
        soFar.pop()
      }
    }
  }
  recursiveCombine([], nUniqueItems)
  return output
}

export default combine
