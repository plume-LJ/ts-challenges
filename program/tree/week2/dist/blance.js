"use strict";
exports.__esModule = true;
var node_1 = require("../node");
// 递归法
function isBalanced(root) {
    function getDepth(root) {
        if (root === null)
            return 0;
        var leftDepth = getDepth(root.left);
        if (leftDepth === -1)
            return -1;
        var rightDepth = getDepth(root.right);
        if (rightDepth === -1)
            return -1;
        if (Math.abs(leftDepth - rightDepth) > 1)
            return -1;
        return 1 + Math.max(leftDepth, rightDepth);
    }
    return getDepth(root) !== -1;
}
function stackIsBlanced(root) {
    // 层序遍历（迭代法）
    function levelMaxDepth(root) {
        if (root === null)
            return 0;
        var helperQueue = [];
        var resDepth = 0;
        var tempNode;
        if (root !== null)
            helperQueue.push(root);
        while (helperQueue.length > 0) {
            resDepth++;
            for (var i = 0, length = helperQueue.length; i < length; i++) {
                tempNode = helperQueue.shift();
                if (tempNode.left)
                    helperQueue.push(tempNode.left);
                if (tempNode.right)
                    helperQueue.push(tempNode.right);
            }
        }
        return resDepth;
    }
    if (root === null)
        return true;
    var stack = [];
    stack.push(root);
    while (stack.length > 0) {
        var cur = stack.pop();
        if (Math.abs(levelMaxDepth(root.left) - levelMaxDepth(root.right)) > 1)
            return false;
        if (cur !== null) {
            stack.push(cur.left);
            stack.push(cur.right);
        }
    }
    return true;
}
var treeNode = new node_1.TreeNode(2);
treeNode.left = new node_1.TreeNode(3);
treeNode.right = new node_1.TreeNode(6);
treeNode.right.left = new node_1.TreeNode(7);
treeNode.right.right = new node_1.TreeNode(8);
treeNode.left.left = new node_1.TreeNode(5);
treeNode.left.right = new node_1.TreeNode(4);
treeNode.left.right.right = new node_1.TreeNode(4);
treeNode.left.right.right.left = new node_1.TreeNode(4);
console.log(stackIsBlanced(treeNode));
