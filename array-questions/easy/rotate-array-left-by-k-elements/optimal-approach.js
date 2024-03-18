// Rotate an array of integers to the left by k elements.

function reverseArr(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}

function rotateArrLeft(arr, k) {
  const n = arr.length;
  k = k % n;

  reverseArr(arr, 0, k - 1);

  reverseArr(arr, k, n - 1);

  reverseArr(arr, 0, n - 1);

  return arr;
}

const numArr = [1, 2, 3, 4, 5];

const result = rotateArrLeft(numArr, 1);

console.log(result);

// Time complexity: O(N)
// Space complexity: O(1)
