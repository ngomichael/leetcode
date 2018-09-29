// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Example:

// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Follow up:

// If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

function maxSubarray(nums) {
  if (!Array.isArray(nums) || nums.length === 0) {
    return 0;
  }
  if (nums.length === 1) {
    return nums[0];
  }
  let globalMax,
    currentMax = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currentMax = Math.max(nums[i], currentMax + nums[i]);
    if (currentMax > globalMax) {
      globalMax = currentMax;
    }
  }
  return globalMax;
}

// Test Cases
// maxSubarray([]) --> 0
// maxSubarray([100, -20, -50, 400]) --> 430
// maxSubarray([-8]) --> -8
// maxSubarray(null) --> 0
