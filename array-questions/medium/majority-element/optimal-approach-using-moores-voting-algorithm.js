// Given an array of size n, return the majority element. The majority element is the element that appears more than n / 2 times. You may assume that the majority element always exists in the array.

function findMajorityElement(arr) {
  let majorityCount = Math.floor(arr.length / 2);
  let candidate = null;
  let count = 0;

  for (let num of arr) {
    if (count === 0) {
      candidate = num;
    }

    count += num === candidate ? 1 : -1;
  }

  count = 0;

  for (let num of arr) {
    if (num === candidate) {
      count++;
    }
  }

  if (count > majorityCount) {
    return candidate;
  }

  return null;
}

const numArr = [1, 1, 1, 2, 2, 2, 2];

const result = findMajorityElement(numArr);

console.log(result);

// Time complexity: O(N)
// Space complexity: O(1)
