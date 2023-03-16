import { TreeNode } from "../node";

function path(node: TreeNode | null, target: number) {
  if (!node) return false;

  let flag = false;
  function recur(node: TreeNode, sum: number) {
    if (!node.left && !node.right) {
      if (sum + node.val === target) {
        flag = true;
        return;
      }
    }
    if (node.left) recur(node.left, sum + node.val);
    if (node.right) recur(node.right, sum + node.val);
  }
  return flag;
}
let treeNode = new TreeNode(2);
treeNode.left = new TreeNode(3);
treeNode.right = new TreeNode(6);
treeNode.right.left = new TreeNode(7);
treeNode.right.right = new TreeNode(8);
treeNode.left.left = new TreeNode(5);
treeNode.left.right = new TreeNode(4);
// treeNode.left.right.right = new TreeNode(55);
// treeNode.left.right.left = new TreeNode(54);
// treeNode.left.right.right.left = new TreeNode(4);
console.log(path(treeNode, 10));