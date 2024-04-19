// Given an array containing both positive and negative integers, find the length of the longest subarray with the sum of all elements equal to zero.

function largestSubarrayWithSumZero(arr) {
  let maxLength = 0;

  for (let start = 0; start < arr.length; start++) {
    let sum = 0;

    for (let end = start; end < arr.length; end++) {
      sum += arr[end];

      if (sum === 0) {
        maxLength = Math.max(maxLength, end - start + 1);
      }
    }
  }

  return maxLength;
}

const numArr = [1, -1, 3, 2, -2, -8, 1, 7];

const result = largestSubarrayWithSumZero(numArr);

console.log(result);

// Time complexity: O(N^2)
// Space complexity: O(1)
