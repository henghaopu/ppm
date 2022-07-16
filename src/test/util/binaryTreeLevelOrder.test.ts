import {
  binaryTreeLevelOrder1,
  binaryTreeLevelOrder2,
  TreeNode,
} from 'main/util/binaryTreeLevelOrder'

/*
              1
            /   \  
          2      3
                /  \
               4    5

*/
test('return [[1], [2,3], [4,5]]', () => {
  const node1 = new TreeNode(1)
  const node2 = new TreeNode(2)
  const node3 = new TreeNode(3)
  const node4 = new TreeNode(4)
  const node5 = new TreeNode(5)
  node1.left = node2
  node1.right = node3
  node3.left = node4
  node3.right = node5
  expect(binaryTreeLevelOrder1(node1)).toEqual([[1], [2, 3], [4, 5]])
  expect(binaryTreeLevelOrder2(node1)).toEqual([[1], [2, 3], [4, 5]])
})
