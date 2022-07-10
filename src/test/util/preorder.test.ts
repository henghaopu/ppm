import { preorder1, preorder2, TreeNode } from 'main/util/preorder'
/*
 *          ←1
 *        /     \
 *     ←2       ←3
 *    /   \      /  \
 *  ←4    ←5   ←6   ←7
 */
test('traverse the tree nodes in preorder', () => {
  const node1 = new TreeNode(1)
  const node2 = new TreeNode(2)
  const node3 = new TreeNode(3)
  const node4 = new TreeNode(4)
  const node5 = new TreeNode(5)
  const node6 = new TreeNode(6)
  const node7 = new TreeNode(7)

  node1.children.push(node2)
  node1.children.push(node3)

  node2.children.push(node4)
  node2.children.push(node5)

  node3.children.push(node6)
  node3.children.push(node7)

  expect(preorder1(node1)).toEqual([1, 2, 4, 5, 3, 6, 7])
  expect(preorder2(node1)).toEqual([1, 2, 4, 5, 3, 6, 7])
})
