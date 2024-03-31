// Given an m x n integer matrix, if an element is 0 set it's entire row and column to 0's.

function setMatrixZeros(matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;
  let colZero = 1;

  for (let i = 0; i < rows; i++) {
    if (matrix[i][0] === 0) colZero = 0;

    for (let j = 1; j < cols; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = matrix[0][j] = 0;
      }
    }
  }

  for (let i = rows - 1; i >= 0; i--) {
    for (let j = cols - 1; j >= 1; j--) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }

    if (colZero === 0) matrix[i][0] = 0;
  }
}

let matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];

setMatrixZeros(matrix);

console.log(matrix);

// Time complexity: O(rows * cols)
// Space complexity: O(1)
