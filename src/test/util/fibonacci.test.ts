import { fib1, fib2, fib3 } from 'main/util/fibonacci'

test('fib(0) is 0', () => {
  expect(fib1(0)).toBe(0)
  expect(fib2(0)).toBe(0)
  expect(fib3(0)).toBe(0)
})

test('fib(1) is 1', () => {
  expect(fib1(1)).toBe(1)
  expect(fib2(1)).toBe(1)
  expect(fib3(1)).toBe(1)
})

test('fib(2) is 1', () => {
  expect(fib1(2)).toBe(1)
  expect(fib2(2)).toBe(1)
  expect(fib3(2)).toBe(1)
})

test('fib(3) is 2', () => {
  expect(fib1(3)).toBe(2)
  expect(fib2(3)).toBe(2)
  expect(fib3(3)).toBe(2)
})

test('fib(4) is 3', () => {
  expect(fib1(4)).toBe(3)
  expect(fib2(4)).toBe(3)
  expect(fib3(4)).toBe(3)
})

test('fib(5) is 5', () => {
  expect(fib1(5)).toBe(5)
  expect(fib2(5)).toBe(5)
  expect(fib3(5)).toBe(5)
})
