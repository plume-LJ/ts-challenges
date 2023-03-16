import { TreeNode } from "../node";

function countNodes(root: TreeNode | null): number {
  if (root === null) return 0;
  return 1 + countNodes(root.left) + countNodes(root.right);
};
function stackCountNodes(root: TreeNode | null): number {
  let helperQueue: TreeNode[] = [];
  let resCount: number = 0;
  let tempNode: TreeNode;
  if (root !== null) helperQueue.push(root);
  while (helperQueue.length > 0) {
      for (let i = 0, length = helperQueue.length; i < length; i++) {
          tempNode = helperQueue.shift()!;
          resCount++;
          if (tempNode.left) helperQueue.push(tempNode.left);
          if (tempNode.right) helperQueue.push(tempNode.right);
      }
  }
  return resCount;
};
function fullCountNodes(root: TreeNode | null): number {
  if (root === null) return 0;
  let left: number = 0,
      right: number = 0;
  let curNode: TreeNode | null= root;
  while (curNode !== null) {
      left++;
      curNode = curNode.left;
  }
  curNode = root;
  while (curNode !== null) {
      right++;
      curNode = curNode.right;
  }
  if (left === right) {
      return 2 ** left - 1;
  }
  return 1 + countNodes(root.left) + countNodes(root.right);
};