// Given two arrays, write a function to compute their intersection.

// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

//Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Note:

// Each element in the result should appear as many times as it shows in both arrays.
// The result can be in any order.
// Follow up:

// What if the given array is already sorted? How would you optimize your algorithm?
// What if nums1's size is small compared to nums2's size? Which algorithm is better?
// What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?

function intersect(nums1, nums2) {
  if (!Array.isArray(nums1) || !Array.isArray(nums2)) {
    return -1;
  }

  const count = nums1.reduce((acc, num) => {
    let numAppears = acc[num];
    numAppears = numAppears ? numAppears + 1 : 1;
    return acc;
  }, {});

  return nums2.filter(num => {
    if (count[num]) {
      count[num]--;
      return true;
    } else {
      return false;
    }
  });
}

// Test Cases
// intersect(8,[]) --> -1
// intersect([],[]) --> []
// intersect([1, 1, 2, 2, 3],[3, 2, 1]) --> [3, 2, 1]
// intersect(null,[]) --> -1
