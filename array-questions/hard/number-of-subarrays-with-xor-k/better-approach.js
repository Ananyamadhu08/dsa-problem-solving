// Given an array of integers, find the total number of subarrays having bitwise XOR of k.

function subarraysWithXorK(arr, k) {
  const n = arr.length;
  let count = 0;

  for (let i = 0; i < n; i++) {
    let xor = 0;

    for (let j = i; j < n; j++) {
      xor = xor ^ arr[j];

      if (xor === k) count++;
    }
  }

  return count;
}

const numArr = [4, 2, 2, 6, 4];

const k = 6;

const result = subarraysWithXorK(numArr, k);

console.log(result);

// Time complexity: O(N^2)
// Space complexity: O(1)
