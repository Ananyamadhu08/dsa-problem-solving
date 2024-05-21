// given a matrix with 'n' rows and 'm' columns. find the coordinates of the peak element. Peak element is defined as the element greater than all of its neighbors. If there are multiple peak elements, return the coordinates of any peak element.

function findPeakElementInMatrix(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const matrixElement = matrix[i][j];

      const leftElement = j - 1 >= 0 ? matrix[i][j - 1] : -1;
      const rightElement = j + 1 < cols ? matrix[i][j + 1] : -1;

      const topElement = i - 1 >= 0 ? matrix[i - 1][j] : -1;
      const bottomElement = i + 1 < rows ? matrix[i + 1][j] : -1;

      if (
        matrixElement > leftElement &&
        matrixElement > rightElement &&
        matrixElement > topElement &&
        matrixElement > bottomElement
      ) {
        return [i, j];
      }
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

// Time complexity: O(rows * cols * 4)
// Space complexity: O(1)
