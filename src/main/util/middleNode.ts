class ListNode {
  val?: number

  // eslint-disable-next-line no-use-before-define
  next?: ListNode

  constructor(val?: number, next?: ListNode) {
    this.val = val
    this.next = next
  }
}

/**
 * Given the head of a singly linked list, return the middle node of the linked
 * list.
 *
 * If there are two middle nodes, return the second middle node.
 *
 * Constraints:
 * The number of nodes in the list is in the range [1, 100].
 * 1 <= Node.val <= 100
 *
 * Example:
 * 1->2->3->4->5      5
 * 0  1  2
 *       ↑            5 / 2 = 2.5 -> 2 (floor)
 * 1->2->3->4->5->6   6
 * 0  1  2  3
 *          ↑         6 / 2 = 3
 */
const middleNode1 = (head?: ListNode): ListNode | undefined => {
  // traverse to the end -> got the length  O(n)
  // traverse again with Math.floor(length / 2) steps O(n/2)

  let listLength = 0
  let curr = head
  while (curr) {
    // count the list length
    listLength += 1
    // move to the next
    curr = curr.next
  }

  curr = head
  const middleIndex = Math.floor(listLength / 2)
  for (let i = 0; i < middleIndex; i += 1) {
    curr = curr?.next
  }
  return curr
}

const middleNode2 = (head?: ListNode): ListNode | undefined => {
  // 1->2->3->4->5
  //       ↑
  //             ↑      stop when fast.next = undefined     O(n/2)
  // 1->2->3->4->5->6
  //          ↑
  //                   ↑  stop when fast = undefined

  let slow = head
  let fast = head
  // keep going when !(!fast || !(fast.next)) = (fast && fast.next)
  while (fast && fast.next) {
    slow = slow?.next
    fast = fast.next?.next
  }

  return slow
}

export { middleNode1, middleNode2, ListNode }
