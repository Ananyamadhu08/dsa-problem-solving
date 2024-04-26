// Given an array that contains both negative and positive integers, find the maximum product subarray.

function maximumProductSubarray(arr) {
  const n = arr.length;

  let maximumProduct = -Infinity;

  for (let i = 0; i < n - 1; i++) {
    let currProduct = arr[i];

    for (let j = i + 1; j < n; j++) {
      currProduct *= arr[j];

      maximumProduct = Math.max(maximumProduct, currProduct);
    }
  }

  return maximumProduct;
}

const numArr = [1, 2, -3, 0, -4, -5];

const result = maximumProductSubarray(numArr);

console.log(result);

// Time complexity: O(N^2)
// Space complexity: O(1)
