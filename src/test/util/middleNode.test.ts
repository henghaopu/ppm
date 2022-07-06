import { middleNode1, middleNode2, ListNode } from 'main/util/middleNode'

test('the middle node of the linked list 1->2->3->4->5 is 3', () => {
  const node1 = new ListNode(1)
  const node2 = new ListNode(2)
  const node3 = new ListNode(3)
  const node4 = new ListNode(4)
  const node5 = new ListNode(5)
  node1.next = node2
  node2.next = node3
  node3.next = node4
  node4.next = node5
  expect(middleNode1(node1)).toEqual(node3)
  expect(middleNode2(node1)).toEqual(node3)
})

test('the middle node of the linked list 1->2->3->4->5->6 is 4', () => {
  const node1 = new ListNode(1)
  const node2 = new ListNode(2)
  const node3 = new ListNode(3)
  const node4 = new ListNode(4)
  const node5 = new ListNode(5)
  const node6 = new ListNode(6)
  node1.next = node2
  node2.next = node3
  node3.next = node4
  node4.next = node5
  node5.next = node6
  expect(middleNode1(node1)).toEqual(node4)
  expect(middleNode2(node1)).toEqual(node4)
})
