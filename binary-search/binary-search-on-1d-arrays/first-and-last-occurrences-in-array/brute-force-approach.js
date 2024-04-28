// Given a sorted array of integers and a target, find the index of the first and last occurrence of the target.

function findFirstAndLastOccurrence(arr, target) {
  const n = arr.length;

  let firstOccurrence = -1;
  let lastOccurrence = -1;

  for (let i = 0; i < n; i++) {
    if (arr[i] === target) {
      if (firstOccurrence === -1) {
        firstOccurrence = i;
      }

      lastOccurrence = i;
    }
  }

  return [firstOccurrence, lastOccurrence];
}

const numArr = [3, 4, 6, 8, 8, 8, 9];

const target = 8;

const result = findFirstAndLastOccurrence(numArr, target);

console.log(result);

// Time complexity: O(N)
// Space complexity: O(1)
