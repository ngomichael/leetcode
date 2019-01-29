// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

// Example 1:

// Input: [1,2,3,1]
// Output: true
// Example 2:

// Input: [1,2,3,4]
// Output: false
// Example 3:

// Input: [1,1,1,3,3,4,3,2,4,2]
// Output: true

//Runtime - O(n)
function containsDuplicate(nums) {
  if (!Array.isArray(nums)) {
    return false;
  }

  let count = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const numCount = count[num];
    numCount = numCount ? numCount + 1 : 1;
    if (numCount > 1) return true;
  }

  return false;
}

//Runtime - Faster than above - from discussion board
//Use set
function containsDuplicate(nums) {
  if (!Array.isArray(nums) || nums.length === 1 || nums.length === 0) {
    return false;
  }

  return nums.length !== new Set(nums).size;
}

// Test Cases
// containsDuplicate([]) --> false
// containsDuplicate([1, 2, 4]) --> false
// containsDuplicate([1, 3, 5, 1]) --> true
// containsDuplicate(null) --> false


