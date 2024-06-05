// Given an array of integers, write a program to implement the merge sort algorithm.

function merge(arr, low, mid, high) {
  let left = low;
  let right = mid + 1;

  let temp = [];

  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left++]);
    } else {
      temp.push(arr[right++]);
    }
  }

  while (left <= mid) {
    temp.push(arr[left++]);
  }

  while (right <= high) {
    temp.push(arr[right++]);
  }

  for (let i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }
}

function mergeSort(arr, low, high) {
  if (low >= high) return;

  let mid = Math.floor((low + high) / 2);

  mergeSort(arr, low, mid);
  mergeSort(arr, mid + 1, high);

  merge(arr, low, mid, high);

  return arr;
}

const numArr = [5, 4, 3, 2, 1];

const low = 0;

const high = numArr.length - 1;

const result = mergeSort(numArr, low, high);

console.log(result);

// Time complexity: O(N log N)
// Space complexity: O(N)
