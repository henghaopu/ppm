/**
 * Math.random(): [0, 1)
 * [0, 1) * 100 = [0, 100)
 * [0, 1) * 100 + 1 = [1, 101)
 * [0, 1) * (100 - 1) + 1 = [1, 100)
 * [0, 1) * (8 - 2) + 2 = [2, 8)
 */

// The maximum is exclusive and the minimum is inclusive
const getRandomInt = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min) + min)

export default getRandomInt
