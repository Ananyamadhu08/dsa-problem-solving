// Given an array of integers, find the total number of subarrays having bitwise XOR of k.

function subarraysWithXorK(arr, k) {
  const n = arr.length;
  let count = 0;
  let xor = 0;

  let hashMap = new Map();

  hashMap.set(xor, 1);

  for (let i = 0; i < n; i++) {
    xor = xor ^ arr[i];

    const x = xor ^ k;

    count += hashMap.get(x) || 0;

    hashMap.set(xor, (hashMap.get(xor) || 0) + 1);
  }

  return count;
}

const numArr = [4, 2, 2, 6, 4];

const k = 6;

const result = subarraysWithXorK(numArr, k);

console.log(result);

// Time complexity: O(N)
// Space complexity: O(N)
