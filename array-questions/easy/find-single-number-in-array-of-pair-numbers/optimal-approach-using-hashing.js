// Given a non-empty array of integers arr, every element appears twice except for one. Find that element that appears once.

function findSingleNumber(arr) {
  let numMap = new Map();

  arr.forEach((num) => {
    if (numMap.has(num)) {
      numMap.set(num, numMap.get(num) + 1);
    } else {
      numMap.set(num, 1);
    }
  });

  for (let [num, count] of numMap) {
    if (count === 1) {
      return num;
    }
  }

  return null;
}

const numArr = [4, 1, 2, 1, 2];

const result = findSingleNumber(numArr);

console.log(result);

// Time complexity: O(N)
// Space complexity: O(N)
