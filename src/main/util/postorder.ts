/* eslint-disable no-restricted-syntax */
/* eslint-disable no-use-before-define */

/*
                     1→ f(1)
            /       |       \
           2→ f(2)  3→ f(3)  4→ f(4)
     /      \
    5→ f(5)  6→ f(6)
                                    return [5,6,2,3,4,1]

    f(): traverse function
      1. do nothing if node doesn't exist
      2. call itself with every child nodes
      3. push val into output

*/

function postorder1(root: TreeNode): number[] {
  const output: number[] = []

  function traverse(node: TreeNode) {
    if (!node) return

    for (const child of node.children) {
      traverse(child)
    }
    output.push(node.val)
  }

  traverse(root)

  return output
}
/*
            1→
      /   | \
      2→   3→ 4→ 
    / \     / \
    5→  6→  7→  8→
                    return [5,6, 2, 3, 7,8, 4, 1]

  stack=[1]
  pop one node: stack=[], output=[1]
  push children(left to right): stack=[2,3,4]
  pop one node: stack=[2,3], unshift into output=[4,1] "O(n)"
  push children: sack=[2,3,7,8]
  pop one node: stack= [2,3,7], unshift into output=[8,4,1]


  todo: optimize this slow unshift O(n)
*/
function postorder2(root: TreeNode): number[] {
  const output: number[] = []
  const stack: TreeNode[] = root ? [root] : []

  while (stack.length) {
    const poppedNode = stack.pop() as TreeNode
    output.unshift(poppedNode.val)
    for (const child of poppedNode.children) {
      stack.push(child)
    }
  }

  return output
}

// Definition for node
class TreeNode {
  val: number

  children: TreeNode[]

  constructor(val?: number) {
    this.val = val === undefined ? 0 : val
    this.children = []
  }
}

export { postorder1, postorder2, TreeNode }
