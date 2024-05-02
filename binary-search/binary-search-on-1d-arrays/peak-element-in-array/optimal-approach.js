// Given an array of integers, find the index of the peak element. Peak element is defined as the element greater than both of its neighbors. If there are multiple peak elements, return the index of any peak element.

function findPeakElement(arr) {
  const n = arr.length;

  if (n === 1) return 0;

  if (arr[0] > arr[1]) return 0;
  if (arr[n - 1] > arr[n - 2]) return n - 1;

  let low = 1;
  let high = n - 2;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid - 1] < arr[mid] && arr[mid + 1] < arr[mid]) {
      return mid;
    }

    if (arr[mid - 1] < arr[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 5, 1];

const result = findPeakElement(numArr);

console.log(result);

// Time complexity: O(log N)
// Space complexity: O(1)
