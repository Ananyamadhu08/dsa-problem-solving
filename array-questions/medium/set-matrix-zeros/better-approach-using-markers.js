// Given an m x n integer matrix, if an element is 0 set it's entire row and column to 0's.

function setMatrixZeros(matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;

  let rowMarker = new Array(rows).fill(0);
  let colMarker = new Array(cols).fill(0);

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 0) {
        rowMarker[i] = 1;
        colMarker[j] = 1;
      }
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (rowMarker[i] === 1 || colMarker[j] === 1) {
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
// Space complexity: O(rows + cols)
