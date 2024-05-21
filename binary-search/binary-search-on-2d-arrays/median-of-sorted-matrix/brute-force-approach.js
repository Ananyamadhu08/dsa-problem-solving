// given a matrix with 'n' rows and 'm' columns. Assume that 'n' and 'm' will always be odd and that all the rows are sorted in ascending order. Find the median of the given matrix.

function findMedianOfMatrix(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const totalElements = rows * cols;

  const medianIndex = Math.floor(totalElements / 2);

  const mergedArr = [];

  let mergedArrIndex = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      mergedArr[mergedArrIndex] = matrix[i][j];

      mergedArrIndex++;
    }
  }

  mergedArr.sort((a, b) => a - b);

  const median = mergedArr[medianIndex];

  return median;
}

const matrix = [
  [3, 5, 8],
  [1, 4, 6],
  [2, 7, 9],
];

const result = findMedianOfMatrix(matrix);

console.log(result);

// Time complexity: O(totalElements) + O(totalElements log totalElements)
// Space complexity: O(totalElements)
