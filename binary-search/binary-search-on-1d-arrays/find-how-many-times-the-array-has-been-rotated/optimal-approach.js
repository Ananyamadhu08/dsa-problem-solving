// Given an integer array with unique values sorted in ascending order and a target. The array is rotated at some pivot point unknown to you. Find how many times the array has been rotated.

function countRotations(arr) {
  const n = arr.length;

  let low = 0;
  let high = n - 1;

  let minimumElement = Infinity;
  let minimumIndex = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[low] <= arr[high]) {
      if (arr[low] < minimumElement) {
        minimumElement = arr[low];
        minimumIndex = low;
      }

      break;
    }

    if (arr[low] <= arr[mid]) {
      if (arr[low] < minimumElement) {
        minimumElement = arr[low];
        minimumIndex = low;
      }

      low = mid + 1;
    } else {
      if (arr[mid] < minimumElement) {
        minimumElement = arr[mid];
        minimumIndex = mid;
      }

      high = mid - 1;
    }
  }

  return minimumIndex;
}

const numArr = [4, 5, 1, 2, 3];

const result = countRotations(numArr);

console.log(result);

// Time complexity: O(log N)
// Space complexity: O(1)
