/**
 * Fibonacci sequence: 0  1  1  2  3  5  8  13  21  34  55  89...
 *
 * Fibonacci numbers:
 * F(0) = 0, F(1) = 1
 * F(n) = F(n - 1) + F(n - 2), for n > 1
 *
 */

// Recursion
const fib1 = (n: number): number => {
  if (n <= 1) return n

  return fib1(n - 1) + fib1(n - 2)
}

// Recursion + Memoization
const fib2 = (n: number, cache: Record<string, number> = {}): number => {
  if (n <= 1) return n
  // memoize fib of n - 1
  if (!cache[n - 1]) {
    // eslint-disable-next-line no-param-reassign
    cache[n - 1] = fib2(n - 1, cache)
  }
  // memoize fib of n - 2
  if (!cache[n - 2]) {
    // eslint-disable-next-line no-param-reassign
    cache[n - 2] = fib2(n - 2, cache)
  }

  // get data from cache
  return cache[n - 1] + cache[n - 2]
}

// Iteration + Tabulation
const fib3 = (n: number): number => {
  // fibSequence[0] = 0, fibSequence[1] = 1
  const fibSequence = [0, 1]

  for (let i = 2; i <= n; i += 1) {
    fibSequence[i] = fibSequence[i - 1] + fibSequence[i - 2]
  }

  return fibSequence[n]
}

export { fib1, fib2, fib3 }
