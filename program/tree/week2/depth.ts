import { TreeNode } from "../node";
/**
 * 二叉树节点的深度：指从根节点到该节点的最长简单路径边的条数或者节点数（取决于深度从0开始还是从1开始）
 * 二叉树节点的高度：指从该节点到叶子节点的最长简单路径边的条数后者节点数（取决于高度从0开始还是从1开始）
 * 1. 明确递归函数的参数和返回值
 * 2. 明确终止条件
 * 3. 明确单层递归的逻辑
 */
// 后续遍历（自下而上）
function postMaxDepth(root: TreeNode | null): number {
  if (root === null) return 0;
  return Math.max(postMaxDepth(root.left), postMaxDepth(root.right)) + 1;
}

// 前序遍历(自上而下)
function preMaxDepth(root: TreeNode | null): number {
  function recur(node: TreeNode | null, count: number) {
    if (node === null) {
      resMax = resMax > count ? resMax : count;
      return;
    }
    recur(node.left, count + 1);
    recur(node.right, count + 1);
  }
  let resMax: number = 0;
  let count: number = 0;
  recur(root, count);
  return resMax;
}

// 层序遍历（迭代法）
function levelMaxDepth(root: TreeNode | null): number {
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

// 后续遍历（自下而上）
function postNMaxDepth(root: TreeNode | null): number {
  if (root === null) return 0;
  return Math.max(postNMaxDepth(root.left), postNMaxDepth(root.right)) + 1;
}

// 前序遍历(自上而下)
function preNMaxDepth(root: TreeNode | null): number {
  function recur(node: TreeNode | null, count: number) {
    if (node === null) {
      resMax = resMax > count ? resMax : count;
      return;
    }
    recur(node.left, count + 1);
    recur(node.right, count + 1);
  }
  let resMax: number = 0;
  let count: number = 0;
  recur(root, count);
  return resMax;
}

function minDepth(root: TreeNode | null): number {
  if (root === null) return 0;
  if (root.left !== null && root.right === null) {
      return 1 + minDepth(root.left);
  }
  if (root.left === null && root.right !== null) {
      return 1 + minDepth(root.right);
  }
  return 1 + Math.min(minDepth(root.left), minDepth(root.right));
}
function levelMinDepth(root: TreeNode | null): number {
  let helperQueue: TreeNode[] = [];
  let resMin: number = 0;
  let tempNode: TreeNode;
  if (root !== null) helperQueue.push(root);
  while (helperQueue.length > 0) {
      resMin++;
      for (let i = 0, length = helperQueue.length; i < length; i++) {
          tempNode = helperQueue.shift()!;
          if (tempNode.left === null && tempNode.right === null) return resMin;
          if (tempNode.left !== null) helperQueue.push(tempNode.left);
          if (tempNode.right !== null) helperQueue.push(tempNode.right);
      }
  }
  return resMin;
};

let treeNode = new TreeNode(2);
treeNode.left = new TreeNode(3);
treeNode.right = new TreeNode(6);
treeNode.right.left = new TreeNode(7);
treeNode.right.right = new TreeNode(8);
treeNode.left.left = new TreeNode(5);
treeNode.left.right = new TreeNode(4);
treeNode.left.right.right = new TreeNode(4);
console.log(levelMaxDepth(treeNode));
