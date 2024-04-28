// Given a sorted array of integers and a target x, find the upper bound of x.

function findUpperBound(arr, target) {
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    if (arr[i] > target) {
      return i;
    }
  }

  return n;
}

const numArr = [3, 4, 6, 7, 9];

const target = 6;

const result = findUpperBound(numArr, target);

console.log(result);

// Time complexity: O(N)
// Space complexity: O(1)
