import { TreeNode } from "../node";

function binaryTreePaths(root: TreeNode | null): string[] {
  function recur(node: TreeNode, route: string, resArr: string[]): void {
      route += String(node.val);
      if (node.left === null && node.right === null) {
          resArr.push(route);
          return;
      }
      if (node.left !== null) recur(node.left, route + '->', resArr);
      if (node.right !== null) recur(node.right, route + '->', resArr);
  }
  const resArr: string[] = [];
  if (root === null) return resArr;
  recur(root, '', resArr);
  return resArr;
};

// 迭代法2
function stackBinaryTreePaths(root: TreeNode | null): string[] {
  let helperStack: TreeNode[] = [];
  let tempNode: TreeNode;
  let routeArr: string[] = [];
  let resArr: string[] = [];
  if (root !== null) {
      helperStack.push(root);
      routeArr.push(String(root.val));
  };
  while (helperStack.length > 0) {
      tempNode = helperStack.pop()!;
      let route: string = routeArr.pop()!; // tempNode 对应的路径
      if (tempNode.left === null && tempNode.right === null) {
          resArr.push(route);
      }
      if (tempNode.right !== null) {
          helperStack.push(tempNode.right);
          routeArr.push(route + '->' + tempNode.right.val);   // tempNode.right 对应的路径
      }
      if (tempNode.left !== null) {
          helperStack.push(tempNode.left);
          routeArr.push(route + '->' + tempNode.left.val);    // tempNode.left 对应的路径
      }
  }
  return resArr;
};


let treeNode = new TreeNode(2);
treeNode.left = new TreeNode(3);
treeNode.right = new TreeNode(6);
treeNode.right.left = new TreeNode(7);
treeNode.right.right = new TreeNode(8);
treeNode.left.left = new TreeNode(5);
treeNode.left.right = new TreeNode(4);
treeNode.left.right.right = new TreeNode(4);
treeNode.left.right.left = new TreeNode(4);
console.log(binaryTreePaths(treeNode));