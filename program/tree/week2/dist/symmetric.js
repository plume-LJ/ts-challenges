"use strict";
exports.__esModule = true;
function isSymmetric(root) {
    function recur(node1, node2) {
        if (node1 === null && node2 === null)
            return true;
        if (node1 === null || node2 === null)
            return false;
        if (node1.val !== node2.val)
            return false;
        var isSym1 = recur(node1.left, node2.right);
        var isSym2 = recur(node1.right, node2.left);
        return isSym1 && isSym2;
    }
    if (root === null)
        return true;
    return recur(root.left, root.right);
}
;
// 迭代法(队列)
function isQueueSymmetric(root) {
    var helperQueue = [];
    var tempNode1, tempNode2;
    if (root !== null) {
        helperQueue.push(root.left);
        helperQueue.push(root.right);
    }
    while (helperQueue.length > 0) {
        tempNode1 = helperQueue.shift();
        tempNode2 = helperQueue.shift();
        if (tempNode1 === null && tempNode2 === null)
            continue;
        if (tempNode1 === null || tempNode2 === null)
            return false;
        if (tempNode1.val !== tempNode2.val)
            return false;
        helperQueue.push(tempNode1.left);
        helperQueue.push(tempNode2.right);
        helperQueue.push(tempNode1.right);
        helperQueue.push(tempNode2.left);
    }
    return true;
}
// 迭代法(栈)
function isStackSymmetric(root) {
    var helperStack = [];
    var tempNode1, tempNode2;
    if (root !== null) {
        helperStack.push(root.left);
        helperStack.push(root.right);
    }
    while (helperStack.length > 0) {
        tempNode1 = helperStack.pop();
        tempNode2 = helperStack.pop();
        if (tempNode1 === null && tempNode2 === null)
            continue;
        if (tempNode1 === null || tempNode2 === null)
            return false;
        if (tempNode1.val !== tempNode2.val)
            return false;
        helperStack.push(tempNode1.left);
        helperStack.push(tempNode2.right);
        helperStack.push(tempNode1.right);
        helperStack.push(tempNode2.left);
    }
    return true;
}
;
