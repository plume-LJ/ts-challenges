"use strict";
exports.__esModule = true;
function circle(node) {
    var _a;
    if (node === null)
        return null;
    var dummyNode = new ListNode(0, node);
    var fast = dummyNode.next;
    var slow = dummyNode.next;
    while (fast === null || fast === void 0 ? void 0 : fast.next) {
        fast = (_a = fast.next) === null || _a === void 0 ? void 0 : _a.next;
        slow = (slow === null || slow === void 0 ? void 0 : slow.next) || null;
        if (fast === slow) {
            fast = dummyNode.next;
            while (fast !== slow) {
                fast = (fast === null || fast === void 0 ? void 0 : fast.next) || null;
                slow = (slow === null || slow === void 0 ? void 0 : slow.next) || null;
            }
            return slow;
        }
    }
}
var node11 = new ListNode(1);
console.log(circle(node11));
