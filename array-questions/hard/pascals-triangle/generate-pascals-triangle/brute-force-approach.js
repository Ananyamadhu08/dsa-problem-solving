// Given the numbers of rows, generate a Pascal's triangle.

function findPascalsTriangleElement(row, column) {
  let result = 1;

  row--;
  column--;

  for (let i = 0; i < column; i++) {
    result *= (row - i) / (i + 1);
  }

  return result;
}

function generatePascalsTriangle(row) {
  let pascalsTriangleArr = [];

  for (let i = 1; i <= row; i++) {
    let rowArr = [];

    for (let j = 1; j <= i; j++) {
      rowArr.push(findPascalsTriangleElement(i, j));
    }

    pascalsTriangleArr.push(rowArr);
  }

  return pascalsTriangleArr;
}

const row = 5;

const result = generatePascalsTriangle(row);

for (let i = 0; i < result.length; i++) {
  console.log(result[i].join(" "));
}

// Time complexity: O(row^2)
// Space complexity: O(row^2)
