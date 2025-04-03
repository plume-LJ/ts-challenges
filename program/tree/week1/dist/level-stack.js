"use strict";
exports.__esModule = true;
function levelOrder(root) {
    var helperQueue = [];
    var res = [];
    var tempArr = [];
    if (root !== null)
        helperQueue.push(root);
    var curNode;
    while (helperQueue.length > 0) {
        for (var i = 0, length = helperQueue.length; i < length; i++) {
            curNode = helperQueue.shift();
            tempArr.push(curNode.val);
            if (curNode.left !== null) {
                helperQueue.push(curNode.left);
            }
            if (curNode.right !== null) {
                helperQueue.push(curNode.right);
            }
        }
        res.push(tempArr);
        tempArr = [];
    }
    return res;
}
