// Given an array of size n, find the majority elements that appear more than n / 3 times.

function findMajorityElements(arr) {
  const minMajorityCount = Math.floor(arr.length / 3) + 1;

  let majorityElements = [];

  let hashMap = new Map();

  for (let num of arr) {
    hashMap.set(num, (hashMap.get(num) || 0) + 1);

    if (hashMap.get(num) === minMajorityCount) {
      majorityElements.push(num);
    }

    if (majorityElements.length == 2) break;
  }

  return majorityElements;
}

const numArr = [1, 1, 1, 3, 2, 2, 2];

const result = findMajorityElements(numArr);

console.log(result);

// Time complexity: O(N)
// Space complexity: O(N)
