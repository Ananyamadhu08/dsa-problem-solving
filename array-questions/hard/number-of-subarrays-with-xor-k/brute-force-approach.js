// Given an array of integers, find the total number of subarrays having bitwise XOR of k.

function subarraysWithXorK(arr, k) {
  const n = arr.length;
  let count = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let xor = 0;

      for (let l = i; l <= j; l++) {
        xor = xor ^ arr[l];
      }

      if (xor === k) count++;
    }
  }

  return count;
}

const numArr = [4, 2, 2, 6, 4];

const k = 6;

const result = subarraysWithXorK(numArr, k);

console.log(result);

// Time complexity: O(N^3)
// Space complexity: O(1)
