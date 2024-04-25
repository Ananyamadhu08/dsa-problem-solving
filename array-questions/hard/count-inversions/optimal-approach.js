// Given an array of integers, count the inversions of the array.

function mergeAndCount(arr, low, mid, high) {
  let temp = [];

  let left = low;
  let right = mid + 1;

  let count = 0;

  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      count += mid - left + 1;
      right++;
    }
  }

  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }

  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }

  for (let i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }

  return count;
}

function mergeSortAndCount(arr, low, high) {
  let count = 0;

  if (low >= high) return count;

  const mid = Math.floor((low + high) / 2);

  count += mergeSortAndCount(arr, low, mid);
  count += mergeSortAndCount(arr, mid + 1, high);
  count += mergeAndCount(arr, low, mid, high);

  return count;
}

function countInversions(arr) {
  let count = mergeSortAndCount(arr, 0, arr.length - 1);

  return count;
}

const numArr = [5, 3, 2, 4, 1];

const result = countInversions(numArr);

console.log(result);

// Time complexity: O(N log N)
// Space complexity: O(N)
