// Given an array of size n, return the majority element. The majority element is the element that appears more than n / 2 times. You may assume that the majority element always exists in the array.

function findMajorityElement(arr) {
  let majorityCount = Math.floor(arr.length / 2);
  let hashMap = new Map();

  for (let num of arr) {
    hashMap.set(num, (hashMap.get(num) || 0) + 1);

    if (hashMap.get(num) > majorityCount) {
      return num;
    }
  }

  return null;
}

const numArr = [1, 1, 1, 2, 2, 2, 2];

const result = findMajorityElement(numArr);

console.log(result);

// Time complexity: O(N)
// Space complexity: O(N)
