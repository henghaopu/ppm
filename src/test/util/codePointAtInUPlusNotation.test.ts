import codePointAtInUPlusNotation from 'main/util/codePointAtInUPlusNotation'

test('Unicode of "A" is "U+0041"', () => {
  expect(codePointAtInUPlusNotation('Apple', 0)).toBe('U+0041')
})

test('invalid position should throw an error', () => {
  expect(() => {
    codePointAtInUPlusNotation('Apple', -1)
  }).toThrow('The char position is not valid.')
})
