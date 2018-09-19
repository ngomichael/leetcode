// Write a program that outputs the string representation of numbers from 1 to n.

// But for multiples of three it should output
// “Fizz” instead of the number and for the multiples of five output “Buzz”.
// For numbers which are multiples of both three and five output “FizzBuzz”.

// Example:
// n = 15,
// Return:
// [
//     "1",
//     "2",
//     "Fizz",
//     "4",
//     "Buzz",
//     "Fizz",
//     "7",
//     "8",
//     "Fizz",
//     "Buzz",
//     "11",
//     "Fizz",
//     "13",
//     "14",
//     "FizzBuzz"
// ]

//Runtime - O(n)
function fizzBuzz(num) {
  if (typeof num !== 'number') {
    return -1;
  }

  let output = [];

  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      output.push('FizzBuzz');
    } else if (i % 3 === 0) {
      output.push('Fizz');
    } else if (i % 5 === 0) {
      output.push('Buzz');
    } else {
      output.push(i.toString());
    }
  }
  return output;
}

// Test Cases - Some tests may not apply to the leetcode problem
//but are there just in case there aren't the same assumptions when interviewing
// fizzBuzz(15) -->
// fizzBuzz(0) --> []
// fizzBuzz('hi') --> -1
