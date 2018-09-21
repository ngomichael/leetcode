// Given two strings s and t , write a function to determine if t is an anagram of s.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false
// Note:
// You may assume the string contains only lowercase alphabets.

// Follow up:
// What if the inputs contain unicode characters? How would you adapt your solution to such case?

//Runtime - O(nlogn)
function isAnagram(s, t) {
  if (s.length !== t.length || (s === null || t === null)) return false;

  const sortedS = s
    .toLowerCase()
    .split('')
    .sort()
    .join('');
  const sortedT = t
    .toLowerCase()
    .split('')
    .sort()
    .join('');

  if (sortedS === sortedT) {
    return true;
  }

  return false;
}

//Runtime - O(n)
function isAnagram(s, t) {
  if (s.length !== t.length || s === null || t === null) {
    return false;
  }

  let chars = {};

  for (let i = 0; i < s.length; i++) {
    if (chars[s[i]]) {
      chars[s[i]]++;
    } else {
      chars[s[i]] = 1;
    }
  }

  //   const count = s.split('').reduce(
  //     (acc, char) => ({
  //       ...acc,
  //       [char]: acc[char] ? acc[char] + 1 : 1
  //     }),
  //     {}
  //   );

  for (let i = 0; i < t.length; i++) {
    if (!chars[t[i]] || chars[t[i]] === 0) {
      return false;
    } else {
      chars[t[i]]--;
    }
  }

  return true;
}

// Test Cases
// isAnagram('Hhi', 'hih') --> true
// isAnagram('asdf', 'ih') --> false
// isAnagram(null, 'ih') --> false
