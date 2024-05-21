// given a matrix with 'n' rows and 'm' columns. find the coordinates of the peak element. Peak element is defined as the element greater than all of its neighbors. If there are multiple peak elements, return the coordinates of any peak element.

function findPeakElementInMatrix(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  let maxElement = -Infinity;

  let rowIndex = -1;
  let colIndex = -1;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const matrixElement = matrix[i][j];

      if (matrixElement > maxElement) {
        maxElement = matrixElement;

        rowIndex = i;
        colIndex = j;
      }
    }
  }

  return [rowIndex, colIndex];
}

const matrix = [
  [1, 4, 2],
  [2, 9, 3],
  [1, 7, 6],
];

const result = findPeakElementInMatrix(matrix);

console.log(result);

// Time complexity: O(row * cols)
// Space complexity: O(1)
