// Given an array with 0's, 1's and 2's sort the array such that the integers are in ascending order.

function sortArray(arr) {
  let countZero = 0;
  let countOne = 0;
  let countTwo = 0;

  arr.forEach((num) => {
    if (num === 0) countZero++;
    else if (num === 1) countOne++;
    else countTwo++;
  });

  for (let i = 0; i < arr.length; i++) {
    if (i < countZero) {
      arr[i] = 0;
    } else if (i < countZero + countOne) {
      arr[i] = 1;
    } else {
      arr[i] = 2;
    }
  }

  return arr;
}

const numArr = [2, 0, 1, 2, 0, 1];

const result = sortArray(numArr);

console.log(result);

// Time complexity: O(N)
// Space complexity: O(1)
