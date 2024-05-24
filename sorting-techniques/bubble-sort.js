// Given an array of integers, write a program to implement the bubble sort algorithm.

function bubbleSort(arr) {
  for (let i = arr.length - 1; i >= 1; i--) {
    let isSwapped = false;

    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];

        arr[j + 1] = arr[j];

        arr[j] = temp;

        isSwapped = true;
      }
    }

    if (!isSwapped) {
      break;
    }
  }

  return arr;
}

const numArr = [5, 4, 3, 2, 1];

const result = bubbleSort(numArr);

console.log(result);

// Time complexity: O(N^2)
// Space complexity: O(1)
