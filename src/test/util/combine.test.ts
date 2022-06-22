import combine from 'main/util/combine'

test('combination - select 2 items from unique item list [1,2,3] are [1,2], [1,3], and [2,3]', () => {
  expect(combine([3, 4, 5], 2)).toEqual([
    [3, 4],
    [3, 5],
    [4, 5],
  ])
})

test("combination - select 2 items from unique item list ['A','B','C','D'] are ['A','B'], ['A','C'], ['A','D'], ['B','C'], ['B','D'], ['C','D']", () => {
  expect(combine(['A', 'B', 'C', 'D'], 2)).toEqual([
    ['A', 'B'],
    ['A', 'C'],
    ['A', 'D'],
    ['B', 'C'],
    ['B', 'D'],
    ['C', 'D'],
  ])
})
