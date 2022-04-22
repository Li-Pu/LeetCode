/**
 * @param {TreeNode} root
 * @return {string}
 * time: 68ms space: 47MB
 */
var tree2str = function (root) {
    let ret = '';
    if (!root) {
        return ret;
    }
    const stack = [root];
    const visited = new Set();

    while (stack.length > 0) {
        const node = stack[stack.length - 1];
        if (visited.has(node)) {
            if (node !== root) {
                ret += ')'
            }
            stack.pop();
        } else {
            visited.add(node);
            if (node !== root) {
                ret += '('
            }
            ret += '' + node.val
            if (!node.left && node.right) {
                ret += '()'
            }
            if (node.right) {
                stack.push(node.right)
            }
            if (node.left) {
                stack.push(node.left)
            }
        }
    }


    return ret;
};

