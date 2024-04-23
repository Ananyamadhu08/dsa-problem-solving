// You are given an array of integers in the range 1 to n, each integer appears exactly once except A which appears twice and B which is missing. Find the repeating and missing numbers.

function findRepeatingAndMissingNumbers(arr) {
  const n = arr.length;

  let xor = 0;

  for (let i = 0; i < n; i++) {
    xor = xor ^ arr[i];
    xor = xor ^ (i + 1);
  }

  const number = xor & ~(xor - 1);

  let xorOfZeroNumbers = 0;
  let xorOfOneNumbers = 0;

  for (let i = 0; i < n; i++) {
    if ((arr[i] & number) != 0) {
      xorOfOneNumbers = xorOfOneNumbers ^ arr[i];
    } else {
      xorOfZeroNumbers = xorOfZeroNumbers ^ arr[i];
    }
  }

  for (let i = 1; i <= n; i++) {
    if ((i & number) != 0) {
      xorOfOneNumbers = xorOfOneNumbers ^ i;
    } else {
      xorOfZeroNumbers = xorOfZeroNumbers ^ i;
    }
  }

  let count = 0;

  for (let i = 0; i < n; i++) {
    if (arr[i] == xorOfZeroNumbers) count++;
  }

  if (count == 2) {
    return [xorOfZeroNumbers, xorOfOneNumbers];
  } else {
    return [xorOfOneNumbers, xorOfZeroNumbers];
  }
}

const numArr = [3, 5, 1, 3, 4];

const result = findRepeatingAndMissingNumbers(numArr);

console.log(result);

// Time complexity: O(N)
// Space complexity: O(1)
