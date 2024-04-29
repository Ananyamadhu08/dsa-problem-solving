// Given an integer array, sorted in ascending order with distinct values. The array is rotated at some pivot point unknown to you. Find the minimum element in the array.

function findMinimumElement(arr) {
  const n = arr.length;

  let low = 0;
  let high = n - 1;

  let minimumElement = Infinity;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[low] <= arr[mid]) {
      minimumElement = Math.min(minimumElement, arr[low]);

      low = mid + 1;
    } else {
      minimumElement = Math.min(minimumElement, arr[mid]);

      high = mid - 1;
    }
  }

  return minimumElement;
}

const numArr = [4, 5, 1, 2, 3];

const result = findMinimumElement(numArr);

console.log(result);

// Time complexity: O(log N)
// Space complexity: O(1)
