import {
  runningSum1,
  runningSum2,
  // runningSum3,
  // runningSum4,
} from 'main/util/runningSum'

test('input [1,2,3,4] output [1,1+2,1+2+3,1+2+3+4]', () => {
  expect(runningSum1([1, 2, 3, 4])).toEqual([1, 3, 6, 10])
  expect(runningSum2([1, 2, 3, 4])).toEqual([1, 3, 6, 10])
  // expect(runningSum3([1, 2, 3, 4])).toEqual([1, 3, 6, 10])
  // expect(runningSum4([1, 2, 3, 4])).toEqual([1, 3, 6, 10])
})

test('input [1,1,1,1] output [1,1+1,1+1+1,1+1+1+1]', () => {
  expect(runningSum1([1, 1, 1, 1])).toEqual([1, 2, 3, 4])
  expect(runningSum2([1, 1, 1, 1])).toEqual([1, 2, 3, 4])
  // expect(runningSum3([1, 1, 1, 1])).toEqual([1, 2, 3, 4])
  // expect(runningSum4([1, 1, 1, 1])).toEqual([1, 2, 3, 4])
})
