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
 * time: 64ms space: 41.2MB
 */
var middleNode = function (head) {
    const stack = [];
    while (head) {
        stack.push(head);
        head = head.next;
    }

    return stack[Math.floor(stack.length / 2)];
};

