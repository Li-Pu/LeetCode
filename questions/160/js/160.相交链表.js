/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 * time: 96ms space: 49.4MB
 */
var getIntersectionNode = function(headA, headB) {
    const visited = new Set();
    let ptr = headA;
    while (ptr) {
        visited.add(ptr);
        ptr = ptr.next;
    }
    ptr = headB;
    while (ptr) {
        if (visited.has(ptr)) {
            return ptr;
        }
        ptr = ptr.next;
    }
    return null;
};
