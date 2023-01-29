/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 * time: 240ms space: 45.9MB
 */
var mergeKLists = function (lists) {
    let ret = null;
    const mergeTwoLists = (a, b) => {
        if (!a) {
            return b;
        }
        const root = { next: null };
        let p = root;
        while (a && b) {
            if (a.val <= b.val) {
                p.next = a;
                a = a.next;
            } else {
                p.next = b;
                b = b.next;
            }
            p = p.next;
        }
        if (a) {
            p.next = a;
        }
        if (b) {
            p.next = b;
        }
        return root.next;
    }
    for (let i = 0; i < lists.length; i++) {
        ret = mergeTwoLists(ret, lists[i]);
    }
    return ret;
};
