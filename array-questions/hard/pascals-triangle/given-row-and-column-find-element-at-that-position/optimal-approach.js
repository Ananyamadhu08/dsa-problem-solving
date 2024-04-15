// Given the row and column number, print the element at that position in Pascal's triangle.

function findPascalsTriangleElement(row, column) {
  let result = 1;

  row--;
  column--;

  for (let i = 0; i < column; i++) {
    result = result * ((row - i) / (i + 1));
  }

  return result;
}

const row = 5;

const column = 3;

const result = findPascalsTriangleElement(row, column);

console.log(result);

// Time complexity: O(column)
// Space complexity: O(1)
