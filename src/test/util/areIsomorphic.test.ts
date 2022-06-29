import areIsomorphic from 'main/util/areIsomorphic'

test('"egg" and "add" are isomorphic', () => {
  expect(areIsomorphic('egg', 'add')).toBe(true)
})

test('"paper" and "title" are isomorphic', () => {
  expect(areIsomorphic('paper', 'title')).toBe(true)
})

test('"foo" and "bar" are not isomorphic', () => {
  expect(areIsomorphic('foo', 'bar')).toBe(false)
})

test('"abdc" and "babc" are not isomorphic', () => {
  expect(areIsomorphic('abdc', 'babc')).toBe(false)
})

test('"aaabbbab" and "bbbaaaab" are not isomorphic', () => {
  expect(areIsomorphic('aaabbbab', 'bbbaaaab')).toBe(false)
})
