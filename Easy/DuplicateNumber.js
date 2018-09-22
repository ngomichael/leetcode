// Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.

// Example 1:

// Input: [1,3,4,2,2]
// Output: 2
// Example 2:

// Input: [3,1,3,4,2]
// Output: 3
// Note:

// You must not modify the array (assume the array is read only).
// You must use only constant, O(1) extra space.
// Your runtime complexity should be less than O(n2).
// There is only one duplicate number in the array, but it could be repeated more than once.

//Runtime - O(n)
function missingNumber(nums) {
  if (!Array.isArray(nums) || nums.length === 0) {
    return -1;
  }

  let sum = 0;
  for (let i = 0; i <= nums.length; i++) {
    sum += i;
    console.log(sum);
    if (i < nums.length) {
      sum -= nums[i];
    }
  }

  return sum;
}

// Test Cases
// missingNumber([]) --> -1
// missingNumber(null) --> -1
// missingNumber([1, 2, 3, 4]) --> 0
// missingNumber([0, 1, 2, 4]) --> 3
