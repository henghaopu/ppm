/* eslint-disable no-use-before-define */
/*
   Given the root of a binary tree, return the level order traversal of its
   nodes' values. (i.e., from left to right, level by level).
 
    e.g., input:
              1
            /   \  
          2      3
        /  \   /  \
       4    5  6   7
    output: [[1],[2,3],[4,5,6,7]]

  Q: how do we know when will we collect all the vales in the current level?
  A: remember the currentLength at the right time!

  current queue: [1]
  remember the currentLength: 1
  dequeue currentLength times to accumulate the vals in the current level
    dequeue 1 and enqueue children 2 & 3 - queue: [2,3]
    push 1 into valsAtCurrLevel: [1]
  push valsAtCurrLevel into output [[1]]

  current queue: [2,3]
  remember the currentLength: 2
  dequeue currentLength times to accumulate the vals in the current level
    dequeue 2 and enqueue children 4 & 5 - queue: [3,4,5]
    push 2 into valsAtCurrLevel: [2]
    dequeue 3 and queue children 6 &7 - queue: [4,5,6,7]
    push 3 into valsAtCurrLevel: [2,3]
  push valsAtCurrLevel into output [[1], [2,3]]

  ...repeat the process until the queue is empty
 */
function binaryTreeLevelOrder1(root: TreeNode): number[][] {
  const output: number[][] = []
  const queue = root ? [root] : []

  while (queue.length) {
    const amountOfNodesInTheCurrentLevel = queue.length
    const valsInCurrLevel: number[] = []
    for (let i = 0; i < amountOfNodesInTheCurrentLevel; i += 1) {
      const dequeuedNode = queue.shift() as TreeNode
      if (dequeuedNode.left) queue.push(dequeuedNode.left)
      if (dequeuedNode.right) queue.push(dequeuedNode.right)
      valsInCurrLevel.push(dequeuedNode.val)
    }
    output.push(valsInCurrLevel)
  }

  return output
}

/*
  input:
              1
            /   \  
          2      3
        /  \   /  \
       4    5  6   7

  output: [[1],[2,3],[4,5,6,7]]



*/
function binaryTreeLevelOrder2(root: TreeNode): number[][] {
  const output: number[][] = []

  function recursiveTraverse(node: TreeNode, level: number) {
    // base case
    if (!node) return

    if (output[level]) output[level].push(node.val)
    else output[level] = [node.val]

    // doesn't actually need the if condition since we've had the base case
    if (node.left) recursiveTraverse(node.left, level + 1)
    if (node.right) recursiveTraverse(node.right, level + 1)
  }
  recursiveTraverse(root, 0)

  return output
}

class TreeNode {
  val: number

  left?: TreeNode

  right?: TreeNode

  // eslint-disable-next-line default-param-last
  constructor(val = 0, left?: TreeNode, right?: TreeNode) {
    this.val = val
    this.left = left
    this.right = right
  }
}

export { binaryTreeLevelOrder1, binaryTreeLevelOrder2, TreeNode }
