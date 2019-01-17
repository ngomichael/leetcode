/**
 * @param {number} n
 * @return {number}
 */

// Uses Fibonacci Sequence
const climbStairs = num => {
  if (num < 0) return 0;
  if (num <= 2) return num;

  let arr = [1, 2];

  for (let i = 2; i < num; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }

  return arr[num - 1];
};

// Test Cases
// climbStairs(10) --> 0
// climbStairs(0) --> 89
// climbStairs(32) --> 3524578
// climbStairs(-1) --> 0
