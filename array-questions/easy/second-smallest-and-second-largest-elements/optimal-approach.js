// Given an array, find the second smallest and second largest elements. If either of them don't exist, print -1.

function secondSmallestAndLargestElements(arr) {
  if (arr.length < 2) {
    return [-1, -1];
  }

  let [smallest, largest] = [Infinity, -Infinity];

  for (let num of arr) {
    if (num < smallest) smallest = num;
    if (num > largest) largest = num;
  }

  let [secondSmallest, secondLargest] = [Infinity, -Infinity];

  for (let num of arr) {
    if (num !== smallest && num < secondSmallest) secondSmallest = num;
    if (num !== largest && num > secondLargest) secondLargest = num;
  }

  secondSmallest === Infinity ? -1 : secondSmallest;
  secondLargest === -Infinity ? -1 : secondLargest;

  return [secondSmallest, secondLargest];
}

const numArr = [3, 5, 1, 2, 4];

const result = secondSmallestAndLargestElements(numArr);

console.log(result);

// Time complexity: O(N)
// Space complexity: O(1)
