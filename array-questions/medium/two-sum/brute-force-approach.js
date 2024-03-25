// Given an array of integers and an integer target, return indices of the two numbers such that they add up to target.

function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }

  return [];
}

const numArr = [1, 2, 3, 4, 5];

const result = twoSum(numArr, 9);

console.log(result);

// Time complexity: O(N^2)
// Space complexity: O(1)
