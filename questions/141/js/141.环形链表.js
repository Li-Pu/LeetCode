/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 * time: 80ms space: 43.4MB
 */
var hasCycle = function (head) {
    if (!head) {
        return false;
    }
    let slow = head, fast = head.next;

    while (fast && fast.next) {
        fast = fast.next;
        slow = slow.next;
        if (fast === slow) {
            return true;
        }
        if (fast.next) {
            fast = fast.next;
        }
        if (fast === slow) {
            return true;
        }
    }

    return false;
};
