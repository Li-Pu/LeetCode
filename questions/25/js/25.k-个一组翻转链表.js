/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 * time: 64ms space: 44.4MB
 */
var reverseKGroup = function (head, k) {
    let right = current = head, left = { next: head };
    head = left;

    while (current && current.next) {
        let c = 0;
        while (c < k && right) {
            current = right;
            right = right.next;
            c++;
        }

        if (c < k) {
            break;
        }

        let preCur = right;
        current = left.next;
        const tail = current;
        while (current != right) {
            const nextCur = current.next;
            current.next = preCur;
            preCur = current;
            current = nextCur;
        }
        left.next = preCur;
        left = tail;
    }

    return head.next;
};
