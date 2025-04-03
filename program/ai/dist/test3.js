"use strict";
exports.__esModule = true;
// a1 → a2
// \
//   c1 → c2 → c3
// /
// b1 → b2 → b3
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
    return ListNode;
}());
function getIntersectionNode(headA, headB) {
    if (!headA || !headB) {
        return null;
    }
    var pA = headA;
    var pB = headB;
    while (pA !== pB) {
        pA = pA ? pA.next : headB;
        pB = pB ? pB.next : headA;
    }
    return pA;
}
// 示例用法
var commonNode = new ListNode(8, new ListNode(4, new ListNode(5)));
var headA = new ListNode(4, new ListNode(1, commonNode));
var headB = new ListNode(5, new ListNode(0, new ListNode(1, commonNode)));
var result = getIntersectionNode(headA, headB);
var result2 = getIntersectionNode(new ListNode(8, new ListNode(4, new ListNode(5))), new ListNode(8, new ListNode(4, new ListNode(5, new ListNode(3)))));
console.log(result);
console.log(result2);
