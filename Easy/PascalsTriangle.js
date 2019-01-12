const generateTriangle = numRows => {
  if (numRows) {
    let result = [[1]];
    for (let i = 1; i < numRows; i++) {
      for (let j = 0; j < i + 1; j++) {
        result[i][j] = result[i - 1][j] || 0 + result[i - 1][j - 1] || 0;
      }
    }

    return result;
  } else {
    return [];
  }
};

// Test Cases
// generateTriangle(1) --> [[1]]
// generateTriangle(5) -->
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]
// generateTriangle(0) --> 0
