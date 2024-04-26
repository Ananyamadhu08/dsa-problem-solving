// Given an array that contains both negative and positive integers, find the maximum product subarray.

function maximumProductSubarray(arr) {
  const n = arr.length;

  let maximumProduct = -Infinity;

  let prefix = 1;
  let suffix = 1;

  for (let i = 0; i < n; i++) {
    if (prefix === 0) prefix = 1;
    if (suffix === 0) suffix = 1;

    prefix *= arr[i];
    suffix *= arr[n - i - 1];

    maximumProduct = Math.max(maximumProduct, prefix, suffix);
  }

  return maximumProduct;
}

const numArr = [1, 2, -3, 0, -4, -5];

const result = maximumProductSubarray(numArr);

console.log(result);

// Time complexity: O(N)
// Space complexity: O(1)
