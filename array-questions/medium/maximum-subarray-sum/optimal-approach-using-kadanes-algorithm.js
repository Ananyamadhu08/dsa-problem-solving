// Given an array of integers, find the subarray with the largest sum and return its sum.

function maxSubarraySum(arr) {
  let maxCurrent = arr[0];
  let maxGlobal = arr[0];

  for (let i = 1; i < arr.length; i++) {
    maxCurrent = Math.max(arr[i], maxCurrent + arr[i]);

    if (maxCurrent > maxGlobal) {
      maxGlobal = maxCurrent;
    }
  }

  return maxGlobal;
}

const numArr = [5, 4, -1, 7, 8];

const result = maxSubarraySum(numArr);

console.log(result);

// Time complexity: O(N)
// Space complexity: O(1)
