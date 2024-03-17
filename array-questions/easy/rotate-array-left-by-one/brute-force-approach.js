// Perform a left rotation on an array of integers by one place. This means shifting each element of the array to the left by one position, and moving the first element to the end of the array.

function rotateLeftArr(arr) {
  if (arr.length <= 1) return arr;

  const rotatedArr = [];

  for (let i = 1; i < arr.length; i++) {
    rotatedArr.push(arr[i]);
  }

  rotatedArr.push(arr[0]);

  return rotatedArr;
}

const numArr = [1, 2, 3, 4, 5];

const result = rotateLeftArr(numArr);

console.log(result);

// Time complexity: O(N)
// Space complexity: O(N)
