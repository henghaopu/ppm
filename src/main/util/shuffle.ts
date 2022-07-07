import getRandomInt from './getRandomInt'
/**
 * Given an array, design an algorithm to randomly shuffle the array. All
 * permutations of the array should be equally likely as a result of the
 * shuffling.
 *
 */
// const shuffle = <T>(array: T[]): T[] => array
function shuffle<T>(array: T[]): T[] {
  // array = [1, 2, 3], length = 3
  //          0  1  2
  //   randomly choose one from 0 to length - 1
  //   push into the result array
  //   splice it out
  // repeat until length = 0
  //
  // from permutation concept:
  //  3 x 2 x 1 = 3!
  //  _   _   _

  const mutableInput = [...array]
  const mutableOutput = []
  while (mutableInput.length) {
    const chosenIndex = getRandomInt(0, mutableInput.length)
    mutableOutput.push(mutableInput[chosenIndex])
    mutableInput.splice(chosenIndex, 1)
  }
  return mutableOutput
}

export default shuffle
