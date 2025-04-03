"use strict";
exports.__esModule = true;
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
    return ListNode;
}());
var MyLinkedList = /** @class */ (function () {
    function MyLinkedList() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }
    // 获取链表中第 index个节点的值
    MyLinkedList.prototype.get = function (index) {
        // 索引无效的情况
        if (index < 0 || index >= this.size) {
            return -1;
        }
        var curNode = this.getNode(index);
        // 这里在前置条件下，理论上不会出现 null的情况
        return curNode.val;
    };
    // 在链表的第一个元素之前添加一个值为 val的节点。插入后，新节点将成为链表的第一个节点。
    MyLinkedList.prototype.addAtHead = function (val) {
        var node = new ListNode(val, this.head);
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
        this.size++;
    };
    // 将值为 val 的节点追加到链表的最后一个元素。
    MyLinkedList.prototype.addAtTail = function (val) {
        var node = new ListNode(val, null);
        if (this.tail) {
            this.tail.next = node;
        }
        else {
            // 还没有尾节点，说明一个节点都还没有
            this.head = node;
        }
        this.tail = node;
        this.size++;
    };
    // 在链表中的第 index个节点之前添加值为 val的节点。
    // 如果 index等于链表的长度，则该节点将附加到链表的末尾。如果 index大于链表长度，则不会插入节点。如果 index小于0，则在头部插入节点。
    MyLinkedList.prototype.addAtIndex = function (index, val) {
        if (index === this.size) {
            this.addAtTail(val);
            return;
        }
        if (index > this.size) {
            return;
        }
        // <= 0 的情况都是在头部插入
        if (index <= 0) {
            this.addAtHead(val);
            return;
        }
        // 正常情况
        // 获取插入位置的前一个 node
        var curNode = this.getNode(index - 1);
        var node = new ListNode(val, curNode.next);
        curNode.next = node;
        this.size++;
    };
    // 如果索引 index有效，则删除链表中的第 index个节点。
    MyLinkedList.prototype.deleteAtIndex = function (index) {
        if (index < 0 || index >= this.size) {
            return;
        }
        // 处理头节点
        if (index === 0) {
            this.head = this.head.next;
            // 如果链表中只有一个元素，删除头节点后，需要处理尾节点
            if (index === this.size - 1) {
                this.tail = null;
            }
            this.size--;
            return;
        }
        // 索引有效
        var curNode = this.getNode(index - 1);
        curNode.next = curNode.next.next;
        // 处理尾节点
        if (index === this.size - 1) {
            this.tail = curNode;
        }
        this.size--;
    };
    // 获取指定 Node节点
    MyLinkedList.prototype.getNode = function (index) {
        // 这里不存在没办法获取到节点的情况，都已经在前置方法做过判断
        // 创建虚拟头节点
        var curNode = new ListNode(0, this.head);
        for (var i = 0; i <= index; i++) {
            // 理论上不会出现 null
            curNode = curNode.next;
        }
        return curNode;
    };
    return MyLinkedList;
}());
var linkedList = new MyLinkedList();
console.log(linkedList);
linkedList.addAtHead(1);
console.log(linkedList);
linkedList.addAtTail(3);
console.log(linkedList);
linkedList.addAtIndex(1, 2);
console.log(JSON.stringify(linkedList));
console.log(linkedList.get(1));
linkedList.deleteAtIndex(1); //FM1->3
console.log(linkedList.get(1));
console.log(linkedList);
