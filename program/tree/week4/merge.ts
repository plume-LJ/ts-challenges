import { TreeNode } from "../node";
function mergeTrees(
  root1: TreeNode | null,
  root2: TreeNode | null
): TreeNode | null {
  if (root1 === null) return root2;
  if (root2 === null) return root1;
  const resNode: TreeNode = new TreeNode(root1.val + root2.val);
  resNode.left = mergeTrees(root1.left, root2.left);
  resNode.right = mergeTrees(root1.right, root2.right);
  return resNode;
}
function stackMergeTrees(
  root1: TreeNode | null,
  root2: TreeNode | null
): TreeNode | null {
  if (root1 === null) return root2;
  if (root2 === null) return root1;
  const helperQueue1: TreeNode[] = [],
    helperQueue2: TreeNode[] = [];
  helperQueue1.push(root1);
  helperQueue2.push(root2);
  let tempNode1: TreeNode, tempNode2: TreeNode;
  while (helperQueue1.length > 0) {
    tempNode1 = helperQueue1.shift()!;
    tempNode2 = helperQueue2.shift()!;
    tempNode1.val += tempNode2.val;
    if (tempNode1.left !== null && tempNode2.left !== null) {
      helperQueue1.push(tempNode1.left);
      helperQueue2.push(tempNode2.left);
    } else if (tempNode1.left === null) {
      tempNode1.left = tempNode2.left;
    }
    if (tempNode1.right !== null && tempNode2.right !== null) {
      helperQueue1.push(tempNode1.right);
      helperQueue2.push(tempNode2.right);
    } else if (tempNode1.right === null) {
      tempNode1.right = tempNode2.right;
    }
  }
  return root1;
}
