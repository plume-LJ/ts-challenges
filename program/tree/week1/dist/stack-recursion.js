"use strict";
exports.__esModule = true;
// 前序遍历
function preorderTraversal(node) {
    function traverse(node, res) {
        if (node === null)
            return;
        res.push(node.val);
        traverse(node.left, res);
        traverse(node.right, res);
    }
    var res = [];
    traverse(node, res);
    return res;
}
// 中序遍历
function inorderTraversal(node) {
    function traverse(node, res) {
        if (node === null)
            return;
        traverse(node.left, res);
        res.push(node.val);
        traverse(node.right, res);
    }
    var res = [];
    traverse(node, res);
    return res;
}
// 后序遍历
function postorderTraversal(node) {
    function traverse(node, res) {
        if (node === null)
            return;
        traverse(node.left, res);
        traverse(node.right, res);
        res.push(node.val);
    }
    var res = [];
    traverse(node, res);
    return res;
}
