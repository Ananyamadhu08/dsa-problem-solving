// Given an array of numbers, find the count of reverse pairs. Reverse Pairs are those pairs where i < j and arr[i] > 2 * arr[j].

function merge(arr, low, mid, high) {
  let tempArr = [];

  let left = low;
  let right = mid + 1;

  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      tempArr.push(arr[left]);
      left++;
    } else {
      tempArr.push(arr[right]);
      right++;
    }
  }

  while (left <= mid) {
    tempArr.push(arr[left]);
    left++;
  }

  while (right <= high) {
    tempArr.push(arr[right]);
    right++;
  }

  for (let i = low; i <= high; i++) {
    arr[i] = tempArr[i - low];
  }
}

function countPairs(arr, low, mid, high) {
  let right = mid + 1;

  let count = 0;

  for (let i = low; i <= mid; i++) {
    while (right <= high && arr[i] > 2 * arr[right]) right++;

    count += right - (mid + 1);
  }

  return count;
}

function mergeSortAndCount(arr, low, high) {
  let count = 0;

  if (low >= high) return count;

  let mid = Math.floor((low + high) / 2);

  count += mergeSortAndCount(arr, low, mid);
  count += mergeSortAndCount(arr, mid + 1, high);
  count += countPairs(arr, low, mid, high);

  merge(arr, low, mid, high);

  return count;
}

function reversePairs(arr) {
  let count = mergeSortAndCount(arr, 0, arr.length - 1);

  return count;
}

const numArr = [40, 25, 19, 12, 9, 6, 2];

const result = reversePairs(numArr);

console.log(result);

// Time complexity: O(N log N)
// Space complexity: O(N)
