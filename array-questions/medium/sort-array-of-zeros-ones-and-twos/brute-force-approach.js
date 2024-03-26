// Given an array with 0's, 1's and 2's sort the array such that the integers are in ascending order.

function sortArray(arr) {
  let sortedArr = arr.sort();

  return sortedArr;
}

const numArr = [2, 0, 1, 2, 0, 1];

const result = sortArray(numArr);

console.log(result);

// Time complexity: O(N log N)
// Space complexity: O(N)
