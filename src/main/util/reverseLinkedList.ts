export type ListNode = {
  val: number
  next?: ListNode
}

/**
 *            1    ->    2    ->    3
 *          head
 *
 * ------------ Initial Setup ------------
 *  null       1    ->    2    ->    3
 *  prev    curr         next
 * ---------------------------------------
 *
 *  operation:
 *
 *    curr.next = prev  // null  <-  1      2  ->  3  (same pattern showed up)
 *
 *    move prev, curr, next and repeat the process
 *    until curr === null
 *    return prev
 */
function reverseLinkedList1(head: ListNode | undefined): ListNode | undefined {
  let prev
  let curr = head
  let next = curr?.next

  while (curr) {
    // create a new link
    curr.next = prev
    // move pointers
    prev = curr
    curr = next
    next = next?.next
  }

  return prev
}

/**
 *
 * undefined     1    ->    2    ->    3
 *   prev      head
 *
 * undefined  <- 1          2    ->    3
 *   prev      head
 *
 */
function reverseLinkedList2(head: ListNode | undefined): ListNode | undefined {
  function recurReverseLinkedList(
    prev: ListNode | undefined,
    curr: ListNode | undefined,
  ): ListNode | undefined {
    // base case
    if (!curr) return prev

    // recursive case
    const next = curr?.next //  store next for the next recursion
    // create a new link
    let newCurr: ListNode | undefined = curr
    newCurr.next = prev
    // run the next recursion with the updated input
    const newPrev = curr
    newCurr = next
    return recurReverseLinkedList(newPrev, newCurr)
  }

  return recurReverseLinkedList(undefined, head)
}

export { reverseLinkedList1, reverseLinkedList2 }
