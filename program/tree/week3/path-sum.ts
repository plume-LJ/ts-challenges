import { TreeNode } from "../node";

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (root === null) return false;
  targetSum -= root.val;
  if (
      root.left === null &&
      root.right === null &&
      targetSum === 0
  ) return true;
  return hasPathSum(root.left, targetSum) ||
      hasPathSum(root.right, targetSum);
};

function stackHasPathSum(root: TreeNode | null, targetSum: number): boolean {
    type Pair = {
        node: TreeNode, // 当前节点
        sum: number // 根节点到当前节点的路径数值总和
    }

    const helperStack: Pair[] = [];
    if (root !== null) helperStack.push({ node: root, sum: root.val });
    let tempPair: Pair;
    while (helperStack.length > 0) {
        tempPair = helperStack.pop()!;
        if (
            tempPair.node.left === null &&
            tempPair.node.right === null &&
            tempPair.sum === targetSum
        ) return true;
        if (tempPair.node.right !== null) {
            helperStack.push({
                node: tempPair.node.right,
                sum: tempPair.sum + tempPair.node.right.val
            });
        }
        if (tempPair.node.left !== null) {
            helperStack.push({
                node: tempPair.node.left,
                sum: tempPair.sum + tempPair.node.left.val
            });
        }
    }
    return false;
};

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
    function recur(node: TreeNode, sumGap: number, routeArr: number[]): void {
        if (
            node.left === null &&
            node.right === null &&
            sumGap === 0
        ) resArr.push([...routeArr]);
        if (node.left !== null) {
            sumGap -= node.left.val;
            routeArr.push(node.left.val);
            recur(node.left, sumGap, routeArr);
            sumGap += node.left.val;
            routeArr.pop();
        }
        if (node.right !== null) {
            sumGap -= node.right.val;
            routeArr.push(node.right.val);
            recur(node.right, sumGap, routeArr);
            sumGap += node.right.val;
            routeArr.pop();
        }
    }
    const resArr: number[][] = [];
    if (root === null) return resArr;
    const routeArr: number[] = [];
    routeArr.push(root.val);
    recur(root, targetSum - root.val, routeArr);
    return resArr;
};

let treeNode = new TreeNode(2);
treeNode.left = new TreeNode(3);
treeNode.right = new TreeNode(6);
treeNode.left.left = new TreeNode(7);
treeNode.left.right = new TreeNode(8);
treeNode.right.left = new TreeNode(5);
treeNode.right.right = new TreeNode(4);
// treeNode.left.right.right = new TreeNode(55);
// treeNode.left.right.left = new TreeNode(54);
// treeNode.left.right.right.left = new TreeNode(4);
console.log(pathSum(treeNode, 12));