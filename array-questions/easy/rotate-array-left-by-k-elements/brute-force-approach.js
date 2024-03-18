// Rotate an array of integers to the left by k elements.

function rotateArrLeft(arr, k) {
  const n = arr.length;
  k = k % n;

  const tempArr = [];

  for (let i = 0; i < k; i++) {
    tempArr.push(arr[i]);
  }

  for (let i = 0; i < n - k; i++) {
    arr[i] = arr[i + k];
  }

  for (let i = n - k; i < n; i++) {
    arr[i] = tempArr[i - n + k];
  }

  return arr;
}

const numArr = [1, 2, 3, 4, 5];

const result = rotateArrLeft(numArr, 1);

console.log(result);

// Time complexity: O(N)
// Space complexity: O(k)
