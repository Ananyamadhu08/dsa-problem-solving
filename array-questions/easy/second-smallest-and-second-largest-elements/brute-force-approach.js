// Given an array, find the second smallest and second largest elements. If either of them don't exist, print -1.

function secondSmallestAndLargestElements(arr) {
  if (arr.length < 2) {
    return [-1, -1];
  }

  arr.sort((a, b) => a - b);

  const secondSmallest = arr[1];

  const secondLargest = arr[arr.length - 2];

  return [secondSmallest, secondLargest];
}

const numArr = [3, 5, 1, 2, 4];

const result = secondSmallestAndLargestElements(numArr);

console.log(result);

// Time complexity: O(N log N)
// Space complexity: O(N)
