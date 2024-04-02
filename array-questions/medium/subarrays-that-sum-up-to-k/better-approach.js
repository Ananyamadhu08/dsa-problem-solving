// Given an array of integers and a value k, return the total number of subarrays whose sum equals to k.

function subarraySum(arr, k) {
  const n = arr.length;
  let count = 0;

  for (let i = 0; i < n; i++) {
    let sum = 0;

    for (let j = i; j < n; j++) {
      sum += arr[j];

      if (sum === k) {
        count++;
      }
    }
  }

  return count;
}

const numArr = [1, 2, 3, 4, 5];

const result = subarraySum(numArr, 3);

console.log(result);

// Time complexity: O(N^2)
// Space complexity: O(1)
