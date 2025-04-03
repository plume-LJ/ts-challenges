"use strict";
exports.__esModule = true;
var node_1 = require("../node");
// 前序遍历（迭代法）
function preorderTraversal(root) {
    var helperStack = [];
    var res = [];
    var curNode;
    if (root === null)
        return res;
    helperStack.push(root);
    while (helperStack.length > 0) {
        curNode = helperStack.pop();
        if (curNode !== null) {
            if (curNode.right !== null)
                helperStack.push(curNode.right);
            if (curNode.left !== null)
                helperStack.push(curNode.left);
            helperStack.push(curNode);
            helperStack.push(null);
        }
        else {
            curNode = helperStack.pop();
            res.push(curNode.val);
        }
    }
    return res;
}
// 中序遍历（迭代法）
function inorderTraversal(root) {
    var helperStack = [];
    var res = [];
    var curNode;
    if (root === null)
        return res;
    helperStack.push(root);
    while (helperStack.length > 0) {
        curNode = helperStack.pop();
        if (curNode !== null) {
            if (curNode.right !== null)
                helperStack.push(curNode.right);
            helperStack.push(curNode);
            helperStack.push(null);
            if (curNode.left !== null)
                helperStack.push(curNode.left);
        }
        else {
            curNode = helperStack.pop();
            res.push(curNode.val);
        }
    }
    return res;
}
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
        if (curNode !== null) {
            helperStack.push(curNode);
            helperStack.push(null);
            if (curNode.right !== null)
                helperStack.push(curNode.right);
            if (curNode.left !== null)
                helperStack.push(curNode.left);
        }
        else {
            curNode = helperStack.pop();
            res.push(curNode.val);
        }
    }
    return res;
}
var treeNode = new node_1.TreeNode(2);
treeNode.left = new node_1.TreeNode(3);
treeNode.right = new node_1.TreeNode(6);
treeNode.right.left = new node_1.TreeNode(7);
treeNode.right.right = new node_1.TreeNode(8);
treeNode.left.left = new node_1.TreeNode(5);
treeNode.left.right = new node_1.TreeNode(4);
console.log(inorderTraversal(treeNode));
