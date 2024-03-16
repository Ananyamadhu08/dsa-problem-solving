// Given an array, we have to find the largest element in the array.

function findLargestElement(arr) {
  arr.sort((a, b) => a - b);

  return arr[arr.length - 1];
}

const numArr = [3, 5, 1, 2, 4];

const result = findLargestElement(numArr);

console.log(result);

// Time complexity: O(N log N)
// Space complexity: O(N)
