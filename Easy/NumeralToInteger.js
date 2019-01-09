/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const numeralVals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const subtractOne = {
    V: 4,
    X: 9,
  };

  const subtractTen = {
    L: 40,
    C: 90,
  };

  const subtractHundred = {
    D: 400,
    M: 900,
  };

  const numerals = s.split('');
  let outputInteger = 0;

  for (let i = 0; i < numerals.length; i++) {
    if (s[i] === 'I' && subtractOne[s[i + 1]]) {
      outputInteger += subtractOne[s[i + 1]];
      i++;
    } else if (s[i] === 'X' && subtractTen[s[i + 1]]) {
      outputInteger += subtractTen[s[i + 1]];
      i++;
    } else if (s[i] === 'C' && subtractHundred[s[i + 1]]) {
      outputInteger += subtractHundred[s[i + 1]];
      i++;
    } else {
      outputInteger += numeralVals[s[i]];
    }
  }

  return outputInteger;
};

// Test Cases
// romanToInt('IV') --> 4
// romanToInt('XL') --> 40
// romanToInt('MCMXCIV') --> 1994

var romanToInt = function(s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let i = s.length;
  let result = 0;

  while (i--) {
    const curr = map[s.charAt(i)];
    const prev = map[s.charAt(i - 1)];

    result += curr;

    if (prev < curr) {
      result -= prev;
      i -= 1;
    }
  }

  return result;
};
