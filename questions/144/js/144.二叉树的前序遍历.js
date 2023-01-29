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
 * @return {number[]}
 * time: 68ms space: 41.8MB
 */
var preorderTraversal = function (root) {
    const result = [];
    if (root) {
        result.push(
            root.val,
            ...preorderTraversal(root.left),
            ...preorderTraversal(root.right)
        );
    }
    return result;
};
