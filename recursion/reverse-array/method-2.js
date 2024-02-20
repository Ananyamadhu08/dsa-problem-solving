// Create a function to reverse a given array.

function reverseArray(arr, start = 0, end = arr.length - 1) {
  if (start >= end) return;

  [arr[start], arr[end]] = [arr[end], arr[start]];

  reverseArray(arr, start + 1, end - 1);
}

let numArr = [1, 2, 3, 4, 5];

reverseArray(numArr);

console.log(numArr);
