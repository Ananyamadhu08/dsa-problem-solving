// Given an array of size n, find the majority elements that appear more than n / 3 times.

function findMajorityElements(arr) {
  const majorityCount = Math.floor(arr.length / 3);

  let majorityElements = [];

  for (let i = 0; i < arr.length; i++) {
    if (majorityElements.length === 0 || majorityElements[0] !== arr[i]) {
      let count = 0;

      for (let j = 0; j < arr.length; j++) {
        if (arr[j] === arr[i]) {
          count++;
        }
      }

      if (count > majorityCount) {
        majorityElements.push(arr[i]);
      }
    }

    if (majorityElements.length === 2) break;
  }

  return majorityElements;
}

const numArr = [1, 1, 1, 3, 2, 2, 2];

const result = findMajorityElements(numArr);

console.log(result);

// Time complexity: O(N^2)
// Space complexity: O(1)
