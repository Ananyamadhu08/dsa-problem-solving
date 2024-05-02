// Given an array of integers, find the index of the peak element. Peak element is defined as the element greater than both of its neighbors. If there are multiple peak elements, return the index of any peak element.

function findPeakElement(arr) {
  const n = arr.length;

  if (n === 1) return 0;

  for (let i = 0; i < n; i++) {
    if (
      (i === 0 || arr[i - 1] < arr[i]) &&
      (i === n - 1 || arr[i + 1] < arr[i])
    ) {
      return i;
    }
  }

  return -1;
}

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 5, 1];

const result = findPeakElement(numArr);

console.log(result);

// Time complexity: O(N)
// Space complexity: O(1)
