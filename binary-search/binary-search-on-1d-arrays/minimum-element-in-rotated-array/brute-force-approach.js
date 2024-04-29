// Given an integer array, sorted in ascending order with distinct values. The array is rotated at some pivot point unknown to you. Find the minimum element in the array.

function findMinimumElement(arr) {
  let minimumElement = Infinity;

  for (let i = 0; i < arr.length; i++) {
    minimumElement = Math.min(minimumElement, arr[i]);
  }

  return minimumElement;
}

const numArr = [4, 5, 1, 2, 3];

const result = findMinimumElement(numArr);

console.log(result);

// Time complexity: O(N)
// Space complexity: O(1)
