"use strict";
exports.__esModule = true;
var node_1 = require("../node");
function mergeTrees(root1, root2) {
    if (root1 === null)
        return root2;
    if (root2 === null)
        return root1;
    var resNode = new node_1.TreeNode(root1.val + root2.val);
    resNode.left = mergeTrees(root1.left, root2.left);
    resNode.right = mergeTrees(root1.right, root2.right);
    return resNode;
}
function stackMergeTrees(root1, root2) {
    if (root1 === null)
        return root2;
    if (root2 === null)
        return root1;
    var helperQueue1 = [], helperQueue2 = [];
    helperQueue1.push(root1);
    helperQueue2.push(root2);
    var tempNode1, tempNode2;
    while (helperQueue1.length > 0) {
        tempNode1 = helperQueue1.shift();
        tempNode2 = helperQueue2.shift();
        tempNode1.val += tempNode2.val;
        if (tempNode1.left !== null && tempNode2.left !== null) {
            helperQueue1.push(tempNode1.left);
            helperQueue2.push(tempNode2.left);
        }
        else if (tempNode1.left === null) {
            tempNode1.left = tempNode2.left;
        }
        if (tempNode1.right !== null && tempNode2.right !== null) {
            helperQueue1.push(tempNode1.right);
            helperQueue2.push(tempNode2.right);
        }
        else if (tempNode1.right === null) {
            tempNode1.right = tempNode2.right;
        }
    }
    return root1;
}
