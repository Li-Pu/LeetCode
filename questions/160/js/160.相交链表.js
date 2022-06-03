/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 * time: 88ms space: 48MB
 */
var getIntersectionNode = function (headA, headB) {
    if (!headA || !headB) {
        return null;
    }

    let pA = headA,
        pB = headB;
    while (pA !== pB) {
        pA = pA === null ? headB : pA.next;
        pB = pB === null ? headA : pB.next;
    }

    return pA;
};
