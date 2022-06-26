import Queue from 'main/util/queue'

test('if enqueue works', () => {
  const queue = new Queue()
  queue.enqueue(2)
  queue.enqueue(4)
  queue.enqueue(6)

  expect(queue.size()).toBe(3)

  expect(queue.dequeue()).toBe(2)
  expect(queue.size()).toBe(2)

  expect(queue.dequeue()).toBe(4)
  expect(queue.size()).toBe(1)

  expect(queue.dequeue()).toBe(6)
  expect(queue.size()).toBe(0)

  expect(queue.dequeue()).toBe(undefined)
  expect(queue.size()).toBe(0)
})
