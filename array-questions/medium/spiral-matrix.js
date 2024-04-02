// Given an m x n matrix, return all elements of the matrix in spiral order.

function spiralOrder(matrix) {
  if (matrix.length === 0) return [];

  let resultArr = [];

  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      resultArr.push(matrix[top][i]);
    }

    top++;

    for (let i = top; i <= bottom; i++) {
      resultArr.push(matrix[i][right]);
    }

    right--;

    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        resultArr.push(matrix[bottom][i]);
      }

      bottom--;
    }

    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        resultArr.push(matrix[i][left]);
      }

      left++;
    }
  }

  return resultArr;
}

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const result = spiralOrder(matrix);

console.log(result);

// Time complexity: O(rows * cols)
// Space complexity: O(rows * cols)
