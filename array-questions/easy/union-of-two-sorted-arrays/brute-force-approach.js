// Given two sorted arrays arrOne and arrTwo of size n and m, find the union of the arrays. The union of two arrays can be defined as the common and distinct elements of the arrays.

function unionOfSortedArrays(arrOne, arrTwo) {
  let unionMap = new Map();

  arrOne.forEach((element) => unionMap.set(element, true));

  arrTwo.forEach((element) => unionMap.set(element, true));

  return Array.from(unionMap.keys());
}

const numArrOne = [1, 2, 3];
const numArrTwo = [3, 4, 5];

const result = unionOfSortedArrays(numArrOne, numArrTwo);

console.log(result);

// Time complexity: O(N + M)
// Space complexity: O(N + M)
