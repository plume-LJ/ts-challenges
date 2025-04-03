var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
    return ListNode;
}());
function mergeTwoLists(l1, l2) {
    var p = l1;
    var q = l2;
    if (!p)
        return q;
    if (!q)
        return p;
    var newR;
    if (p.val > q.val) {
        newR = new ListNode(q.val);
        q = q.next;
    }
    else {
        newR = new ListNode(p.val);
        p = p.next;
    }
    var curNode = newR;
    while (p && q) {
        var tmpNode = void 0;
        if (p.val > q.val) {
            curNode.next = q;
            q = q.next;
        }
        else {
            curNode.next = p;
            p = p.next;
        }
        curNode = curNode.next;
    }
    if (q)
        curNode.next = q;
    if (p)
        curNode.next = p;
    return newR;
}
mergeTwoLists(new ListNode(1, new ListNode(2, new ListNode(3))), new ListNode(1, new ListNode(2, new ListNode(4))));
