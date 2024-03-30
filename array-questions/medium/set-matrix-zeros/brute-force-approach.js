// Given an m x n integer matrix, if an element is 0 set it's entire row and column to 0's.

function setMatrixZeros(matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 0) {
        for (let k = 0; k < cols; k++) {
          if (matrix[i][k] !== 0) {
            matrix[i][k] = -1;
          }
        }

        for (let k = 0; k < rows; k++) {
          if (matrix[k][j] !== 0) {
            matrix[k][j] = -1;
          }
        }
      }
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === -1) {
        matrix[i][j] = 0;
      }
    }
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
