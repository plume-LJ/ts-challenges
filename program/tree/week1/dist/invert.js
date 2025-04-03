"use strict";
exports.__esModule = true;
var node_1 = require("../node");
// 递归法（前序遍历）
function preInvertTree(root) {
    var _a;
    if (root === null)
        return root;
    // let tempNode: TreeNode | null = root.left;
    _a = [root.right, root.left], root.left = _a[0], root.right = _a[1];
    // root.right = tempNode;
    preInvertTree(root.left);
    preInvertTree(root.right);
    return root;
}
// 递归法（后序遍历）
function inInvertTree(root) {
    var _a;
    if (root === null)
        return root;
    inInvertTree(root.left);
    inInvertTree(root.right);
    // let tempNode: TreeNode | null = root.left;
    // root.left = root.right;
    // root.right = tempNode;
    _a = [root.right, root.left], root.left = _a[0], root.right = _a[1];
    return root;
}
// 递归法（中序遍历）
function postInvertTree(root) {
    var _a;
    if (root === null)
        return root;
    postInvertTree(root.left);
    // let tempNode: TreeNode | null = root.left;
    // root.left = root.right;
    // root.right = tempNode;
    _a = [root.right, root.left], root.left = _a[0], root.right = _a[1];
    // 因为左右节点已经进行交换，此时的root.left 是原先的root.right
    postInvertTree(root.left);
    return root;
}
// 迭代法（栈模拟前序遍历）
function stackInvertTree(root) {
    var _a;
    var helperStack = [];
    var curNode, tempNode;
    if (root !== null)
        helperStack.push(root);
    while (helperStack.length > 0) {
        curNode = helperStack.pop();
        // 入栈操作最好在交换节点之前进行，便于理解
        if (curNode.right)
            helperStack.push(curNode.right);
        if (curNode.left)
            helperStack.push(curNode.left);
        _a = [curNode.right, curNode.left], curNode.left = _a[0], curNode.right = _a[1];
    }
    return root;
}
;
// 迭代法（栈模拟中序遍历-统一写法形式）
function stackPreInvertTree(root) {
    var _a;
    var helperStack = [];
    var curNode, tempNode;
    if (root !== null)
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
            // tempNode = curNode.left;
            // curNode.left = curNode.right;
            // curNode.right = tempNode;
            _a = [curNode.right, curNode.left], curNode.left = _a[0], curNode.right = _a[1];
        }
    }
    return root;
}
;
// 迭代法（栈模拟后序遍历-统一写法形式）
function stackInInvertTree(root) {
    var _a;
    var helperStack = [];
    var curNode, tempNode;
    if (root !== null)
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
            // tempNode = curNode.left;
            // curNode.left = curNode.right;
            // curNode.right = tempNode;
            _a = [curNode.right, curNode.left], curNode.left = _a[0], curNode.right = _a[1];
        }
    }
    return root;
}
;
// 迭代法（队列模拟层序遍历）
function stackPostInvertTree(root) {
    var _a;
    var helperQueue = [];
    var curNode, tempNode;
    if (root !== null)
        helperQueue.push(root);
    while (helperQueue.length > 0) {
        for (var i = 0, length = helperQueue.length; i < length; i++) {
            curNode = helperQueue.shift();
            // tempNode = curNode.left;
            // curNode.left = curNode.right;
            // curNode.right = tempNode;
            _a = [curNode.right, curNode.left], curNode.left = _a[0], curNode.right = _a[1];
            if (curNode.left !== null)
                helperQueue.push(curNode.left);
            if (curNode.right !== null)
                helperQueue.push(curNode.right);
        }
    }
    return root;
}
;
var treeNode = new node_1.TreeNode(2);
treeNode.left = new node_1.TreeNode(3);
treeNode.right = new node_1.TreeNode(6);
treeNode.right.left = new node_1.TreeNode(7);
treeNode.right.right = new node_1.TreeNode(8);
treeNode.left.left = new node_1.TreeNode(5);
treeNode.left.right = new node_1.TreeNode(4);
console.log(stackPostInvertTree(treeNode));
