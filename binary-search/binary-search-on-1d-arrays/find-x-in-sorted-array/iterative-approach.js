// Given an array of sorted integers and a target, find the target in the given array. Assume the given array does not contain any duplicate numbers.

function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

const numArr = [3, 4, 6, 7, 9];

const target = 6;

const result = binarySearch(numArr, target);

console.log(result);

// Time complexity: O(log N)
// Space complexity: O(1)
