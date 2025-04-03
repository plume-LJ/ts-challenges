var _a, _b;
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
    return ListNode;
}());
var LinkList = /** @class */ (function () {
    function LinkList() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    LinkList.prototype.get = function (index) {
        // 索引无效的情况
        if (index < 0 || index >= this.size) {
            return -1;
        }
        var curNode = this.getNode(index);
        // 这里在前置条件下，理论上不会出现 null的情况
        return curNode.val;
    };
    LinkList.prototype.addAtHead = function (val) {
        var node = new ListNode(val, this.head);
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
        this.size++;
    };
    LinkList.prototype.addAtTail = function (val) {
        var node = new ListNode(val);
        if (this.tail) {
            this.tail.next = node;
        }
        else {
            this.head = node;
        }
        this.tail = node;
        this.size++;
    };
    LinkList.prototype.addAtIndex = function (index, val) {
        if (index > this.size)
            return;
        if (index <= 0) {
            this.addAtHead(val);
        }
        if (this.size === index)
            this.addAtTail(val);
        var curNode = this.getNode(index - 1);
        var node = new ListNode(val, curNode.next);
        curNode.next = node;
        this.size++;
    };
    LinkList.prototype.deleteAtIndex = function (index) {
        var _a, _b;
        if (index > this.size || index < 0)
            return;
        if (index == 0) {
            this.head = ((_a = this.head) === null || _a === void 0 ? void 0 : _a.next) || null;
            if (index === this.size - 1)
                this.tail = null;
            this.size--;
            return;
        }
        var curNode = this.getNode(index - 1);
        curNode.next = ((_b = curNode.next) === null || _b === void 0 ? void 0 : _b.next) || null;
        if (index === this.size - 1)
            this.tail = curNode;
        this.size--;
        return;
    };
    LinkList.prototype.getNode = function (index) {
        var curNode = new ListNode(0, this.head);
        for (var i = 0; i <= index; i++) {
            // 理论上不会出现 null
            curNode = curNode.next;
        }
        return curNode;
    };
    return LinkList;
}());
function deleteAtEndIndex(index, node) {
    var dummyNode = new ListNode(0, node);
    var curNode = node;
    var curNode1 = dummyNode;
    while (index-- && curNode) {
        curNode = curNode.next;
    }
    while (curNode) {
        curNode = curNode.next;
        curNode1 = (curNode1 === null || curNode1 === void 0 ? void 0 : curNode1.next) || null;
    }
    if (curNode1 === null || curNode1 === void 0 ? void 0 : curNode1.next) {
        curNode1.next = curNode1.next.next;
    }
    return dummyNode.next;
}
function deleteAtEndIndexWithStack(index, node) {
    var dummyNode = new ListNode(0, node);
    var arr = [];
    var cur = dummyNode;
    while (cur) {
        arr.push(cur);
        cur = cur.next;
    }
    for (var i = 0; i < index; i++) {
        arr.pop();
    }
    var pre = arr.pop();
    if (pre === null || pre === void 0 ? void 0 : pre.next)
        pre.next = pre.next.next;
    var newNode = dummyNode.next;
    dummyNode = null;
    return newNode;
}
function intersectionNode(listA, listB) {
    var _a, _b;
    var sizeA = 0;
    var sizeB = 0;
    var curA = listA;
    var curB = listB;
    while (curA) {
        sizeA++;
        curA = curA.next;
    }
    while (curB) {
        sizeB++;
        curB = curB.next;
    }
    curA = listA;
    curB = listB;
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
function reverseLinkList(node) {
    var pre = null;
    var cur = node;
    while (cur) {
        var tmp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = tmp;
    }
    return pre;
}
function reverseLinkList1(node) {
    function recur(pre, curNode) {
        if (curNode === null)
            return pre;
        var temp = curNode.next;
        curNode.next = pre;
        pre = curNode;
        return recur(pre, temp);
    }
    // let pre: ListNode | null = null;
    // let cur = node;
    // while (cur) {
    //   let tmp = cur.next;
    //   cur.next = pre;
    //   pre = cur;
    //   cur = tmp;
    // }
    return recur(null, node);
}
var list = new LinkList();
list.addAtHead(1);
list.addAtTail(2);
list.addAtTail(3);
list.addAtTail(4);
list.addAtTail(5);
var node = new ListNode(1);
node.next = new ListNode(2);
node.next.next = new ListNode(3);
node.next.next.next = new ListNode(4);
var node1 = new ListNode(5);
node1.next = new ListNode(6);
node1.next.next = new ListNode(4);
node1.next.next.next = new ListNode(4);
var node2 = new ListNode(7);
node2.next = new ListNode(8);
node2.next.next = new ListNode(9);
node2.next.next.next = new ListNode(4);
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
node2.next.next.next = node;
var aaa = node2;
while (aaa) {
    if (aaa.next === null) {
        aaa.next = node;
        break;
    }
    else {
        aaa = aaa.next;
    }
}
console.log((_b = (_a = circle(node2)) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 ? void 0 : _b.next);
// node1.next.next = node
// node2.next.next.next.next = node
// console.log(JSON.stringify(intersectionNode(node1,node2)))
// console.log(JSON.stringify(list.head))
// console.log(JSON.stringify(reverseLinkList1(list.head)));
// console.log(JSON.stringify(deleteAtEndIndexWithStack(3, list.head)));
// export{}
