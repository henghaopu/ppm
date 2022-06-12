import { binarySearch1, binarySearch2 } from 'main/util/binarySearch'

test('7 is in [-1, 0, 1, 2, 3, 5, 7, 11] with index 6', () => {
  expect(binarySearch1([-1, 0, 1, 2, 3, 5, 7, 11], 7)).toBe(6)
  expect(binarySearch2([-1, 0, 1, 2, 3, 5, 7, 11], 7)).toBe(6)
})

//  only use while(start < end) can't cover this case
test('5 is in [5] with index 0', () => {
  expect(binarySearch1([5], 5)).toBe(0)
  expect(binarySearch2([5], 5)).toBe(0)
})

//  only use while(start < end) can't cover this case
test('10 is in [5, 10] with index 1', () => {
  expect(binarySearch1([5, 10], 10)).toBe(1)
  expect(binarySearch2([5, 10], 10)).toBe(1)
})

test('4 is not in [1, 2, 3]', () => {
  expect(binarySearch1([1, 2, 3], 4)).toBe(-1)
  expect(binarySearch2([1, 2, 3], 4)).toBe(-1)
})
