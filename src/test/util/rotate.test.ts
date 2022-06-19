import rotate from 'main/util/rotate'

test('rotate [[1,2,3],[4,5,6],[7,8,9]] results in [[7,4,1],[8,5,2],[9,6,3]]', () => {
  expect(
    rotate([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]),
  ).toEqual([
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3],
  ])
})

test('rotate another matrix', () => {
  expect(
    rotate([
      [5, 1, 9, 11],
      [2, 4, 8, 10],
      [13, 3, 6, 7],
      [15, 14, 12, 16],
    ]),
  ).toEqual([
    [15, 13, 2, 5],
    [14, 3, 4, 1],
    [12, 6, 8, 9],
    [16, 7, 10, 11],
  ])
})
