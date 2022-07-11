import { postorder, TreeNode } from 'main/util/postorder'

/**
               1→
            /  |  \
          2→  3→  4→
         / \  
        5→  6→
 */
test('the result is [5,6,2,3,4,1]', () => {
  const node1 = new TreeNode(1)
  const node2 = new TreeNode(2)
  const node3 = new TreeNode(3)
  const node4 = new TreeNode(4)
  const node5 = new TreeNode(5)
  const node6 = new TreeNode(6)
  node1.children.push(node2)
  node1.children.push(node3)
  node1.children.push(node4)
  node2.children.push(node5)
  node2.children.push(node6)

  expect(postorder(node1)).toEqual([5, 6, 2, 3, 4, 1])
})
