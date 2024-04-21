// You are given an array of integers in the range 1 to n, each integer appears exactly once except A which appears twice and B which is missing. Find the repeating and missing numbers.

function findRepeatingAndMissingNumbers(arr) {
  const n = arr.length;

  let repeatingNum = -1;
  let missingNum = -1;

  let hashArr = new Array(n + 1).fill(0);

  for (let i = 0; i < n; i++) {
    hashArr[arr[i]]++;
  }

  for (let i = 1; i <= n; i++) {
    if (hashArr[i] == 2) {
      repeatingNum = i;
    } else if (hashArr[i] == 0) {
      missingNum = i;
    }

    if (repeatingNum != -1 && missingNum != -1) break;
  }

  return [repeatingNum, missingNum];
}

const numArr = [3, 5, 1, 3, 4];

const result = findRepeatingAndMissingNumbers(numArr);

console.log(result);

// Time complexity: O(N)
// Space complexity: O(N)
