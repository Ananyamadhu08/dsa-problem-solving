// Given a sorted array of integers and a target x, find the upper bound of x.

function findUpperBound(arr, target) {
  const n = arr.length;

  let low = 0;
  let high = n - 1;

  let upperBound = n;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] > target) {
      upperBound = mid;

      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return upperBound;
}

const numArr = [3, 4, 6, 7, 9];

const target = 6;

const result = findUpperBound(numArr, target);

console.log(result);

// Time complexity: O(log N)
// Space complexity: O(1)
