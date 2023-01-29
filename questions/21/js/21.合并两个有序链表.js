/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 * time: 68ms space: 43.3MB
 */
var mergeTwoLists = function (list1, list2) {
    const ret = { next: null };
    let p = ret,
        l1 = list1,
        l2 = list2;

    while (l1 && l2) {
        if (l1.val <= l2.val) {
            p.next = l1;
            l1 = l1.next;
        } else {
            p.next = l2;
            l2 = l2.next;
        }
        p = p.next;
    }

    p.next = l1 === null ? l2 : l1;

    return ret.next;
};
