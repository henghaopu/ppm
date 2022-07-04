class ListNode {
  val: number

  // eslint-disable-next-line no-use-before-define
  next?: ListNode

  constructor(val: number, next?: ListNode) {
    this.val = val
    this.next = next
  }
}

/**
 * Given head, the head of a linked list, determine if the linked list has a
 * cycle in it.
 *
 * There is a cycle in a linked list if there is some node in the list that can
 * be reached again by continuously following the next pointer.
 *
 * Return true if there is a cycle in the linked list. Otherwise, return false.
 */

const hasCycle = (head?: ListNode): boolean => {
  let slow = head
  let fast = head

  while (slow && fast) {
    slow = slow.next
    fast = fast.next?.next
    // fast catches slow
    if (fast === slow) {
      return true
    }
  }
  return false
}

export { hasCycle, ListNode }
