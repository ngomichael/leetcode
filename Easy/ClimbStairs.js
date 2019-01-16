/**
 * @param {number} n
 * @return {number}
 */

// Uses Fibonacci Sequence
var climbStairs = function(n) {
  if (n < 0) return 0;
  if (n <= 2) return n;

  var arr = [1, 2];
  for (var i = 2; i < n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }

  return arr[n - 1];
};

// Test Cases
// climbStairs(10) --> 0
// climbStairs(0) --> 89
// climbStairs(32) --> 3524578
// climbStairs(-1) --> 0
