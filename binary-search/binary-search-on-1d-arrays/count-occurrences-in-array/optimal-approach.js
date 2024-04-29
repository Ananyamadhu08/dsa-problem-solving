// Given a sorted array of integers and a number, you have to find the occurrences of the number in the given array.

function findFirstOccurrence(arr, num) {
  const n = arr.length;

  let low = 0;
  let high = n - 1;

  let firstOccurrence = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === num) {
      firstOccurrence = mid;

      high = mid - 1;
    } else if (arr[mid] < num) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return firstOccurrence;
}

function findLastOccurrence(arr, num) {
  const n = arr.length;

  let low = 0;
  let high = n - 1;

  let lastOccurrence = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === num) {
      lastOccurrence = mid;

      low = mid + 1;
    } else if (arr[mid] < num) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return lastOccurrence;
}

function countOccurrences(arr, num) {
  const firstOccurrence = findFirstOccurrence(arr, num);

  if (firstOccurrence === -1) return 0;

  const lastOccurrence = findLastOccurrence(arr, num);

  const count = lastOccurrence - firstOccurrence + 1;

  return count;
}

const numArr = [3, 4, 6, 8, 8, 8, 9];

const num = 8;

const result = countOccurrences(numArr, num);

console.log(result);

// Time complexity: O(log N)
// Space complexity: O(1)
