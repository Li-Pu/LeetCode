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
 * @param {number} targetSum
 * @return {boolean}
 * time: 68ms space: 44.4MB
 */
var hasPathSum = function (root, targetSum) {
    let ret = false;

    if (root) {
        if (root.left) {
            ret = ret || hasPathSum(root.left, targetSum - root.val);
        }
        if (root.right) {
            ret = ret || hasPathSum(root.right, targetSum - root.val)
        }
        if (!root.left && !root.right) {
            ret = ret || targetSum === root.val;
        }
    }

    return ret;
};
