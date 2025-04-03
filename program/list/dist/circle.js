function detectCycle(head) {
    var slowNode = head, fastNode = head;
    while (fastNode !== null && fastNode.next !== null) {
        slowNode = slowNode.next;
        fastNode = fastNode.next.next;
        if (slowNode === fastNode) {
            fastNode = head;
            while (slowNode !== fastNode) {
                slowNode = slowNode.next;
                fastNode = fastNode.next;
            }
            return slowNode;
        }
    }
    return null;
}
;
