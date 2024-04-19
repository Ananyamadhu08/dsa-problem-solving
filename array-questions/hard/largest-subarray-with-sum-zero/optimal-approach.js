// Given an array containing both positive and negative integers, find the length of the longest subarray with the sum of all elements equal to zero.

function largestSubarrayWithSumZero(arr) {
  let maxLength = 0;
  let hashMap = new Map();
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (sum === 0) {
      maxLength = i + 1;
    } else if (hashMap.has(sum)) {
      maxLength = Math.max(maxLength, i - hashMap.get(sum));
    } else {
      hashMap.set(sum, i);
    }
  }

  return maxLength;
}

const numArr = [1, -1, 3, 2, -2, -8, 1, 7];

const result = largestSubarrayWithSumZero(numArr);

console.log(result);

// Time complexity: O(N)
// Space complexity: O(N)
