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
 * @return {boolean}
 * time: 68ms space: 45.8MB
 */
var isBalanced = function (root) {
    const isNodeBalanced = (node) => {
        if (!node) {
            return 0;
        }
        const left = isNodeBalanced(node.left);
        const right = isNodeBalanced(node.right);
        if (typeof left === "number" && typeof right === "number") {
            return Math.abs(left - right) <= 1
                ? Math.max(left, right) + 1
                : false;
        }
        return false;
    };
    return typeof isNodeBalanced(root) === "number" ? true : false;
};
