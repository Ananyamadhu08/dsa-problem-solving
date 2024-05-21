// given a non-empty matrix with 'n' rows and 'm' columns. All the rows and columns are sorted in ascending order. The first element of a row is not necessarily greater than the last element of the previous row if it exists. Given a target, find if it exists in the given matrix or not.

function findColIndex(row, target) {
  const n = row.length;

  let low = 0;
  let high = n - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (row[mid] == target) {
      return mid;
    } else if (low < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

function findElementInMatrix(matrix, target) {
  const rows = matrix.length;

  for (let i = 0; i < rows; i++) {
    const row = matrix[i];

    const colIndex = findColIndex(row, target);

    if (colIndex != -1) {
      return [i, colIndex];
    }
  }

  return [-1, -1];
}

const matrix = [
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
];

const target = 5;

const result = findElementInMatrix(matrix, target);

console.log(result);

// Time complexity: O(rows * log(cols))
// Space complexity: O(1)
