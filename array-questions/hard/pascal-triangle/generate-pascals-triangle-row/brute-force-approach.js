// Given the row number, find the nth row of Pascal's triangle.

function findPascalsTriangleElement(row, column) {
  let result = 1;

  row--;
  column--;

  for (let i = 0; i < column; i++) {
    result = result * ((row - i) / (i + 1));
  }

  return result;
}

function findPascalsTriangleRow(row) {
  let rowElements = "";

  for (let i = 1; i <= row; i++) {
    rowElements += findPascalsTriangleElement(row, i) + " ";
  }

  return rowElements;
}

const row = 5;

const result = findPascalsTriangleRow(row);

console.log(result);

// Time complexity: O(row^2)
// Space complexity: O(1)
