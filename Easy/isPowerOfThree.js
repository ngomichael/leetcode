/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  // if the number is 0 or negative
  if (n <= 0) return false;
  for (let i = 0; i < n; i++) {
    const powerOfI = Math.pow(3, i);
    if (powerOfI === n) return true;
    if (powerOfI > n) return false;
  }
};

// Test Cases
// isPowerOfThree(27) --> true
// isPowerOfThree(-4) --> false
// isPowerOfThree(0) --> false
// isPowerOfThree(5) --> false
