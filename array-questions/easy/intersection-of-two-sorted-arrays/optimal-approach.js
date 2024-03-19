// Given two sorted arrays arrOne and arrTwo of size n and m, find the intersection of the arrays. Each element in the result must be unique.

function intersectionOfSortedArrays(arrOne, arrTwo) {
  let arrOneSet = new Set(arrOne);
  let intersectionSet = new Set();

  for (let num of arrTwo) {
    if (arrOneSet.has(num)) {
      intersectionSet.add(num);
    }
  }

  return Array.from(intersectionSet);
}

const numArrOne = [1, 2, 3];
const numArrTwo = [3, 4, 5];

const result = intersectionOfSortedArrays(numArrOne, numArrTwo);

console.log(result);

// Time complexity: O(N + M)
// Space complexity: O(N + M)
