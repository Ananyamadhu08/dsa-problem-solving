// Check whether a given array is sorted in ascending order.

function isArraySorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }

  return true;
}

const numArr = [3, 5, 1, 2, 4];

const result = isArraySorted(numArr);

console.log(result);

// Time complexity: O(N)
// Space complexity: O(1)
