// Given an array arr containing n distinct numbers in the range of 0 to n, return the only number in the range that is missing from the array.

function findMissingNumber(arr) {
  const n = arr.length;

  for (let i = 0; i <= n; i++) {
    let found = false;

    for (let j = 0; j < n; j++) {
      if (arr[j] === i) {
        found = true;
        break;
      }
    }

    if (!found) {
      return i;
    }
  }
}

const numArr = [0, 1, 2, 3, 5];

const result = findMissingNumber(numArr);

console.log(result);

// Time complexity: O(N^2)
// Space complexity: O(1)
