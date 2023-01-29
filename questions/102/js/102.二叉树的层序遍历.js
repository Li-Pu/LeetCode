/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 * time: 72ms space: 43.2MB
 */
var levelOrder = function (root) {
    const ret = [];
    let cur = !root ? [] : [root];

    while (cur.length > 0) {
        const t = [];
        const next = [];
        cur.forEach((node) => {
            if (!node) {
                return;
            }
            t.push(node.val);
            if (node.left) {
                next.push(node.left);
            }
            if (node.right) {
                next.push(node.right);
            }
        });
        cur = next;
        ret.push(t);
    }

    return ret;
};
