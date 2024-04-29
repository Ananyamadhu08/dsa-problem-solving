// Given a sorted array of integers and a number, you have to find the occurrences of the number in the given array.

function countOccurrences(arr, num) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      count++;
    }
  }

  return count;
}

const numArr = [3, 4, 6, 8, 8, 8, 9];

const num = 8;

const result = countOccurrences(numArr, num);

console.log(result);

// Time complexity: O(N)
// Space complexity: O(1)
