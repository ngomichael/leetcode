/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if (!nums.length || nums === null) return null;
  const mid = Math.floor(nums.length / 2);
  const root = new TreeNode(nums[mid]);
  root.left = sortedArrayToBST(nums.slice(0, mid));
  root.right = sortedArrayToBST(nums.slice(mid + 1));
  return root;
};

// Test Cases
// majorityElement([1, 2, 3, 5]) --> [3, 2, 5, 1]
// majorityElement([]) --> null
// majorityElement(null) --> null
// majorityElement([-10, -3, 0, 5, 9]) --> [0,-3,9,-10,null,5]
