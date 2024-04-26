// Given an array that contains both negative and positive integers, find the maximum product subarray.

function maximumProductSubarray(arr) {
  const n = arr.length;

  let maximumProduct = -Infinity;

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      let currProduct = 1;

      for (let k = i; k <= j; k++) {
        currProduct *= arr[k];
      }

      maximumProduct = Math.max(maximumProduct, currProduct);
    }
  }

  return maximumProduct;
}

const numArr = [1, 2, -3, 0, -4, -5];

const result = maximumProductSubarray(numArr);

console.log(result);

// Time complexity: O(N^3)
// Space complexity: O(1)
