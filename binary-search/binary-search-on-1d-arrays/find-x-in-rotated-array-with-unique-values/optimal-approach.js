// Given an integer array with unique values sorted in ascending order and a target. The array is rotated at some pivot point unknown to you. Find the index at which the target is present and if it's not present return -1.

function findNumInRotatedArr(arr, target) {
  const n = arr.length;

  let low = 0;
  let high = n - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    if (arr[low] <= arr[mid]) {
      if (arr[low] <= target && arr[mid] >= target) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      if (arr[mid] <= target && arr[high] >= target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }

  return -1;
}

const numArr = [4, 5, 1, 2, 3];

const target = 1;

const result = findNumInRotatedArr(numArr, target);

console.log(result);

// Time complexity: O(log N)
// Space complexity: O(1)
