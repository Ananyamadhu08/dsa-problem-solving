// Given an array of integers, write a program to implement the insertion sort algorithm.

function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let j = i;

    while (j > 0 && arr[j - 1] > arr[j]) {
      let temp = arr[j - 1];

      arr[j - 1] = arr[j];

      arr[j] = temp;

      j--;
    }
  }

  return arr;
}

const numArr = [5, 4, 3, 2, 1];

const result = insertionSort(numArr);

console.log(result);

// Time complexity: O(N^2)
// Space complexity: O(1)
