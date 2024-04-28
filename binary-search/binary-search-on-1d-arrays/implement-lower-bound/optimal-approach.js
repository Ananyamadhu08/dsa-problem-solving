// Given a sorted array of integers and a target x, find the lower bound of x.

function findLowerBound(arr, target) {
  const n = arr.length;

  let low = 0;
  let high = n - 1;

  let lowerBound = n;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] >= target) {
      lowerBound = mid;

      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return lowerBound;
}

const numArr = [3, 4, 6, 7, 9];

const target = 6;

const result = findLowerBound(numArr, target);

console.log(result);

// Time complexity: O(log N)
// Space complexity: O(1)
