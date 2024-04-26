// Given an array that contains both negative and positive integers, find the maximum product subarray.

function maximumProductSubarray(arr) {
  if (arr.length === 0) return 0;

  let maxCurrent = arr[0];
  let minCurrent = arr[0];
  let maxGlobal = arr[0];

  for (let i = 1; i < arr.length; i++) {
    maxCurrent = Math.max(arr[i], arr[i] * maxCurrent, arr[i] * minCurrent);
    minCurrent = Math.min(arr[i], arr[i] * maxCurrent, arr[i] * minCurrent);

    maxGlobal = Math.max(maxGlobal, maxCurrent);
  }

  return maxGlobal;
}

const numArr = [1, 2, -3, 0, -4, -5];

const result = maximumProductSubarray(numArr);

console.log(result);

// Time complexity: O(N)
// Space complexity: O(1)
