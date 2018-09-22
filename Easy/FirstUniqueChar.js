// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode",
// return 2.
// Note: You may assume the string contain only lowercase letters.

function firstUnique(string) {
  if (typeof string !== 'string' || string === null || string.length === 0) {
    return -1;
  }

  const indicies = string.split('').reduce((acc, char) => {
    acc[char] = acc[char] ? acc[char] + 1 : 1;
    return acc;
  }, {});

  for (let i = 0; i < s.length; i++) {
    if (indicies[string[i]] === 1) {
      return i;
    }
  }
  return -1;
}

function firstUnique(string) {
  for (let i = 0; i < string.length; i++) {
    if (string.indexOf(string[i]) === string.lastIndexOf(string[i])) {
      return i;
    }
  }
  return -1;
}
