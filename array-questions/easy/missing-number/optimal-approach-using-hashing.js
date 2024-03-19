// Given an array arr containing n distinct numbers in the range of 0 to n, return the only number in the range that is missing from the array.

function findMissingNumber(arr, n) {
  let arrSet = new Set(arr);

  for (let i = 0; i <= n; i++) {
    if (!arrSet.has(i)) {
      return i;
    }
  }

  return -1;
}

const numArr = [0, 1, 2, 3, 5];

const result = findMissingNumber(numArr, 5);

console.log(result);

// Time complexity: O(N)
// Space complexity: O(N)
