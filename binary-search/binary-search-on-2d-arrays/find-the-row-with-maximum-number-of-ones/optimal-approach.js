// given a non-empty matrix with 'n' rows and 'm' columns consisting of only 0's and 1's. All the rows are sorted in ascending order. Find the index of the row with the maximum number of ones. If two rows have the same number of ones, consider the one with a smaller index. If there's no row with at least 1 zero, return -1.

function indexOfFirstOccurrenceOfOne(row, cols) {
  let low = 0;
  let high = cols - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (row[mid] == 1) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return low;
}

function findRowWithMaximumOnes(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  let maxCountOnes = 0;
  let maxRowIndex = -1;

  for (let i = 0; i < rows; i++) {
    const row = matrix[i];

    const firstOneIndex = indexOfFirstOccurrenceOfOne(row, cols);

    const countOnes = cols - firstOneIndex;

    if (countOnes > maxCountOnes) {
      maxCountOnes = countOnes;
      maxRowIndex = i;
    }
  }

  return maxRowIndex;
}

const matrix = [
  [0, 1, 1],
  [1, 1, 1],
  [0, 0, 1],
];

const result = findRowWithMaximumOnes(matrix);

console.log(result);

// Time complexity: O(rows * log(cols))
// Space complexity: O(1)
