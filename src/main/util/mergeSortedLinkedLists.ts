export type ListNode = {
  val: number
  next?: ListNode
}
/**
 * You are given the heads of two sorted linked lists list1 and list2.
 *
 * Merge the two lists in a one sorted list.
 *
 * Return the head of the merged linked list.
 *
 * e.g.,
 * Input: list1 = [1,2,4], list2 = [1,3,4]
 * Output: [1,1,2,3,4,4]
 *
 *
 * Initial state:
 *
 *    1    ->    2    ->    4               1    ->    3    ->    4
 *    ↑                                     ↑
 *   list1                                list2
 *    ↑                                     ↑
 *   curr1                                curr2
 *
 *
 *    -1
 *     ↑
 *    hat
 *     ↑
 *   curr
 *
 */
const mergeSortedLinkedLists1 = (
  list1?: ListNode,
  list2?: ListNode,
): ListNode | undefined => {
  let curr1 = list1
  let curr2 = list2
  const hat: ListNode = { val: -1, next: undefined }
  let curr: ListNode | undefined = hat

  while (curr1 && curr2) {
    if (curr1.val < curr2.val) {
      ;(curr as ListNode).next = curr1 // link two nodes
      curr1 = curr1.next // move curr1 to the next
    } else {
      ;(curr as ListNode).next = curr2 // link two nodes
      curr2 = curr2.next // move curr2 to the next
    }
    curr = (curr as ListNode).next // move curr to the next
  }
  // https://prettier.io/docs/en/rationale.html#semicolons
  // if we can reach here, at least one list now is empty. just link the rest
  ;(curr as ListNode).next = curr1 || curr2
  // return head
  return hat.next
}

/**
 *     1    ->    2    ->    4
 *     ↑
 *   list1
 *
 *     1    ->    3    ->    4
 *   list2
 *
 *    1  ->  2      4
 *    ↑      ↓      ↑
 *    1      3  ->  4
 */
const mergeSortedLinkedLists2 = (
  list1?: ListNode,
  list2?: ListNode,
): ListNode | undefined => {
  if (!list1) return list2
  if (!list2) return list1

  // if we can reach this far, list1 and list2 both exist
  if (list1.val < list2.val) {
    const head = list1
    const curr = list1
    curr.next = mergeSortedLinkedLists2(curr.next, list2)
    return head
  }
  const head = list2
  const curr = list2
  curr.next = mergeSortedLinkedLists2(list1, curr.next)
  return head
}

export { mergeSortedLinkedLists1, mergeSortedLinkedLists2 }
