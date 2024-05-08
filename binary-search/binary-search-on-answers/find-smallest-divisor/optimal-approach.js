// Given an array of integers and an integer which is a threshold value, a limit. Find the smallest positive integer divisor, such that upon dividing all the elements of the given array by it, the sum of the division's result is less than or equal to the given threshold value.

function calculateSumOfDivisions(arr, divisor) {
  let sumOfDivisions = 0;

  for (let i = 0; i < arr.length; i++) {
    sumOfDivisions += Math.ceil(arr[i] / divisor);
  }

  return sumOfDivisions;
}

function findSmallestDivisor(arr, limit) {
  const n = arr.length;

  if (n > limit) return -1;

  const maxElement = Math.max(...arr);

  let low = 1;
  let high = maxElement;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    const sumOfDivisions = calculateSumOfDivisions(arr, mid);

    if (sumOfDivisions <= limit) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return low;
}

const numArr = [1, 2, 3, 4, 5];

const limit = 8;

const result = findSmallestDivisor(numArr, limit);

console.log(result);

// Time complexity: O(log(maxElement) * N)
// Space complexity: O(1)
