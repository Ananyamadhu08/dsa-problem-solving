// Given an array and a sum k, we need to print the length of the longest subarray that sums up to k.

function longestSubarrayWithSumK(arr, k) {
  let maxLength = 0;

  for (let start = 0; start < arr.length; start++) {
    let sum = 0;

    for (let end = start; end < arr.length; end++) {
      sum += arr[end];

      if (sum === k) {
        maxLength = Math.max(maxLength, end - start + 1);
      }
    }
  }

  return maxLength;
}

const numArr = [1, 2, 3, 4, 5];

const result = longestSubarrayWithSumK(numArr, 6);

console.log(result);

// Time complexity: O(N^2)
// Space complexity: O(1)
