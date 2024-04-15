// Given the numbers of rows, generate a Pascal's triangle.

function findPascalsTriangleRow(row) {
  let rowElements = [1];

  let currElement = 1;

  for (let i = 1; i < row; i++) {
    currElement *= (row - i) / i;

    rowElements.push(currElement);
  }

  return rowElements;
}

function generatePascalsTriangle(row) {
  let pascalTriangleArr = [];

  for (let i = 1; i <= row; i++) {
    pascalTriangleArr.push(findPascalsTriangleRow(i));
  }

  return pascalTriangleArr;
}

const row = 5;

const result = generatePascalsTriangle(row);

for (let i = 0; i < result.length; i++) {
  console.log(result[i].join(" "));
}

// Time complexity: O(row^2)
// Space complexity: O(row^2)
