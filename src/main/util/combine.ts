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
 *    ([A,B,C,D,E],[]):    loop through the candidate/rest items
 *        ([B,C,D,E],[A]): Choose A, then loop through the rest items after A,
 *        path 1: vertical
 *            ([C,D,E],[A,B])  ([D,E],[A,C])  ([E],[A,D])  ([],[A,E])
 *        path 2: horizontal
 *        ([C,D,E],[B])  : pop out A. Choose B, then loop through items after B,
 *            ([D,E],[B,C])  ([E],[B,D])  ([],[B,E])
 *        ([D,E],[C])    : pop out B. Choose C, then loop through items after C,
 *            ([E],[C,D])  ([],[C,E])
 *        ([E],[D])      : pop out C. Choose D, then loop through items after D,
 *            ([],[D,E])
 *        ([],[E])       : pop out D. Choose E, then loop through items after E,
 *
 *        ([],[])        : pop out E.
 */

const combine = (nUniqueItems: unknown[], k: number): unknown[][] => {
  const output: unknown[][] = []
  // const nums = [...Array(n).fill(0).keys()].map((val) => val + 1)

  function recursiveCombine(rest: unknown[], soFar: unknown[]) {
    if (soFar.length === k) {
      output.push([...soFar])
      return
    }

    for (let i = 0; i < rest.length; i += 1) {
      soFar.push(rest[i])
      recursiveCombine(rest.slice(i + 1), [...soFar])
      // backtracking pattern
      soFar.pop()
    }
  }

  recursiveCombine(nUniqueItems, [])
  return output
}

export default combine
