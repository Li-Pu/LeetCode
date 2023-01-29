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
 * time: 60ms space: 41.3MB
 */
var middleNode = function (head) {
    if (!head) {
        return head;
    }
    let slow = head, fast = head.next

    while (fast) {
        fast = fast.next;
        slow = slow.next;
        if (fast) {
            fast = fast.next;
        }
    }

    return slow;
};

