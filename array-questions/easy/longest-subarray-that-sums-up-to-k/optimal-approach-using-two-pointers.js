// Given an array and a sum k, we need to print the length of the longest subarray that sums up to k.

function longestSubarrayWithSumK(arr, k) {
  let start = 0;
  let end = 0;
  let sum = 0;
  let maxLength = 0;

  while (end < arr.length) {
    sum += arr[end];

    while (sum > k && start <= end) {
      sum -= arr[start];
      start++;
    }

    if (sum === k) {
      maxLength = Math.max(maxLength, end - start + 1);
    }

    end++;
  }

  return maxLength;
}

const numArr = [1, 2, 3, 4, 5];

const result = longestSubarrayWithSumK(numArr, 6);

console.log(result);

// Time complexity: O(N)
// Space complexity: O(1)
