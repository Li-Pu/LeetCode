/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * time: 76ms space: 43MB
 */
var reverseList = function (head) {
    let left = head;
    if (!left || !left.next) {
        return left;
    }
    let right = head;
    left = null;

    while (right) {
        const t = right.next;
        right.next = left;
        left = right;
        right = t;
    }

    return left
};

