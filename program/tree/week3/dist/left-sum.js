"use strict";
exports.__esModule = true;
function sumOfLeftLeaves(root) {
    if (root === null)
        return 0;
    var midVal = 0;
    if (root.left !== null &&
        root.left.left === null &&
        root.left.right === null) {
        midVal = root.left.val;
    }
    var leftVal = sumOfLeftLeaves(root.left);
    var rightVal = sumOfLeftLeaves(root.right);
    return midVal + leftVal + rightVal;
}
;
function stackSumOfLeftLeaves(root) {
    var helperStack = [];
    var tempNode;
    var sum = 0;
    if (root !== null)
        helperStack.push(root);
    while (helperStack.length > 0) {
        tempNode = helperStack.pop();
        if (tempNode.left !== null &&
            tempNode.left.left === null &&
            tempNode.left.right === null) {
            sum += tempNode.left.val;
        }
        if (tempNode.right !== null)
            helperStack.push(tempNode.right);
        if (tempNode.left !== null)
            helperStack.push(tempNode.left);
    }
    return sum;
}
;
