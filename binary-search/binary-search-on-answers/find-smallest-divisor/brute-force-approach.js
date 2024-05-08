// Given an array of integers and an integer which is a threshold value, a limit. Find the smallest positive integer divisor, such that upon dividing all the elements of the given array by it, the sum of the division's result is less than or equal to the given threshold value.

function findSmallestDivisor(arr, limit) {
  let maxElement = Math.max(...arr);

  for (let i = 1; i <= maxElement; i++) {
    let sumOfDivisions = 0;

    for (let j = 0; j < arr.length; j++) {
      sumOfDivisions += Math.ceil(arr[j] / i);
    }

    if (sumOfDivisions <= limit) return i;
  }

  return -1;
}

const numArr = [1, 2, 3, 4, 5];

const limit = 8;

const result = findSmallestDivisor(numArr, limit);

console.log(result);

// Time complexity: O(maxElement * N)
// Space complexity: O(1)
