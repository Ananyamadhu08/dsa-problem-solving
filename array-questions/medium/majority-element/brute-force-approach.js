// Given an array of size n, return the majority element. The majority element is the element that appears more than n / 2 times. You may assume that the majority element always exists in the array.

function findMajorityElement(arr) {
  let majorityCount = Math.floor(arr.length / 2);

  for (let i = 0; i < arr.length; i++) {
    let count = 0;

    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === arr[i]) {
        count++;
      }
    }

    if (count > majorityCount) {
      return arr[i];
    }
  }

  return null;
}

const numArr = [1, 1, 1, 2, 2, 2, 2];

const result = findMajorityElement(numArr);

console.log(result);

// Time complexity: O(N^2)
// Space complexity: O(1)
