/* eslint-disable no-use-before-define */
/* eslint-disable no-restricted-syntax */

/**
 * Given a string s which consists of lowercase or uppercase letters, return
 * the length of the longest palindrome that can be built with those letters.
 *
 * Letters are case sensitive, for example, "Aa" is not considered a palindrome
 * here.
 *
 *
 * Input: s = "abccccddeeefff"
 * Output: 11
 * Explanation: One longest palindrome that can be built is "dccefafeccd", whose
 * length is 11.
 *
 */
function longestPalindrome(s: string): number {
  const map: Record<string, number> = {}
  for (const char of s) {
    map[char] = (map[char] ?? 0) + 1
  }

  let evenSum = 0
  let hasOneCenterOdd = false
  for (const val of Object.values(map)) {
    if (isEven(val)) {
      evenSum += val
    } else {
      evenSum += val > 1 ? val - 1 : 0
      hasOneCenterOdd = true
    }
  }

  return evenSum + (hasOneCenterOdd ? 1 : 0)
}

function isEven(val: number) {
  return val % 2 === 0
}

export default longestPalindrome
