/* eslint-disable no-restricted-syntax */
/* eslint-disable no-use-before-define */

/**
 * Given the root of an n-ary tree, return the preorder traversal of its
 * nodes' values.
 *
 *          ←1
 *        /     \
 *     ←2       ←3
 *    /   \      /  \
 *  ←4    ←5   ←6   ←7
 *                      return [1,2,4,5,3,6,7]
 *                      traverse concept: self -> left -> right
 *
 *
 */
function preorder1(root: TreeNode | null): number[] {
  const output: number[] = []

  function traverse(node: TreeNode | null) {
    if (!node) return

    output.push(node.val)

    for (const child of node.children) {
      traverse(child)
    }
  }

  traverse(root)

  return output
}

/*
              1
            / | \
          3   2   4
        /  \
       5    6
       
       
      initialize a stack = [root]
      pop one out and store: stack = [], 1
      push its children in backward: [4,2,3]
      repeat until the stack is empty
  
  */
function preorder2(root: TreeNode | null): number[] {
  const output: number[] = []
  const stack: TreeNode[] = root ? [root] : []

  while (stack.length) {
    const poppedNode = stack.pop() as TreeNode
    output.push(poppedNode.val)
    for (let i = poppedNode.children.length - 1; i >= 0; i -= 1) {
      stack.push(poppedNode.children[i])
    }
  }

  return output
}

// Definition for node.
class TreeNode {
  val: number

  children: TreeNode[]

  constructor(val?: number) {
    this.val = val === undefined ? 0 : val
    this.children = []
  }
}

export { preorder1, preorder2, TreeNode }
