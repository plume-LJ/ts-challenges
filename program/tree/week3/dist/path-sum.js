"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var node_1 = require("../node");
function hasPathSum(root, targetSum) {
    if (root === null)
        return false;
    targetSum -= root.val;
    if (root.left === null &&
        root.right === null &&
        targetSum === 0)
        return true;
    return hasPathSum(root.left, targetSum) ||
        hasPathSum(root.right, targetSum);
}
;
function stackHasPathSum(root, targetSum) {
    var helperStack = [];
    if (root !== null)
        helperStack.push({ node: root, sum: root.val });
    var tempPair;
    while (helperStack.length > 0) {
        tempPair = helperStack.pop();
        if (tempPair.node.left === null &&
            tempPair.node.right === null &&
            tempPair.sum === targetSum)
            return true;
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
}
;
function pathSum(root, targetSum) {
    function recur(node, sumGap, routeArr) {
        if (node.left === null &&
            node.right === null &&
            sumGap === 0)
            resArr.push(__spreadArrays(routeArr));
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
    var resArr = [];
    if (root === null)
        return resArr;
    var routeArr = [];
    routeArr.push(root.val);
    recur(root, targetSum - root.val, routeArr);
    return resArr;
}
;
var treeNode = new node_1.TreeNode(2);
treeNode.left = new node_1.TreeNode(3);
treeNode.right = new node_1.TreeNode(6);
treeNode.left.left = new node_1.TreeNode(7);
treeNode.left.right = new node_1.TreeNode(8);
treeNode.right.left = new node_1.TreeNode(5);
treeNode.right.right = new node_1.TreeNode(4);
// treeNode.left.right.right = new TreeNode(55);
// treeNode.left.right.left = new TreeNode(54);
// treeNode.left.right.right.left = new TreeNode(4);
console.log(pathSum(treeNode, 12));
