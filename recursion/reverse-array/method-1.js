// Create a function to reverse a given array.

function reverseArray(arr, i = 0) {
  if (i >= Math.floor(arr.length / 2)) return;

  let end = arr.length - i - 1;

  [arr[i], arr[end]] = [arr[end], arr[i]];

  reverseArray(arr, i + 1);
}

let numArr = [1, 2, 3, 4, 5];

reverseArray(numArr);

console.log(numArr);
