// given a non-empty matrix with 'n' rows and 'm' columns. All the rows are sorted in ascending order. The first element of a row is greater than the last element of the previous row if it exists. You are given a target, find if it exists in the given matrix or not.

function findElementInMatrix(matrix, target) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] == target) {
        return true;
      }
    }
  }

  return false;
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const target = 5;

const result = findElementInMatrix(matrix, target);

console.log(result);

// Time complexity: O(rows * cols)
// Space complexity: O(1)
