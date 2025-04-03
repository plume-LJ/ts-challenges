function getIntersectionNode(headA, headB) {
    var _a, _b;
    var sizeA = 0, sizeB = 0;
    var curA = headA, curB = headB;
    while (curA) {
        sizeA++;
        curA = curA.next;
    }
    while (curB) {
        sizeB++;
        curB = curB.next;
    }
    curA = headA;
    curB = headB;
    if (sizeA < sizeB) {
        _a = [sizeB, sizeA], sizeA = _a[0], sizeB = _a[1];
        _b = [curB, curA], curA = _b[0], curB = _b[1];
    }
    var gap = sizeA - sizeB;
    while (gap-- && curA) {
        curA = curA.next;
    }
    while (curA && curB) {
        if (curA === curB) {
            return curA;
        }
        curA = curA.next;
        curB = curB.next;
    }
    return null;
}
;
