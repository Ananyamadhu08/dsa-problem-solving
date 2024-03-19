// Given an array arr containing n distinct numbers in the range of 0 to n, return the only number in the range that is missing from the array.

function findMissingNumber(arr, n) {
  let xorInputArr = 0;
  let xorNum = 0;

  for (let num of arr) {
    xorInputArr ^= num;
  }

  for (let i = 1; i <= n; i++) {
    xorNum ^= i;
  }

  return xorInputArr ^ xorNum;
}

const numArr = [0, 1, 2, 3, 5];

const result = findMissingNumber(numArr, 5);

console.log(result);

// Time complexity: O(N)
// Space complexity: O(1)
