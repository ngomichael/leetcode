var removeDuplicates = function(nums) {
  if (!nums) return nums;
  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i];
    let nextNum = nums[i + 1];

    if (curr === nextNum) {
      nums.splice(i, 1);
      i--;
    }
  }
};

// Test Cases
// removeDuplicates([1, 2, 3, 3, 5]) --> [1, 2, 3, 5]
// removeDuplicates([]) --> []
// removeDuplicates(null) --> null
// removeDuplicates(1, 1, 2, 3, 4, 4, 5) --> [1, 2, 3, 4, 5]
