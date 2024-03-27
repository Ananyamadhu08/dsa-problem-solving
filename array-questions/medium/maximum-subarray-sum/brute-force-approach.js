// Given an array of integers, find the subarray with the largest sum and return its sum.

function maxSubarraySum(arr) {
  let maxSum = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      let currentSum = 0;

      for (let k = i; k <= j; k++) {
        currentSum += arr[k];
      }

      maxSum = Math.max(maxSum, currentSum);
    }
  }

  return maxSum;
}

const numArr = [5, 4, -1, 7, 8];

const result = maxSubarraySum(numArr);

console.log(result);

// Time complexity: O(N^3)
// Space complexity: O(1)
