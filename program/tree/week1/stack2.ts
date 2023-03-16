import { TreeNode } from "../node";

// 前序遍历（迭代法）
function preorderTraversal(root: TreeNode | null): number[] {
  let helperStack: (TreeNode | null)[] = [];
  let res: number[] = [];
  let curNode: TreeNode | null;
  if (root === null) return res;
  helperStack.push(root);
  while (helperStack.length > 0) {
    curNode = helperStack.pop()!;
    if (curNode !== null) {
      if (curNode.right !== null) helperStack.push(curNode.right);
      if (curNode.left !== null) helperStack.push(curNode.left);
      helperStack.push(curNode);
      helperStack.push(null);
    } else {
      curNode = helperStack.pop()!;
      res.push(curNode.val);
    }
  }
  return res;
}

// 中序遍历（迭代法）
function inorderTraversal(root: TreeNode | null): number[] {
  let helperStack: (TreeNode | null)[] = [];
  let res: number[] = [];
  let curNode: TreeNode | null;
  if (root === null) return res;
  helperStack.push(root);
  while (helperStack.length > 0) {
    curNode = helperStack.pop()!;
    if (curNode !== null) {
      if (curNode.right !== null) helperStack.push(curNode.right);
      helperStack.push(curNode);
      helperStack.push(null);
      if (curNode.left !== null) helperStack.push(curNode.left);
    } else {
      curNode = helperStack.pop()!;
      res.push(curNode.val);
    }
  }
  return res;
}

// 后序遍历（迭代法）
function postorderTraversal(root: TreeNode | null): number[] {
  let helperStack: (TreeNode | null)[] = [];
  let res: number[] = [];
  let curNode: TreeNode | null;
  if (root === null) return res;
  helperStack.push(root);
  while (helperStack.length > 0) {
    curNode = helperStack.pop()!;
    if (curNode !== null) {
      helperStack.push(curNode);
      helperStack.push(null);
      if (curNode.right !== null) helperStack.push(curNode.right);
      if (curNode.left !== null) helperStack.push(curNode.left);
    } else {
      curNode = helperStack.pop()!;
      res.push(curNode.val);
    }
  }
  return res;
}

let treeNode = new TreeNode(2)
treeNode.left = new TreeNode(3)
treeNode.right = new TreeNode(6)
treeNode.right.left = new TreeNode(7)
treeNode.right.right = new TreeNode(8)
treeNode.left.left = new TreeNode(5)
treeNode.left.right = new TreeNode(4)
console.log(inorderTraversal(treeNode))