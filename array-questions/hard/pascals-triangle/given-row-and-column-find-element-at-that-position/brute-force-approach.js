// Given the row and column number, print the element at that position in Pascal's triangle.

function findFactorial(num) {
  let result = 1;

  for (let i = 2; i <= num; i++) {
    result *= i;
  }

  return result;
}

function findPascalsTriangleElement(row, column) {
  row--;
  column--;

  return (
    findFactorial(row) / (findFactorial(column) * findFactorial(row - column))
  );
}

const row = 5;

const column = 3;

const result = findPascalsTriangleElement(row, column);

console.log(result);

// Time complexity: O(row)
// Space complexity: O(1)
