// given a non-empty matrix with 'n' rows and 'm' columns. All the rows are sorted in ascending order. The first element of a row is greater than the last element of the previous row if it exists. You are given a target, find if it exists in the given matrix or not.

function findElementInMatrix(matrix, target) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  let low = 0;
  let high = rows * cols - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    let row = Math.floor(mid / cols);
    let col = mid % cols;

    matrixElement = matrix[row][col];

    if (matrixElement == target) {
      return true;
    } else if (matrixElement < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
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

// Time complexity: O(log(rows * cols))
// Space complexity: O(1)
