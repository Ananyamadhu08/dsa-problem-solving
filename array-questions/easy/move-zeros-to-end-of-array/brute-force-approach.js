// rearrange an array of integers by moving all zero elements to the end while maintaining the order of non-zero elements.

function moveZerosToEnd(arr) {
  const tempArr = [];
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      tempArr[count++] = arr[i];
    }
  }

  while (count < arr.length) {
    tempArr[count++] = 0;
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] = tempArr[i];
  }

  return arr;
}

const numArr = [1, 2, 0, 3, 4, 0, 5, 0];

const result = moveZerosToEnd(numArr);

console.log(result);

// Time complexity: O(N)
// Space complexity: O(N)
