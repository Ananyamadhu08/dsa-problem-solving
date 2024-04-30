// Given an integer array with unique values sorted in ascending order and a target. The array is rotated at some pivot point unknown to you. Find how many times the array has been rotated.

function countRotations(arr) {
  let minimumElement = Infinity;
  let minimumIndex = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minimumElement) {
      minimumElement = arr[i];
      minimumIndex = i;
    }
  }

  return minimumIndex;
}

const numArr = [4, 5, 1, 2, 3];

const result = countRotations(numArr);

console.log(result);

// Time complexity: O(N)
// Space complexity: O(1)
