/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  // if n isn't a number
  if (typeof n !== number) return 0;

  // toString(2) will show as a binary value
  return n
    .toString(2)
    .split('0')
    .join('').length;
};

// Test Cases
// hammingWeight(11100000111000) --> 6
// hammingWeight(00000000000000) --> 0
// hammingWeight(null) --> 0
// hammingWeight(11100000111000)
