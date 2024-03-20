// Given a non-empty array of integers arr, every element appears twice except for one. Find that element that appears once.

function findSingleNumber(arr) {
  let result = 0;

  for (let num of arr) {
    result ^= num;
  }

  return result;
}

const numArr = [4, 1, 2, 1, 2];

const result = findSingleNumber(numArr);

console.log(result);

// Time complexity: O(N)
// Space complexity: O(1)
