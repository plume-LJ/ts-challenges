import { TreeNode} from '../node'
function preorderTraversal(node: TreeNode | null): number[] {
  if (node === null) return []
  const res: number[] = []
  let stack: TreeNode[] = []
  stack.push(node)
  while (stack.length) {
    let cur = stack.pop()!
    res.push(cur.val)
    if (cur.right) stack.push(cur.right)
    if (cur.left) stack.push(cur.left)
  }

  return res
}

// 中序遍历（迭代法）
function inorderTraversal(root: TreeNode | null): number[] {
  let helperStack: TreeNode[] = [];
  let res: number[] = [];
  if (root === null) return res;
  let curNode: TreeNode | null = root;
  while (curNode !== null || helperStack.length > 0) {
      if (curNode !== null) {
          helperStack.push(curNode);
          curNode = curNode.left;
      } else {
          curNode = helperStack.pop()!;
          res.push(curNode.val);
          curNode = curNode.right;
      }
  }
  return res;
};

// 后序遍历（迭代法）
function postorderTraversal(root: TreeNode | null): number[] {
  let helperStack: TreeNode[] = [];
  let res: number[] = [];
  let curNode: TreeNode;
  if (root === null) return res;
  helperStack.push(root);
  while (helperStack.length > 0) {
      curNode = helperStack.pop()!;
      res.push(curNode.val);
      if (curNode.left !== null) helperStack.push(curNode.left);
      if (curNode.right !== null) helperStack.push(curNode.right);
  }
  return res.reverse();
};

let treeNode = new TreeNode(2)
treeNode.left = new TreeNode(3)
treeNode.right = new TreeNode(6)
treeNode.left.left = new TreeNode(5)
treeNode.left.right = new TreeNode(4)
console.log(inorderTraversal(treeNode))