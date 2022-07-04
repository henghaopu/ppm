import { hasCycle, ListNode } from 'main/util/hasCycle'

test('n1->n2->n3->n4->n2 has a circular linked list', () => {
  const node1 = new ListNode(1)
  const node2 = new ListNode(2)
  const node3 = new ListNode(3)
  const node4 = new ListNode(4)
  node1.next = node2
  node2.next = node3
  node3.next = node4
  node4.next = node2

  expect(hasCycle(node1)).toBe(true)
})

test('n1->n2->n1 has a circular linked list', () => {
  const node1 = new ListNode(1)
  const node2 = new ListNode(2)
  node1.next = node2
  node2.next = node1

  expect(hasCycle(node1)).toBe(true)
})

test('n1->n2 has no circular linked list', () => {
  const node1 = new ListNode(1)
  const node2 = new ListNode(2)
  node1.next = node2

  expect(hasCycle(node1)).toBe(false)
})

test('empty list item has no circular linked list', () => {
  expect(hasCycle()).toBe(false)
})
