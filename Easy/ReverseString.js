// Write a function that takes a string as input and returns the string reversed.

// Example 1:
// Input: "hello"
// Output: "olleh"

// Example 2:
// Input: "A man, a plan, a canal: Panama"
// Output: "amanaP :lanac a ,nalp a ,nam A"

//Runtime - O(n)
function reverse(string) {
  return [...string].reverse().join('');
}

//Runtime - O(n)
function reverse(string) {
  if (typeof string !== 'string') {
    return -1;
  }

  let reversed = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string.charAt(i);
  }
  return reversed;
}

// Test Cases - Some tests may not apply to the leetcode problem
//but are there just in case there aren't the same assumptions when interviewing
// reverse('hello') --> 'olleh'
// reverse('') --> ''
// reverse(7) --> -1
