"use strict";
exports.__esModule = true;
var node_1 = require("../node");
function path(node, target) {
    if (!node)
        return false;
    var flag = false;
    function recur(node, sum) {
        if (!node.left && !node.right) {
            if (sum + node.val === target) {
                flag = true;
                return;
            }
        }
        if (node.left)
            recur(node.left, sum + node.val);
        if (node.right)
            recur(node.right, sum + node.val);
    }
    return flag;
}
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
console.log(path(treeNode, 10));
