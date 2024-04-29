// Given an integer array which may contain duplicate values sorted in ascending order and a target. The array is rotated at some pivot point unknown to you. Return true if the target is present and false if it's not.

function findNumInRotatedArr(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return true;
    }
  }

  return false;
}

const numArr = [4, 5, 1, 1, 2, 3];

const target = 1;

const result = findNumInRotatedArr(numArr, target);

console.log(result);

// Time complexity: O(N)
// Space complexity: O(1)
