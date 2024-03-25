// Given an array of integers and an integer target, return indices of the two numbers such that they add up to target.

function twoSum(arr, target) {
  let hashMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    let complement = target - arr[i];

    if (hashMap.has(complement)) {
      return [hashMap.get(complement), i];
    }

    hashMap.set(arr[i], i);
  }

  return [];
}

const numArr = [1, 2, 3, 4, 5];

const result = twoSum(numArr, 9);

console.log(result);

// Time complexity: O(N)
// Space complexity: O(N)
