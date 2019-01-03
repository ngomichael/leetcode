/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (root === null || root === undefined) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

// Test Cases
// maxDepth([3, 9, 20, null, null, 15, 7]) --> 3
// maxDepth([3, 9, 20, null, null, 15, 7]) --> 3
// maxDepth([3, 9, 20, null, null, 15, 7]) --> 3
