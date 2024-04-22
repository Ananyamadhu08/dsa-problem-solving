// You are given an array of integers in the range 1 to n, each integer appears exactly once except A which appears twice and B which is missing. Find the repeating and missing numbers.

function findRepeatingAndMissingNumbers(arr) {
  const n = arr.length;

  const sumFirstNumbers = (n * (n + 1)) / 2;
  const sumSquareOfFirstNumbers = (n * (n + 1) * (2 * n + 1)) / 6;

  let sumArrayNumbers = 0;
  let sumSquareOfArrayNumbers = 0;

  for (let i = 0; i < n; i++) {
    sumArrayNumbers += arr[i];
    sumSquareOfArrayNumbers += arr[i] * arr[i];
  }

  const valueOne = sumArrayNumbers - sumFirstNumbers;
  let valueTwo = sumSquareOfArrayNumbers - sumSquareOfFirstNumbers;

  valueTwo = valueTwo / valueOne;

  const repeatingNum = (valueOne + valueTwo) / 2;
  const missingNum = repeatingNum - valueOne;

  return [repeatingNum, missingNum];
}

const numArr = [3, 5, 1, 3, 4];

const result = findRepeatingAndMissingNumbers(numArr);

console.log(result);

// Time complexity: O(N)
// Space complexity: O(1)
