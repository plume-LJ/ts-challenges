"use strict";
exports.__esModule = true;
var node_1 = require("../node");
function preorderTraversal(node) {
    if (node === null)
        return [];
    var res = [];
    var stack = [];
    stack.push(node);
    while (stack.length) {
        var cur = stack.pop();
        res.push(cur.val);
        if (cur.right)
            stack.push(cur.right);
        if (cur.left)
            stack.push(cur.left);
    }
    return res;
}
// 中序遍历（迭代法）
function inorderTraversal(root) {
    var helperStack = [];
    var res = [];
    if (root === null)
        return res;
    var curNode = root;
    while (curNode !== null || helperStack.length > 0) {
        if (curNode !== null) {
            helperStack.push(curNode);
            curNode = curNode.left;
        }
        else {
            curNode = helperStack.pop();
            res.push(curNode.val);
            curNode = curNode.right;
        }
    }
    return res;
}
;
// 后序遍历（迭代法）
function postorderTraversal(root) {
    var helperStack = [];
    var res = [];
    var curNode;
    if (root === null)
        return res;
    helperStack.push(root);
    while (helperStack.length > 0) {
        curNode = helperStack.pop();
        res.push(curNode.val);
        if (curNode.left !== null)
            helperStack.push(curNode.left);
        if (curNode.right !== null)
            helperStack.push(curNode.right);
    }
    return res.reverse();
}
;
var treeNode = new node_1.TreeNode(2);
treeNode.left = new node_1.TreeNode(3);
treeNode.right = new node_1.TreeNode(6);
treeNode.left.left = new node_1.TreeNode(5);
treeNode.left.right = new node_1.TreeNode(4);
console.log(inorderTraversal(treeNode));
