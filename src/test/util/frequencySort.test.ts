import frequencySort from 'main/util/frequencySort'

test('if input = [1,1,2,2,2,3], then output = [3,1,1,2,2,2]', () => {
  expect(frequencySort([1, 1, 2, 2, 2, 3])).toEqual([3, 1, 1, 2, 2, 2])
})

test('if input = [2,3,1,3,2], then output = [1,3,3,2,2]', () => {
  expect(frequencySort([2, 3, 1, 3, 2])).toEqual([1, 3, 3, 2, 2])
})

test('if input = [-1,1,-6,4,5,-6,1,4,1], then output = [5,-1,4,4,-6,-6,1,1,1]', () => {
  expect(frequencySort([-1, 1, -6, 4, 5, -6, 1, 4, 1])).toEqual([
    5, -1, 4, 4, -6, -6, 1, 1, 1,
  ])
})
