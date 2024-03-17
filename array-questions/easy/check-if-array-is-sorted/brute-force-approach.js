// Check whether a given array is sorted in ascending order.

function isArraySorted(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) return false;
    }
  }

  return true;
}

const numArr = [3, 5, 1, 2, 4];

const result = isArraySorted(numArr);

console.log(result);

// Time complexity: O(N^2)
// Space complexity: O(1)
