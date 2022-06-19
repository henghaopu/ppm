// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import R from 'ramda'

/**
 * Rotate Image
 *
 * You are given an n x n 2D matrix representing an image, rotate the image by
 * 90 degrees (clockwise).
 *
 * reference: https://leetcode.com/problems/rotate-image/discuss/2115740/TypeScript-oror-Transpose-%2B-rotate-X
 */

const rotate = (nums: number[][]): number[][] =>
  R.pipe(R.transpose, R.map(R.reverse))(nums) as number[][]

export default rotate

// const rotate = (nums: number[][]): number[][] =>
//   R.pipe<number[][], number[][], number[][]>(
//     R.transpose,
//     R.map<number[], number[]>(R.reverse),
//   )(nums) as number[][]
