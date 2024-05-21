// given a non-empty matrix with 'n' rows and 'm' columns. All the rows are sorted in ascending order. The first element of a row is greater than the last element of the previous row if it exists. You are given a target, find if it exists in the given matrix or not.

function checkIfElementExists(row, target) {
  const n = row.length;

  let low = 0;
  let high = n - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (row[mid] == target) {
      return true;
    } else if (row[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return false;
}

function findElementInMatrix(matrix, target) {
  let rows = matrix.length;
  let cols = matrix[0].length;

  for (let i = 0; i < rows; i++) {
    const row = matrix[i];

    if (row[0] <= target && target <= row[cols - 1]) {
      return checkIfElementExists(row, target);
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

// Time complexity: O(rows * log(cols))
// Space complexity: O(1)
