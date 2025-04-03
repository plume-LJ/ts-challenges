"use strict";
exports.__esModule = true;
function countNodes(root) {
    if (root === null)
        return 0;
    return 1 + countNodes(root.left) + countNodes(root.right);
}
;
function stackCountNodes(root) {
    var helperQueue = [];
    var resCount = 0;
    var tempNode;
    if (root !== null)
        helperQueue.push(root);
    while (helperQueue.length > 0) {
        for (var i = 0, length = helperQueue.length; i < length; i++) {
            tempNode = helperQueue.shift();
            resCount++;
            if (tempNode.left)
                helperQueue.push(tempNode.left);
            if (tempNode.right)
                helperQueue.push(tempNode.right);
        }
    }
    return resCount;
}
;
function fullCountNodes(root) {
    if (root === null)
        return 0;
    var left = 0, right = 0;
    var curNode = root;
    while (curNode !== null) {
        left++;
        curNode = curNode.left;
    }
    curNode = root;
    while (curNode !== null) {
        right++;
        curNode = curNode.right;
    }
    if (left === right) {
        return Math.pow(2, left) - 1;
    }
    return 1 + countNodes(root.left) + countNodes(root.right);
}
;
