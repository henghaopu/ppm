import {
  mergeSortedLinkedLists1,
  mergeSortedLinkedLists2,
  ListNode,
} from 'main/util/mergeSortedLinkedLists'

test('merge 1->2->4 and 1->3->4 would be 1->1->3->4', () => {
  const list1: ListNode = {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 4,
        next: undefined,
      } as ListNode,
    } as ListNode,
  }
  const list2: ListNode = {
    val: 1,
    next: {
      val: 3,
      next: {
        val: 4,
        next: undefined,
      } as ListNode,
    } as ListNode,
  }
  const expected: ListNode = {
    val: 1,
    next: {
      val: 1,
      next: {
        val: 2,
        next: {
          val: 3,
          next: {
            val: 4,
            next: {
              val: 4,
              next: undefined,
            } as ListNode,
          } as ListNode,
        } as ListNode,
      } as ListNode,
    } as ListNode,
  }

  const result1 = mergeSortedLinkedLists1(list1, list2)
  // const result2 = mergeSortedLinkedLists2(list1, list2)

  expect(result1).toEqual(expected)
  // expect(result2).toEqual(expected)
})

test('merge 1->2->4 and 1->3->4 would be 1->1->3->4', () => {
  const list1: ListNode = {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 4,
        next: undefined,
      } as ListNode,
    } as ListNode,
  }
  const list2: ListNode = {
    val: 1,
    next: {
      val: 3,
      next: {
        val: 4,
        next: undefined,
      } as ListNode,
    } as ListNode,
  }
  const expected: ListNode = {
    val: 1,
    next: {
      val: 1,
      next: {
        val: 2,
        next: {
          val: 3,
          next: {
            val: 4,
            next: {
              val: 4,
              next: undefined,
            } as ListNode,
          } as ListNode,
        } as ListNode,
      } as ListNode,
    } as ListNode,
  }

  // [Circular]?
  // const result1 = mergeSortedLinkedLists1(list1, list2)
  const result2 = mergeSortedLinkedLists2(list1, list2)

  // expect(result1).toEqual(expected)
  expect(result2).toEqual(expected)
})

test('merge two empty lists gets an empty list', () => {
  expect(mergeSortedLinkedLists1(undefined, undefined)).toBe(undefined)
  expect(mergeSortedLinkedLists2(undefined, undefined)).toBe(undefined)
})

test('merge undefined and 1 gets 1', () => {
  const list1 = undefined
  const list2: ListNode = {
    val: 1,
    next: undefined,
  }
  const expected: ListNode = {
    val: 1,
    next: undefined,
  }

  const result1 = mergeSortedLinkedLists1(list1, list2)
  const result2 = mergeSortedLinkedLists2(list1, list2)

  expect(result1).toEqual(expected)
  expect(result2).toEqual(expected)
})
