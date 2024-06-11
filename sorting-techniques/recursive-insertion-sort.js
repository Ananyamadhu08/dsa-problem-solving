// Given an array of integers, write a program to implement the recursive insertion sort algorithm.

function recursiveInsertionSort(arr, i = 1) {
  const n = arr.length;

  if (i === n) return arr;

  let j = i;

  while (j > 0 && arr[j - 1] > arr[j]) {
    let temp = arr[j - 1];

    arr[j - 1] = arr[j];

    arr[j] = temp;

    j--;
  }

  return recursiveInsertionSort(arr, i + 1);
}

const numArr = [5, 4, 3, 2, 1];

const result = recursiveInsertionSort(numArr);

console.log(result);

// Time complexity: O(N^2)
// Space complexity: O(N)
