/* eslint-disable @typescript-eslint/no-unused-vars */
import R from 'ramda'

/**
 * A phrase is a palindrome if, after converting all uppercase letters into
 * lowercase letters and removing all non-alphanumeric characters, it reads the
 * same forward and backward. Alphanumeric characters include letters and
 * numbers.
 *
 * Given a string s, return true if it is a palindrome, or false otherwise.
 *
 *
 * two pointer pattern:   O(n)
 * 'civic'   '0110'
 *  ↑   ↑     ↑  ↑
 *
 */

const isPalindrome = (s: string): boolean => {
  // clean up the string to make it alphanumeric and lowercase
  const alphanumericLowercaseS = s.replace(/[^a-z0-9]/gi, '').toLowerCase()
  // console.log(alphanumericLowercaseS)

  let front = 0
  let back = alphanumericLowercaseS.length - 1
  while (front < back) {
    if (alphanumericLowercaseS[front] !== alphanumericLowercaseS[back]) {
      return false
    }
    front += 1
    back -= 1
  }
  return true
}

const isPalindromeFp = (s: string): boolean =>
  R.equals(
    R.pipe(R.replace(/[^a-z0-9]/gi, ''), R.toLower)(s),
    R.pipe(R.replace(/[^a-z0-9]/gi, ''), R.toLower, R.reverse)(s),
  )

export { isPalindrome, isPalindromeFp }
