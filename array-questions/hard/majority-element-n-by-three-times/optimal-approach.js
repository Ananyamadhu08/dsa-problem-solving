// Given an array of size n, find the majority elements that appear more than n / 3 times.

function findMajorityElements(arr) {
  const majorityCount = Math.floor(arr.length / 3);

  let majorityElements = [];

  let candidateOne = null;
  let candidateTwo = null;

  let countOne = 0;
  let countTwo = 0;

  for (let num of arr) {
    if (countOne === 0 && num !== candidateTwo) {
      candidateOne = num;
      countOne++;
    } else if (countTwo === 0 && num !== candidateOne) {
      candidateTwo = num;
      countTwo++;
    } else if (num === candidateOne) {
      countOne++;
    } else if (num === candidateTwo) {
      countTwo++;
    } else {
      countOne--;
      countTwo--;
    }
  }

  countOne = 0;
  countTwo = 0;

  for (let num of arr) {
    if (num === candidateOne) countOne++;
    if (num === candidateTwo) countTwo++;
  }

  if (countOne > majorityCount) majorityElements.push(candidateOne);
  if (countTwo > majorityCount) majorityElements.push(candidateTwo);

  return majorityElements;
}

const numArr = [1, 1, 1, 3, 2, 2, 2];

const result = findMajorityElements(numArr);

console.log(result);

// Time complexity: O(N)
// Space complexity: O(1)
