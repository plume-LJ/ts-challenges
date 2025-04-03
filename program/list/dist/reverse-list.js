// 双指针法
function reverseList1(head) {
    var preNode = null, curNode = head, tempNode;
    while (curNode) {
        tempNode = curNode.next;
        curNode.next = preNode;
        preNode = curNode;
        curNode = tempNode;
    }
    return preNode;
}
;
// 递归（从前往后翻转）
function reverseList2(head) {
    function recur(preNode, curNode) {
        if (curNode === null)
            return preNode;
        var tempNode = curNode.next;
        curNode.next = preNode;
        preNode = curNode;
        curNode = tempNode;
        return recur(preNode, curNode);
    }
    return recur(null, head);
}
;
// 递归（从后往前翻转）
function reverseList(head) {
    if (head === null)
        return null;
    var newHead = null;
    function recur(node, preNode) {
        if (node.next === null) {
            newHead = node;
            newHead.next = preNode;
        }
        else {
            recur(node.next, node);
            node.next = preNode;
        }
    }
    recur(head, null);
    return newHead;
}
;
function swapPairs(head) {
    var dummyNode = new ListNode(0, head);
    var curNode = dummyNode;
    while (curNode && curNode.next && curNode.next.next) {
        var firstNode = curNode.next, secNode = curNode.next.next, thirdNode = curNode.next.next.next;
        curNode.next = secNode;
        secNode.next = firstNode;
        firstNode.next = thirdNode;
        curNode = firstNode;
    }
    return dummyNode.next;
}
;
