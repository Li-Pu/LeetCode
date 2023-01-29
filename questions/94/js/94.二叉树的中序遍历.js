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
 * time: 56ms space: 41MB
 */
var inorderTraversal = function (root) {
    const result = [];
    let ptr = root;

    while (ptr) {
        if (ptr.left) {
            let predecessor = ptr.left;
            while (predecessor.right && predecessor.right !== ptr) {
                predecessor = predecessor.right;
            }
            if (!predecessor.right) {
                predecessor.right = ptr;
                ptr = ptr.left;
            } else {
                result.push(ptr.val);
                predecessor.right = null;
                ptr = ptr.right;
            }
        } else {
            result.push(ptr.val);
            ptr = ptr.right;
        }
    }

    return result;
};
