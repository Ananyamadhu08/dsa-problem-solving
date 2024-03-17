// Rotate an array of integers to the right by k elements.

function rotateArrRight(arr, k) {
  const n = arr.length;
  k = k % n;

  const tempArr = [];

  for (let i = n - k; i < n; i++) {
    tempArr.push(arr[i]);
  }

  for (let i = n - k - 1; i >= 0; i--) {
    arr[i + k] = arr[i];
  }

  for (let i = 0; i < k; i++) {
    arr[i] = tempArr[i];
  }

  return arr;
}

const numArr = [1, 2, 3, 4, 5];

const result = rotateArrRight(numArr, 1);

console.log(result);

// Time complexity: O(N)
// Space complexity: O(k)
