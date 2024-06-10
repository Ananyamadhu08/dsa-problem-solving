// Given an array of integers, write a program to implement the recursive bubble sort algorithm.

function recursiveBubbleSort(arr, n) {
  if (n === 1) {
    return arr;
  }

  let isSwapped = false;

  for (let i = 0; i < n - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      let temp = arr[i];

      arr[i] = arr[i + 1];

      arr[i + 1] = temp;

      isSwapped = true;
    }
  }

  if (!isSwapped) {
    return arr;
  }

  return recursiveBubbleSort(arr, n - 1);
}

const numArr = [5, 4, 3, 2, 1];

const n = numArr.length;

const result = recursiveBubbleSort(numArr, n);

console.log(result);

// Time complexity: O(N^2)
// Space complexity: O(N)
