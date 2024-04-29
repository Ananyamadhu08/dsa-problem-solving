// Given an integer array with unique values sorted in ascending order and a target. The array is rotated at some pivot point unknown to you. Find the index at which the target is present and if it's not present return -1.

function findNumInRotatedArr(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
}

const numArr = [4, 5, 1, 2, 3];

const target = 1;

const result = findNumInRotatedArr(numArr, target);

console.log(result);

// Time complexity: O(N)
// Space complexity: O(1)
