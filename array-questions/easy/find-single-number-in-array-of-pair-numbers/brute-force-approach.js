// Given a non-empty array of integers arr, every element appears twice except for one. Find that element that appears once.

function findSingleNumber(arr) {
  for (let i = 0; i < arr.length; i++) {
    let count = 0;

    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }

    if (count === 1) return arr[i];
  }

  return null;
}

const numArr = [4, 1, 2, 1, 2];

const result = findSingleNumber(numArr);

console.log(result);

// Time complexity: O(N^2)
// Space complexity: O(1)
