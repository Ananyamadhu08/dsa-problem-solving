// Given an array of integers and an integer target, return indices of the two numbers such that they add up to target.

function twoSum(arr, target) {
  let numArr = arr.map((value, index) => ({ value, index }));

  numArr.sort((a, b) => a.value - b.value);

  let start = 0;
  let end = numArr.length - 1;

  while (start < end) {
    let sum = numArr[start].value + numArr[end].value;

    if (sum === target) {
      return [numArr[start].index, numArr[end].index];
    } else if (sum < target) {
      start++;
    } else {
      end--;
    }
  }

  return [];
}

const numArr = [1, 2, 3, 4, 5];

const result = twoSum(numArr, 9);

console.log(result);

// Time complexity: O(N log N)
// Space complexity: O(N)
