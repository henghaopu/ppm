/* eslint-disable no-restricted-syntax */
/* eslint-disable no-use-before-define */

/*
                   1→ f(1)
            /      |       \
          2→ f(2)  3→ f(3)  4→ f(4)
       /     \
    5→ f(5)   6→ f(6)
                                    return [5,6,2,3,4,1]

    f(): traverse function
      1. do nothing if node doesn't exist
      2. call itself with every child nodes
      3. push val into output

*/

function postorder(root: TreeNode): number[] {
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

// Definition for node
class TreeNode {
  val: number

  children: TreeNode[]

  constructor(val?: number) {
    this.val = val === undefined ? 0 : val
    this.children = []
  }
}

export { postorder, TreeNode }
