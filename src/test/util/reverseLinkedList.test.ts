import {
  reverseLinkedList1,
  reverseLinkedList2,
  ListNode,
} from 'main/util/reverseLinkedList'

test('reversed linked list 1->2->3 is 3->2->1', () => {
  const linkedList: ListNode = {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: undefined,
      },
    },
  }

  const expected: ListNode = {
    val: 3,
    next: {
      val: 2,
      next: {
        val: 1,
        next: undefined,
      },
    },
  }

  expect(reverseLinkedList1(linkedList)).toEqual(expected)
  // expect(reverseLinkedList2(linkedList)).toEqual(expected)
})

test('reversed linked list 1->2->3 is 3->2->1', () => {
  const linkedList: ListNode = {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: undefined,
      },
    },
  }

  const expected: ListNode = {
    val: 3,
    next: {
      val: 2,
      next: {
        val: 1,
        next: undefined,
      },
    },
  }

  // expect(reverseLinkedList1(linkedList)).toEqual(expected)
  expect(reverseLinkedList2(linkedList)).toEqual(expected)
})

test('reversed empty linked list is empty linked list', () => {
  expect(reverseLinkedList1(undefined)).toBe(undefined)
  expect(reverseLinkedList2(undefined)).toBe(undefined)
})

test('reversed [1] is still [1]', () => {
  const linkedList = {
    val: 1,
    next: undefined,
  }
  const expected = {
    val: 1,
    next: undefined,
  }

  expect(reverseLinkedList1(linkedList)).toEqual(expected)
  expect(reverseLinkedList2(linkedList)).toEqual(expected)
})
