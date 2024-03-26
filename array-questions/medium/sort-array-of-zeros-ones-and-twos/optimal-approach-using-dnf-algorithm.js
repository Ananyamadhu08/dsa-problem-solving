// Given an array with 0's, 1's and 2's sort the array such that the integers are in ascending order.

function sortArray(arr) {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;

  while (mid <= high) {
    if (arr[mid] === 0) {
      [arr[low], arr[mid]] = [arr[mid], arr[low]];

      low++;
      mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else {
      [arr[mid], arr[high]] = [arr[high], arr[mid]];

      high--;
    }
  }

  return arr;
}

const numArr = [2, 0, 1, 2, 0, 1];

const result = sortArray(numArr);

console.log(result);

// Time complexity: O(N)
// Space complexity: O(1)
