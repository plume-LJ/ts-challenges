"use strict";
exports.__esModule = true;
var node_1 = require("../node");
/**
 * 二叉树节点的深度：指从根节点到该节点的最长简单路径边的条数或者节点数（取决于深度从0开始还是从1开始）
 * 二叉树节点的高度：指从该节点到叶子节点的最长简单路径边的条数后者节点数（取决于高度从0开始还是从1开始）
 * 1. 明确递归函数的参数和返回值
 * 2. 明确终止条件
 * 3. 明确单层递归的逻辑
 */
// 后续遍历（自下而上）
function postMaxDepth(root) {
    if (root === null)
        return 0;
    return Math.max(postMaxDepth(root.left), postMaxDepth(root.right)) + 1;
}
// 前序遍历(自上而下)
function preMaxDepth(root) {
    function recur(node, count) {
        if (node === null) {
            resMax = resMax > count ? resMax : count;
            return;
        }
        recur(node.left, count + 1);
        recur(node.right, count + 1);
    }
    var resMax = 0;
    var count = 0;
    recur(root, count);
    return resMax;
}
// 层序遍历（迭代法）
function levelMaxDepth(root) {
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
// 后续遍历（自下而上）
function postNMaxDepth(root) {
    if (root === null)
        return 0;
    return Math.max(postNMaxDepth(root.left), postNMaxDepth(root.right)) + 1;
}
// 前序遍历(自上而下)
function preNMaxDepth(root) {
    function recur(node, count) {
        if (node === null) {
            resMax = resMax > count ? resMax : count;
            return;
        }
        recur(node.left, count + 1);
        recur(node.right, count + 1);
    }
    var resMax = 0;
    var count = 0;
    recur(root, count);
    return resMax;
}
function minDepth(root) {
    if (root === null)
        return 0;
    if (root.left !== null && root.right === null) {
        return 1 + minDepth(root.left);
    }
    if (root.left === null && root.right !== null) {
        return 1 + minDepth(root.right);
    }
    return 1 + Math.min(minDepth(root.left), minDepth(root.right));
}
function levelMinDepth(root) {
    var helperQueue = [];
    var resMin = 0;
    var tempNode;
    if (root !== null)
        helperQueue.push(root);
    while (helperQueue.length > 0) {
        resMin++;
        for (var i = 0, length = helperQueue.length; i < length; i++) {
            tempNode = helperQueue.shift();
            if (tempNode.left === null && tempNode.right === null)
                return resMin;
            if (tempNode.left !== null)
                helperQueue.push(tempNode.left);
            if (tempNode.right !== null)
                helperQueue.push(tempNode.right);
        }
    }
    return resMin;
}
;
var treeNode = new node_1.TreeNode(2);
treeNode.left = new node_1.TreeNode(3);
treeNode.right = new node_1.TreeNode(6);
treeNode.right.left = new node_1.TreeNode(7);
treeNode.right.right = new node_1.TreeNode(8);
treeNode.left.left = new node_1.TreeNode(5);
treeNode.left.right = new node_1.TreeNode(4);
treeNode.left.right.right = new node_1.TreeNode(4);
console.log(levelMaxDepth(treeNode));
