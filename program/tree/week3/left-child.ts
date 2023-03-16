import { TreeNode } from "../node";

function findBottomLeftValue(root: TreeNode | null): number {
  function recur(root: TreeNode, depth: number): void {
      if (root.left === null && root.right === null) {
          if (depth > maxDepth) {
              maxDepth = depth;
              resVal = root.val;
          }
          return;
      }
      if (root.left !== null) recur(root.left, depth + 1);
      if (root.right !== null) recur(root.right, depth + 1);
  }
  let maxDepth: number = 0;
  let resVal: number = 0;
  if (root === null) return resVal;
  recur(root, 1);
  return resVal;
};

function stackFindBottomLeftValue(root: TreeNode | null): number {
  let helperQueue: TreeNode[] = [];
  if (root !== null) helperQueue.push(root);
  let resVal: number = 0;
  let tempNode: TreeNode;
  while (helperQueue.length > 0) {
      resVal = helperQueue[0].val;
      for (let i = 0, length = helperQueue.length; i < length; i++) {
          tempNode = helperQueue.shift()!;
          if (tempNode.left !== null) helperQueue.push(tempNode.left);
          if (tempNode.right !== null) helperQueue.push(tempNode.right);
      }
  }
  return resVal;
};

function stack1FindBottomLeftValue(root: TreeNode | null): number {
  let helperQueue: TreeNode[] = [];
  if (root !== null) helperQueue.push(root);
  let resVal: number = 0;
  let tempNode: TreeNode;
  while (helperQueue.length > 0) {
      // resVal = helperQueue[0].val;
      for (let i = 0, length = helperQueue.length; i < length; i++) {
          tempNode = helperQueue.shift()!;
          
          if (tempNode.right !== null) helperQueue.push(tempNode.right);
          if (tempNode.left !== null) helperQueue.push(tempNode.left);
          resVal = tempNode.val
      }
  }
  return resVal;
};

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
console.log(stack1FindBottomLeftValue(treeNode));