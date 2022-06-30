import { pivotIndex1, pivotIndex2, pivotIndex3 } from 'main/util/pivotIndex'

test('the pivot index of [1,2,3,5,6] should be 3', () => {
  expect(pivotIndex1([1, 2, 3, 5, 6])).toBe(3)
  expect(pivotIndex2([1, 2, 3, 5, 6])).toBe(3)
  expect(pivotIndex3([1, 2, 3, 5, 6])).toBe(3)
})

test('the pivot index of [1,2,3] should be -1', () => {
  expect(pivotIndex1([1, 2, 3])).toBe(-1)
  expect(pivotIndex2([1, 2, 3])).toBe(-1)
  expect(pivotIndex3([1, 2, 3])).toBe(-1)
})

test('the pivot index of [2,1,-1] should be 0', () => {
  expect(pivotIndex1([2, 1, -1])).toBe(0)
  expect(pivotIndex2([2, 1, -1])).toBe(0)
  expect(pivotIndex3([2, 1, -1])).toBe(0)
})
