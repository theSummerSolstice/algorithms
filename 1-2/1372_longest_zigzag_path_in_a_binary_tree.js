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
 */
 var longestZigZag = function(root) {
  let longest = 0;

  function dfs (node, direction, length) {
      if (!node) {
          longest = Math.max(longest, length);
          return;
      }

      if (direction === 'left') {
          dfs(node.right, 'right', length + 1);
          dfs(node.left, 'left', 0);
      }

      if (direction === 'right') {
          dfs(node.left, 'left', length + 1);
          dfs(node.right, 'right', 0);
      }
  }

  dfs(root.left, 'left', 0);
  dfs(root.right, 'right', 0);

  return longest;
}
