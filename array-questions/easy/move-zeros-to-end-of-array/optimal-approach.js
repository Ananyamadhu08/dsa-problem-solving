// rearrange an array of integers by moving all zero elements to the end while maintaining the order of non-zero elements.

function moveZerosToEnd(arr) {
  let j = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      j++;
    }
  }

  return arr;
}

const numArr = [1, 2, 0, 3, 4, 0, 5, 0];

const result = moveZerosToEnd(numArr);

console.log(result);

// Time complexity: O(N)
// Space complexity: O(1)
