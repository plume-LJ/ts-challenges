import { TreeNode } from "program/tree/node";

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (preorder.length === 0) {
    return null;
  }

  const root = new TreeNode(preorder[0]);
  const rootIndex = inorder.indexOf(preorder[0]!);
  const leftInorder = inorder.slice(0, rootIndex);
  const rightInorder = inorder.slice(rootIndex + 1);
  const leftPreorder = preorder.slice(1, rootIndex + 1);
  const rightPreorder = preorder.slice(rootIndex + 1);

  root.left = buildTree(leftPreorder, leftInorder);
  root.right = buildTree(rightPreorder, rightInorder);

  return root;
}

console.log(
  buildTree(
    [1,2,4,8,9,5,3,6,7,10,11],
    [8,4,9,2,5,1,6,3,10,7,11]
  )
);
