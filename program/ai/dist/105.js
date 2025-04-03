"use strict";
exports.__esModule = true;
var node_1 = require("program/tree/node");
function buildTree(preorder, inorder) {
    if (preorder.length === 0) {
        return null;
    }
    var root = new node_1.TreeNode(preorder[0]);
    var rootIndex = inorder.indexOf(preorder[0]);
    var leftInorder = inorder.slice(0, rootIndex);
    var rightInorder = inorder.slice(rootIndex + 1);
    var leftPreorder = preorder.slice(1, rootIndex + 1);
    var rightPreorder = preorder.slice(rootIndex + 1);
    root.left = buildTree(leftPreorder, leftInorder);
    root.right = buildTree(rightPreorder, rightInorder);
    return root;
}
console.log(buildTree([1, 2, 4, 8, 9, 5, 3, 6, 7, 10, 11], [8, 4, 9, 2, 5, 1, 6, 3, 10, 7, 11]));
