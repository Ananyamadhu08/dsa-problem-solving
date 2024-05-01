// Given an array of integers, every number in the array except one appears twice. Find the single number in the array.

function findSingleElement(arr) {
  const n = arr.length;

  if (n === 1) return arr[0];

  if (arr[0] !== arr[1]) return arr[0];

  if (arr[n - 1] !== arr[n - 2]) return arr[n - 1];

  let low = 1;
  let high = n - 2;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] !== arr[mid - 1] && arr[mid] !== arr[mid + 1]) {
      return arr[mid];
    }

    if (
      (mid % 2 === 0 && arr[mid] === arr[mid + 1]) ||
      (mid % 2 === 1 && arr[mid] === arr[mid - 1])
    ) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

const numArr = [1, 1, 2, 2, 3, 4, 4, 5, 5];

const result = findSingleElement(numArr);

console.log(result);

// Time complexity: O(log N)
// Space complexity: O(1)
