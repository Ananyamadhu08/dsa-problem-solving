// Given an array arr containing n distinct numbers in the range of 0 to n, return the only number in the range that is missing from the array.

function findMissingNumber(arr, n) {
  const expectedSum = (n * (n + 1)) / 2;

  let actualSum = 0;

  for (let num of arr) {
    actualSum += num;
  }

  return expectedSum - actualSum;
}

const numArr = [0, 1, 2, 3, 5];

const result = findMissingNumber(numArr, 5);

console.log(result);

// Time complexity: O(N)
// Space complexity: O(1)
