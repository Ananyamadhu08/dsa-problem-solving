// Given an array of integers, count the inversions of the array.

function countInversions(arr) {
  const n = arr.length;

  let inversionsCount = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] > arr[j]) inversionsCount++;
    }
  }

  return inversionsCount;
}

const numArr = [5, 3, 2, 4, 1];

const result = countInversions(numArr);

console.log(result);

// Time complexity: O(N^2)
// Space complexity: O(1)
