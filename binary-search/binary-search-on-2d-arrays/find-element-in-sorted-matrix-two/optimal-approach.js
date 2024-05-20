// given a non-empty matrix with 'n' rows and 'm' columns. All the rows and columns are sorted in ascending order. The first element of a row is not necessarily greater than the last element of the previous row if it exists. Given a target, find if it exists in the given matrix or not.

function findElementInMatrix(matrix, target) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  let row = 0;
  let col = cols - 1;

  while (row < rows && col >= 0) {
    const matrixElement = matrix[row][col];

    if (matrixElement == target) {
      return [row, col];
    } else if (matrixElement < target) {
      row++;
    } else {
      col--;
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

// Time complexity: O(row + cols)
// Space complexity: O(1)
