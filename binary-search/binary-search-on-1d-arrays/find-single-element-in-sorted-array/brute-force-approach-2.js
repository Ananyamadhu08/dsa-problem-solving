// Given an array of integers, every number in the array except one appears twice. Find the single number in the array.

function findSingleElement(arr) {
  const n = arr.length;

  if (n === 1) return arr[0];

  let xor = 0;

  for (let i = 0; i < n; i++) {
    xor = xor ^ arr[i];
  }

  return xor;
}

const numArr = [1, 1, 2, 2, 3, 4, 4, 5, 5];

const result = findSingleElement(numArr);

console.log(result);

// Time complexity: O(N)
// Space complexity: O(1)
