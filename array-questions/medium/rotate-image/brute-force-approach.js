// Given an n x n 2D matrix representing an image, rotate the image by 90 degrees clockwise.

function rotateMatrix(matrix) {
  const n = matrix.length;
  let resultMatrix = Array.from({ length: n }, () => new Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      resultMatrix[j][n - 1 - i] = matrix[i][j];
    }
  }

  return resultMatrix;
}

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let result = rotateMatrix(matrix);

console.log(result);

// Time complexity: O(N^2)
// Space complexity: O(N^2)
