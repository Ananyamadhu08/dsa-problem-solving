// Given an array, we have to find the largest element in the array.

function findLargestElement(arr) {
  let largestElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largestElement) {
      largestElement = arr[i];
    }
  }

  return largestElement;
}

const numArr = [3, 5, 1, 2, 4];

const result = findLargestElement(numArr);

console.log(result);

// Time complexity: O(N)
// Space complexity: O(1)
