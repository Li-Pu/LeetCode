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
 * time: 56ms space: 40.9MB
 */
var middleNode = function (head) {
    let count = 0;
    let t = head;
    while (t) {
        count++;
        t = t.next;
    }

    count = Math.floor(count / 2);
    let newCount = 0;
    t = head;
    while (t && newCount !== count) {
        newCount++;
        t = t.next;
    }

    return t;
};

