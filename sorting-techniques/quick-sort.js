// Given an array of integers, write a program to implement the quick sort algorithm.

function partition(arr, low, high) {
  const pivot = arr[low];

  let i = low;
  let j = high;

  while (i < j) {
    while (arr[i] <= pivot && i <= high - 1) {
      i++;
    }

    while (arr[j] > pivot && j >= low + 1) {
      j--;
    }

    if (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  [arr[low], arr[j]] = [arr[j], arr[low]];

  return j;
}

function quickSort(arr, low, high) {
  if (low < high) {
    let partitionIndex = partition(arr, low, high);

    quickSort(arr, low, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, high);
  }
}

function quickSortArray(arr) {
  quickSort(arr, 0, arr.length - 1);

  return arr;
}

const numArr = [5, 4, 3, 2, 1];

const result = quickSortArray(numArr);

console.log(result);

// Time complexity: O(N log N)
// Space complexity: O(1)
