// Given a strictly increasing array and a positive integer k. Find the kth positive integer missing from the array.

function findKthMissingNumber(arr, k) {
  const n = arr.length;

  let low = 0;
  let high = n - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    let missingNumbers = arr[mid] - (mid + 1);

    if (missingNumbers < k) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return k + low; // k + high + 1
}

const numArr = [2, 3, 4, 7, 11];

const k = 5;

const result = findKthMissingNumber(numArr, k);

console.log(result);

// Time complexity: O(log N)
// Space complexity: O(1)
