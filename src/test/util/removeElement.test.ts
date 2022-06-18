import removeElement from 'main/util/removeElement'

test('if we want to remove all the 3s from [2,3,4,3,1,1,3], it will return that there are 4 elements left', () => {
  expect(removeElement([2, 3, 4, 3, 1, 1, 3], 3)).toBe(4)
})
