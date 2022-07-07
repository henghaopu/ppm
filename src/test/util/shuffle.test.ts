/* eslint-disable no-restricted-syntax */
import shuffle from 'main/util/shuffle'

test('shuffle [1,2,3]', () => {
  const input = [1, 2, 3]
  const map: Record<string, number> = {}
  for (let i = 0; i < 6000; i += 1) {
    const key = JSON.stringify(shuffle(input))
    map[key] = (map[key] ?? 0) + 1
  }

  // console.log(map)

  for (const value of Object.values(map)) {
    const roundedValue = Math.round(Math.abs(value / 1000)) * 1000
    expect(roundedValue).toBe(1000)
  }
})
