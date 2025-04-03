"use strict";
exports.__esModule = true;
var node_1 = require("../node");
function binaryTreePaths(root) {
    function recur(node, route, resArr) {
        route += String(node.val);
        if (node.left === null && node.right === null) {
            resArr.push(route);
            return;
        }
        if (node.left !== null)
            recur(node.left, route + '->', resArr);
        if (node.right !== null)
            recur(node.right, route + '->', resArr);
    }
    var resArr = [];
    if (root === null)
        return resArr;
    recur(root, '', resArr);
    return resArr;
}
;
// 迭代法2
function stackBinaryTreePaths(root) {
    var helperStack = [];
    var tempNode;
    var routeArr = [];
    var resArr = [];
    if (root !== null) {
        helperStack.push(root);
        routeArr.push(String(root.val));
    }
    ;
    while (helperStack.length > 0) {
        tempNode = helperStack.pop();
        var route = routeArr.pop(); // tempNode 对应的路径
        if (tempNode.left === null && tempNode.right === null) {
            resArr.push(route);
        }
        if (tempNode.right !== null) {
            helperStack.push(tempNode.right);
            routeArr.push(route + '->' + tempNode.right.val); // tempNode.right 对应的路径
        }
        if (tempNode.left !== null) {
            helperStack.push(tempNode.left);
            routeArr.push(route + '->' + tempNode.left.val); // tempNode.left 对应的路径
        }
    }
    return resArr;
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
treeNode.left.right.left = new node_1.TreeNode(4);
console.log(binaryTreePaths(treeNode));
