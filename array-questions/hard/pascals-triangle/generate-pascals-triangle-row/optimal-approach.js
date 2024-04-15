// Given the row number, find the nth row of Pascal's triangle.

function findPascalsTriangleRow(row) {
  let rowElements = "";

  let currElement = 1;

  rowElements += currElement + " ";

  for (let i = 1; i < row; i++) {
    currElement *= (row - i) / i;

    rowElements += currElement + " ";
  }

  return rowElements;
}

const row = 5;

const result = findPascalsTriangleRow(row);

console.log(result);

// Time complexity: O(row)
// Space complexity: O(1)
