// Given an array of sorted integers and a target, find the target in the given array. Assume the given array does not contain any duplicate numbers.

function binarySearch(arr, low, high, target) {
  if (low > high) return -1;

  let mid = Math.floor((low + high) / 2);

  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] < target) {
    return binarySearch(arr, mid + 1, high, target);
  } else {
    return binarySearch(arr, low, mid - 1, target);
  }
}

function findElement(arr, target) {
  return binarySearch(arr, 0, arr.length - 1, target);
}

const numArr = [3, 4, 6, 7, 9];

const target = 6;

const result = findElement(numArr, target);

console.log(result);

// Time complexity: O(log N)
// Space complexity: O(1)
