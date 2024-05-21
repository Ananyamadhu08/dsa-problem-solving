// given a matrix with 'n' rows and 'm' columns. find the coordinates of the peak element. Peak element is defined as the element greater than all of its neighbors. If there are multiple peak elements, return the coordinates of any peak element.

function findMaxColElementIndex(matrix, rows, col) {
  let maxElement = -Infinity;

  let rowIndex = -1;

  for (let i = 0; i < rows; i++) {
    const matrixElement = matrix[i][col];

    if (matrixElement > maxElement) {
      maxElement = matrixElement;

      rowIndex = i;
    }
  }

  return rowIndex;
}

function findPeakElementInMatrix(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  let low = 0;
  let high = cols - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    const rowIndex = findMaxColElementIndex(matrix, rows, mid);

    const matrixElement = matrix[rowIndex][mid];

    const leftElement = mid - 1 >= 0 ? matrix[rowIndex][mid - 1] : -1;
    const rightElement = mid + 1 < cols ? matrix[rowIndex][mid + 1] : -1;

    if (matrixElement > leftElement && matrixElement > rightElement) {
      return [rowIndex, mid];
    } else if (matrixElement < leftElement) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return [-1, -1];
}

const matrix = [
  [1, 4, 2],
  [2, 9, 3],
  [1, 7, 6],
];

const result = findPeakElementInMatrix(matrix);

console.log(result);

// Time complexity: O(log(cols) * rows)
// Space complexity: O(1)
