// Given an array of integers and a value k, return the total number of subarrays whose sum equals to k.

function subarraySum(arr, k) {
  let count = 0;
  let prefixSum = 0;

  let hashMap = new Map();
  hashMap.set(0, 1);

  for (let i = 0; i < arr.length; i++) {
    prefixSum += arr[i];

    if (hashMap.has(prefixSum - k)) {
      count += hashMap.get(prefixSum - k);
    }

    hashMap.set(prefixSum, (hashMap.get(prefixSum) || 0) + 1);
  }

  return count;
}

const numArr = [1, 2, 3, 4, 5];

const result = subarraySum(numArr, 3);

console.log(result);

// Time complexity: O(N)
// Space complexity: O(N)
