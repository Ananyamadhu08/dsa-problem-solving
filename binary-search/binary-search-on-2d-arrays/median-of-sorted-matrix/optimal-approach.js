// given a matrix with 'n' rows and 'm' columns. Assume that 'n' and 'm' will always be odd and that all the rows are sorted in ascending order. Find the median of the given matrix.

function findUpperBoundIndex(row, cols, target) {
  let low = 0;
  let high = cols - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (row[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return low;
}

function countLessOrEqual(matrix, rows, cols, target) {
  let elementCount = 0;

  for (let i = 0; i < rows; i++) {
    const upperBoundIndex = findUpperBoundIndex(matrix[i], cols, target);

    elementCount += upperBoundIndex;
  }

  return elementCount;
}

function findMedianOfMatrix(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const totalElements = rows * cols;

  const numOfLeftElements = Math.floor(totalElements / 2);

  let minElement = Infinity;
  let maxElement = -Infinity;

  for (let i = 0; i < rows; i++) {
    minElement = Math.min(minElement, matrix[i][0]);
    maxElement = Math.max(maxElement, matrix[i][cols - 1]);
  }

  let low = minElement;
  let high = maxElement;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    const elementsCount = countLessOrEqual(matrix, rows, cols, mid);

    if (elementsCount <= numOfLeftElements) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return low;
}

const matrix = [
  [3, 5, 8],
  [1, 4, 6],
  [2, 7, 9],
];

const result = findMedianOfMatrix(matrix);

console.log(result);

// Time complexity: O(rows) + O(log(maxElement - minElement) * (rows * log(cols)))
// Space complexity: O(1)
