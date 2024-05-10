// Given an integer array of size n and an integer k. Split the array into k non-empty subarrays such that the largest sum of any subarray is minimized. Your task is to return the minimized largest sum of the split.

function countPartitions(arr, sum) {
  const n = arr.length;

  let numOfPartitions = 1;

  let subarraySum = 0;

  for (let i = 0; i < n; i++) {
    if (subarraySum + arr[i] <= sum) {
      subarraySum += arr[i];
    } else {
      numOfPartitions++;

      subarraySum = arr[i];
    }
  }

  return numOfPartitions;
}

function largestSubarraySum(arr, k) {
  let maxElement = Math.max(...arr);
  let sumOfElements = arr.reduce((acc, curr) => acc + curr);

  let low = maxElement;
  let high = sumOfElements;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    let numOfPartitions = countPartitions(arr, mid);

    if (numOfPartitions > k) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return low;
}

const numArr = [10, 20, 30, 40];

const k = 2;

const result = largestSubarraySum(numArr, k);

console.log(result);

// Time complexity: O(N * log(sumOfElements - maxElement))
// Space complexity: O(1)
