// Perform a left rotation on an array of integers by one place. This means shifting each element of the array to the left by one position, and moving the first element to the end of the array.

function rotateArrLeft(arr) {
  if (arr.length <= 1) return arr;

  const firstElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }

  arr[arr.length - 1] = firstElement;

  return arr;
}

const numArr = [1, 2, 3, 4, 5];

const result = rotateArrLeft(numArr);

console.log(result);

// Time complexity: O(N)
// Space complexity: O(1)
