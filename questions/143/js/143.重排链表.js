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
 * time: 72ms space: 48.8MB
 */
 var reorderList = function (head) {
    let fast = slow = head;
    if (!head.next) {
        return head;
    }
    fast = fast.next;

    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
        if (fast.next) {
            fast = fast.next;
        }
    }

    fast = slow.next;
    slow.next = null;    

    if (fast && fast.next) {
        let left = null, right = fast;

        while (right) {
            const t = right.next;
            right.next = left;
            left = right;
            right = t;
        }

        fast = left
    }

    slow = head;
    let current = head;
    while (fast) {
        slow = slow.next;
        current.next = fast;
        current = fast;
        fast = fast.next;
        current.next = slow;
        current = slow;
    }
};

