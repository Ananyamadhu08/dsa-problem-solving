// Given a sorted array of integers and a target, find the index of the first and last occurrence of the target.

function findFirstOccurrence(arr, target) {
  const n = arr.length;

  let low = 0;
  let high = n - 1;

  let firstOccurrence = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] >= target) {
      firstOccurrence = mid;

      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return firstOccurrence;
}

function findLastOccurrence(arr, target) {
  const n = arr.length;

  let low = 0;
  let high = n - 1;

  let lastOccurrence = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] > target) {
      lastOccurrence = mid;

      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return lastOccurrence - 1;
}

function findFirstAndLastOccurrence(arr, target) {
  const firstOccurrence = findFirstOccurrence(arr, target);

  if (firstOccurrence === -1 || arr[firstOccurrence] !== target) {
    return [-1, -1];
  }

  const lastOccurrence = findLastOccurrence(arr, target);

  return [firstOccurrence, lastOccurrence];
}

const numArr = [3, 4, 6, 8, 8, 8, 9];

const target = 8;

const result = findFirstAndLastOccurrence(numArr, target);

console.log(result);

// Time complexity: O(log N)
// Space complexity: O(1)
