// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.

// Example 1:

// Input: [3,2,3]
// Output: 3
// Example 2:

// Input: [2,2,1,1,1,2,2]
// Output: 2

//Runtime - O(n)
function majorityElement(arr) {
  if (!Array.isArray(arr)) {
    return -1;
  }

  const count = arr.reduce(
    (acc, num) => ({
      ...acc,
      [num]: acc[num] ? acc[num] + 1 : 1,
    }),
    {}
  );

  for (num in count) {
    if (count[num] > arr.length / 2) {
      return num;
    }
  }

  return -1;
}

//Runtime - O(n): Discussion board answer much faster
function majorityElement(nums) {
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = obj[nums[i]] + 1 || 1;
    if (obj[nums[i]] > nums.length / 2) return nums[i];
  }
}

// Test Cases
// majorityElement([1, 2]) --> -1
// majorityElement([]) --> -1
// majorityElement(null) --> -1
// majorityElement([10, 2, 10]) --> 10
