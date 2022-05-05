/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 * time: 868ms space: 49.1MB
 */
var reorderList = function (head) {
    const stack = [];
    let current = head;
    while (current) {
        stack.push(current);
        current = current.next;
    }

    let left = stack.shift();
    let right = stack.pop();
    while (stack.length > 0) {
        right.next = left.next;
        left.next = right;
        left = stack.shift();
        right = stack.pop();
    }

    if (right) {
        left.next = right;
        right.next = null;
    } else {
        left.next = null;
    }
};

