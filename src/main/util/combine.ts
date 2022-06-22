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
