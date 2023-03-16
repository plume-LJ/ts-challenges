import { TreeNode } from "../node";

// 递归法（前序遍历）
function preInvertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) return root;
  // let tempNode: TreeNode | null = root.left;
  [root.left, root.right] = [root.right, root.left];
  // root.right = tempNode;
  preInvertTree(root.left);
  preInvertTree(root.right);
  return root;
}

// 递归法（后序遍历）
function inInvertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) return root;
  inInvertTree(root.left);
  inInvertTree(root.right);
  // let tempNode: TreeNode | null = root.left;
  // root.left = root.right;
  // root.right = tempNode;
  [root.left, root.right] = [root.right, root.left];

  return root;
}

// 递归法（中序遍历）
function postInvertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) return root;
  postInvertTree(root.left);
  // let tempNode: TreeNode | null = root.left;
  // root.left = root.right;
  // root.right = tempNode;
  [root.left, root.right] = [root.right, root.left];

  // 因为左右节点已经进行交换，此时的root.left 是原先的root.right
  postInvertTree(root.left);
  return root;
}

// 迭代法（栈模拟前序遍历）
function stackInvertTree(root: TreeNode | null): TreeNode | null {
  let helperStack: TreeNode[] = [];
  let curNode: TreeNode,
      tempNode: TreeNode | null;
  if (root !== null) helperStack.push(root);
  while (helperStack.length > 0) {
      curNode = helperStack.pop()!;
      // 入栈操作最好在交换节点之前进行，便于理解
      if (curNode.right) helperStack.push(curNode.right);
      if (curNode.left) helperStack.push(curNode.left);
      [curNode.left, curNode.right] = [curNode.right, curNode.left];
  }
  return root;
};

// 迭代法（栈模拟中序遍历-统一写法形式）
function stackPreInvertTree(root: TreeNode | null): TreeNode | null {
  let helperStack: (TreeNode | null)[] = [];
  let curNode: TreeNode | null,
      tempNode: TreeNode | null;
  if (root !== null) helperStack.push(root);
  while (helperStack.length > 0) {
      curNode = helperStack.pop()!;
      if (curNode !== null) {
          if (curNode.right !== null) helperStack.push(curNode.right);
          helperStack.push(curNode);
          helperStack.push(null);
          if (curNode.left !== null) helperStack.push(curNode.left);
      } else {
          curNode = helperStack.pop()!;
          // tempNode = curNode.left;
          // curNode.left = curNode.right;
          // curNode.right = tempNode;
          [curNode.left, curNode.right] = [curNode.right, curNode.left];
      }
  }
  return root;
};

// 迭代法（栈模拟后序遍历-统一写法形式）
function stackInInvertTree(root: TreeNode | null): TreeNode | null {
  let helperStack: (TreeNode | null)[] = [];
  let curNode: TreeNode | null,
      tempNode: TreeNode | null;
  if (root !== null) helperStack.push(root);
  while (helperStack.length > 0) {
      curNode = helperStack.pop()!;
      if (curNode !== null) {
          helperStack.push(curNode);
          helperStack.push(null);
          if (curNode.right !== null) helperStack.push(curNode.right);
          if (curNode.left !== null) helperStack.push(curNode.left);
      } else {
          curNode = helperStack.pop()!;
          // tempNode = curNode.left;
          // curNode.left = curNode.right;
          // curNode.right = tempNode;
          [curNode.left, curNode.right] = [curNode.right, curNode.left];
      }
  }
  return root;
};

// 迭代法（队列模拟层序遍历）
function stackPostInvertTree(root: TreeNode | null): TreeNode | null {
  const helperQueue: TreeNode[] = [];
  let curNode: TreeNode,
      tempNode: TreeNode | null;
  if (root !== null) helperQueue.push(root);
  while (helperQueue.length > 0) {
      for (let i = 0, length = helperQueue.length; i < length; i++) {
          curNode = helperQueue.shift()!;
          // tempNode = curNode.left;
          // curNode.left = curNode.right;
          // curNode.right = tempNode;
          [curNode.left, curNode.right] = [curNode.right, curNode.left];
          if (curNode.left !== null) helperQueue.push(curNode.left);
          if (curNode.right !== null) helperQueue.push(curNode.right);
      }
  }
  return root;
};

let treeNode = new TreeNode(2)
treeNode.left = new TreeNode(3)
treeNode.right = new TreeNode(6)
treeNode.right.left = new TreeNode(7)
treeNode.right.right = new TreeNode(8)
treeNode.left.left = new TreeNode(5)
treeNode.left.right = new TreeNode(4)
console.log(stackPostInvertTree(treeNode))