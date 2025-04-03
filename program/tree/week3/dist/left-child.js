"use strict";
exports.__esModule = true;
var node_1 = require("../node");
function findBottomLeftValue(root) {
    function recur(root, depth) {
        if (root.left === null && root.right === null) {
            if (depth > maxDepth) {
                maxDepth = depth;
                resVal = root.val;
            }
            return;
        }
        if (root.left !== null)
            recur(root.left, depth + 1);
        if (root.right !== null)
            recur(root.right, depth + 1);
    }
    var maxDepth = 0;
    var resVal = 0;
    if (root === null)
        return resVal;
    recur(root, 1);
    return resVal;
}
;
function stackFindBottomLeftValue(root) {
    var helperQueue = [];
    if (root !== null)
        helperQueue.push(root);
    var resVal = 0;
    var tempNode;
    while (helperQueue.length > 0) {
        resVal = helperQueue[0].val;
        for (var i = 0, length = helperQueue.length; i < length; i++) {
            tempNode = helperQueue.shift();
            if (tempNode.left !== null)
                helperQueue.push(tempNode.left);
            if (tempNode.right !== null)
                helperQueue.push(tempNode.right);
        }
    }
    return resVal;
}
;
function stack1FindBottomLeftValue(root) {
    var helperQueue = [];
    if (root !== null)
        helperQueue.push(root);
    var resVal = 0;
    var tempNode;
    while (helperQueue.length > 0) {
        // resVal = helperQueue[0].val;
        for (var i = 0, length = helperQueue.length; i < length; i++) {
            tempNode = helperQueue.shift();
            if (tempNode.right !== null)
                helperQueue.push(tempNode.right);
            if (tempNode.left !== null)
                helperQueue.push(tempNode.left);
            resVal = tempNode.val;
        }
    }
    return resVal;
}
;
var treeNode = new node_1.TreeNode(2);
treeNode.left = new node_1.TreeNode(3);
treeNode.right = new node_1.TreeNode(6);
treeNode.right.left = new node_1.TreeNode(7);
treeNode.right.right = new node_1.TreeNode(8);
treeNode.left.left = new node_1.TreeNode(5);
treeNode.left.right = new node_1.TreeNode(4);
// treeNode.left.right.right = new TreeNode(55);
// treeNode.left.right.left = new TreeNode(54);
// treeNode.left.right.right.left = new TreeNode(4);
console.log(stack1FindBottomLeftValue(treeNode));
