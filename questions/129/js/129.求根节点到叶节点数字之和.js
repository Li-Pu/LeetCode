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
 * @return {number}
 * time: 56ms space: 40.6MB
 */
var sumNumbers = function (root) {
    let ret = 0, sum = 0;
    const check = (node) => {
        const t = sum;
        sum = sum * 10 + node.val;
        if (!node.left && !node.right) {
            ret += sum;
        }
        if (node.left) {
            check(node.left)
        }
        if (node.right) {
            check(node.right)
        }
        sum = t
    }
    check(root);
    return ret;
};
