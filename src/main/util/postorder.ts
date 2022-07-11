/* eslint-disable no-use-before-define */

/*
                   1→ f(1)
            /      |       \
          2→ f(2)  3→ f(3)  4→ f(4)
       /     \
    5→ f(5)   6→ f(6)
                                    return [5,6,2,3,4,1]

    f(): traverse function
      - push val into output
      - do nothing if node doesn't exist
      - call itself with every child nodes

*/

function postorder(root: TreeNode): number[] {
  // step 2: define the output
  const output: number[] = []
  // step 1: define the recursive function
  function traverse(node: TreeNode) {}
  // step 1: call the recursive function and pass in the first node
  traverse(root)
  // step 2: return the output
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
