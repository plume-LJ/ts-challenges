"use strict";
exports.__esModule = true;
var node_1 = require("../node");
function postBuildTree(inorder, postorder) {
    if (postorder.length === 0)
        return null;
    var rootVal = postorder.pop();
    var rootValIndex = inorder.indexOf(rootVal);
    var rootNode = new node_1.TreeNode(rootVal);
    rootNode.left = postBuildTree(inorder.slice(0, rootValIndex), postorder.slice(0, rootValIndex));
    rootNode.right = postBuildTree(inorder.slice(rootValIndex + 1), postorder.slice(rootValIndex));
    return rootNode;
}
;
function arrayPostBuildTree(inorder, postorder) {
    function recur(inorder, postorder, inBegin, inEnd, postBegin, postEnd) {
        if (postBegin === postEnd)
            return null;
        var rootVal = postorder[postEnd - 1];
        var rootValIndex = inorder.indexOf(rootVal, inBegin);
        var rootNode = new node_1.TreeNode(rootVal);
        var leftInorderBegin = inBegin;
        var leftInorderEnd = rootValIndex;
        var rightInorderBegin = rootValIndex + 1;
        var rightInorderEnd = inEnd;
        var leftPostorderBegin = postBegin;
        var leftPostorderEnd = postBegin + rootValIndex - inBegin;
        var rightPostorderBegin = leftPostorderEnd;
        var rightPostorderEnd = postEnd - 1;
        rootNode.left = recur(inorder, postorder, leftInorderBegin, leftInorderEnd, leftPostorderBegin, leftPostorderEnd);
        rootNode.right = recur(inorder, postorder, rightInorderBegin, rightInorderEnd, rightPostorderBegin, rightPostorderEnd);
        return rootNode;
    }
    return recur(inorder, postorder, 0, inorder.length, 0, inorder.length);
}
;
function preBuildTree(preorder, inorder) {
    if (preorder.length === 0)
        return null;
    var rootVal = preorder[0];
    var rootNode = new node_1.TreeNode(rootVal);
    var rootValIndex = inorder.indexOf(rootVal);
    rootNode.left = preBuildTree(preorder.slice(1, rootValIndex + 1), inorder.slice(0, rootValIndex));
    rootNode.right = preBuildTree(preorder.slice(rootValIndex + 1), inorder.slice(rootValIndex + 1));
    return rootNode;
}
;
function arrayPreBuildTree(preorder, inorder) {
    function recur(preorder, inorder, preBegin, preEnd, inBegin, inEnd) {
        if (preBegin === preEnd)
            return null;
        var rootVal = preorder[preBegin];
        var rootNode = new node_1.TreeNode(rootVal);
        var rootValIndex = inorder.indexOf(rootVal, inBegin);
        var leftPreBegin = preBegin + 1;
        var leftPreEnd = preBegin + rootValIndex - inBegin + 1;
        var leftInBegin = inBegin;
        var leftInEnd = rootValIndex;
        var rightPreBegin = leftPreEnd;
        var rightPreEnd = preEnd;
        var rightInBegin = rootValIndex + 1;
        var rightInEnd = inEnd;
        rootNode.left = recur(preorder, inorder, leftPreBegin, leftPreEnd, leftInBegin, leftInEnd);
        rootNode.right = recur(preorder, inorder, rightPreBegin, rightPreEnd, rightInBegin, rightInEnd);
        return rootNode;
    }
    ;
    return recur(preorder, inorder, 0, preorder.length, 0, inorder.length);
}
;
