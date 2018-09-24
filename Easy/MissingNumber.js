// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

// Example 1:

// Input: [3,0,1]
// Output: 2
// Example 2:

// Input: [9,6,4,2,3,5,7,0,1]
// Output: 8
// Note:
// Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?

function missingNumber(nums) {
  if (!Array.isArray(nums)) return -1;
  if (nums.length === 0) return 0;

  let sum = 0;
  for (let i = 0; i <= nums.length; i++) {
    sum += i;
    if (i < nums.length) {
      sum -= nums[i];
    }
  }
  return sum;
}

// Test Cases
// missingNumber([0, 1, 2]) --> 3
// missingNumber([3, 2, 0]) -->
// missingNumber([]) --> 0
// missingNumber(7) --> -1
