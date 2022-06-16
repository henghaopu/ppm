import getRandomInt from 'main/util/getRandomInt'

test('getRandomInt(1, 100) always returns a number in [1, 100)', () => {
  // [1, 2, ..., 100]
  const expectedRange = [...Array(100).keys()].map((value) => value + 1)

  for (let i = 0; i < 10000; i += 1) {
    const result = getRandomInt(1, 100)
    expect(expectedRange.includes(result)).toBe(true)
  }
})
