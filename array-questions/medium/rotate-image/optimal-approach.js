// Given an n x n 2D matrix representing an image, rotate the image by 90 degrees clockwise.

function rotateMatrix(matrix) {
  const n = matrix.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }
}

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

rotateMatrix(matrix);

console.log(matrix);

// Time complexity: O(N^2)
// Space complexity: O(1)
