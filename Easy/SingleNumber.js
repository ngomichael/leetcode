// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// Example 1:

// Input: [2,2,1]
// Output: 1
// Example 2:

// Input: [4,1,2,1,2]
// Output: 4

//Runtime - O(n) - Time Limit Exceeded
function singleNumber(arr) {
  if (!Array.isArray(arr)) {
    return -1;
  }

  const count = arr.reduce(
    (acc, num) => ({
      ...acc,
      [num]: acc[num] ? acc[num] + 1 : 1
    }),
    {}
  );

  for (num in count) {
    if (count[num] === 1) {
      return Number(num);
    }
  }
}

//XOR
function singleNumber(arr) {
  return arr.reduce((num1, num2) => num1 ^ num2);
}

//Runtime - O(n)
var singleNumber = function(nums) {
  let numObj = {};
  for (let i = 0; i < nums.length + 1; i++) {
    let num = nums[i];
    if (numObj.hasOwnProperty(num)) {
      numObj[num] = -1;
    } else {
      numObj[num] = 1;
    }
  }

  for (key in numObj) {
    if (numObj[key] === 1) {
      return Number(key);
    }
  }
};

// Test Cases - Some tests may not apply to the leetcode problem
//but are there just in case there aren't the same assumptions when interviewing
// singleNumber([1, 0, 0, 0]) --> 1
// singleNumber([]) --> []
