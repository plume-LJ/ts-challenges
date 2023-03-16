import { TreeNode } from "../node";

// 递归法
function isBalanced(root: TreeNode | null): boolean {
  function getDepth(root: TreeNode | null): number {
    if (root === null) return 0;
    let leftDepth: number = getDepth(root.left);
    if (leftDepth === -1) return -1;
    let rightDepth: number = getDepth(root.right);
    if (rightDepth === -1) return -1;
    if (Math.abs(leftDepth - rightDepth) > 1) return -1;
    return 1 + Math.max(leftDepth, rightDepth);
  }
  return getDepth(root) !== -1;
}

function stackIsBlanced(root: TreeNode | null): boolean {
  // 层序遍历（迭代法）
  function levelMaxDepth(root: TreeNode | null): number {
    if (root === null) return 0;
    let helperQueue: TreeNode[] = [];
    let resDepth: number = 0;
    let tempNode: TreeNode;
    if (root !== null) helperQueue.push(root);
    while (helperQueue.length > 0) {
      resDepth++;
      for (let i = 0, length = helperQueue.length; i < length; i++) {
        tempNode = helperQueue.shift()!;
        if (tempNode.left) helperQueue.push(tempNode.left);
        if (tempNode.right) helperQueue.push(tempNode.right);
      }
    }
    return resDepth;
  }

  if (root === null) return true;
  let stack: (TreeNode | null)[] = [];
  stack.push(root);
  while (stack.length > 0) {
    let cur = stack.pop()!;
    if (Math.abs(levelMaxDepth(root.left) - levelMaxDepth(root.right)) > 1)
      return false;
    if (cur !== null) {
      stack.push(cur.left);
      stack.push(cur.right);
    }
  }
  return true;
}

let treeNode = new TreeNode(2);
treeNode.left = new TreeNode(3);
treeNode.right = new TreeNode(6);
treeNode.right.left = new TreeNode(7);
treeNode.right.right = new TreeNode(8);
treeNode.left.left = new TreeNode(5);
treeNode.left.right = new TreeNode(4);
treeNode.left.right.right = new TreeNode(4);
treeNode.left.right.right.left = new TreeNode(4);
console.log(stackIsBlanced(treeNode));
