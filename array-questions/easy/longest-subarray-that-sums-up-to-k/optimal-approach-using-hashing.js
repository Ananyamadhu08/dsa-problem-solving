// Given an array and a sum k, we need to print the length of the longest subarray that sums up to k.

function longestSubarrayWithSumK(arr, k) {
  let maxLength = 0;
  let prefixSum = 0;
  let hashMap = new Map();

  hashMap.set(0, -1);

  for (let i = 0; i < arr.length; i++) {
    prefixSum += arr[i];

    if (!hashMap.has(prefixSum)) {
      hashMap.set(prefixSum, i);
    }

    if (hashMap.has(prefixSum - k)) {
      maxLength = Math.max(maxLength, i - hashMap.get(prefixSum - k));
    }
  }

  return maxLength;
}

const numArr = [1, 2, -3, 4, 5];

const result = longestSubarrayWithSumK(numArr, 3);

console.log(result);

// Time complexity: O(N)
// Space complexity: O(N)
