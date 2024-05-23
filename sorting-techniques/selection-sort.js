// Given an array of integers, write a program to implement the selection sort algorithm.

function selectionSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    let temp = arr[minIndex];

    arr[minIndex] = arr[i];

    arr[i] = temp;
  }

  return arr;
}

const numArr = [5, 4, 3, 2, 1];

const result = selectionSort(numArr);

console.log(result);

// Time complexity: O(N^2)
// Space complexity: O(1)
