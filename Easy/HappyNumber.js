`A happy number is a number defined by the following process: Starting 
with any positive integer, replace the number by the sum of the squares 
of its digits, and repeat the process until the number equals 1 (where 
it will stay), or it loops endlessly in a cycle which does not 
include 1. Those numbers for which this process ends in 1 are 
happy numbers.`;

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let seen = {};
  while (n !== 1 && !seen[n]) {
    seen[n] = true;
    n = sumOfSquares(n.toString());
  }
  return n === 1;
};

function sumOfSquares(number) {
  return number.split('').reduce((acc, num) => {
    return (acc += Math.pow(Number(num), 2));
  }, 0);
}

// Test Cases
// isHappy(19) --> true
// isHappy(0) --> false
// isHappy(130) --> true
