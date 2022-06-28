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
 * time: 60ms space: 40.9MB
 */
var inorderTraversal = function (root) {
    const result = [];
    const stack = [];
    let ptr = root;
     
    while (ptr || stack.length > 0) {
        while (ptr) {
            stack.push(ptr);
            ptr = ptr.left;
        }
        ptr = stack.pop();
        result.push(ptr.val);
        ptr = ptr.right;
    }

    return result;
};
