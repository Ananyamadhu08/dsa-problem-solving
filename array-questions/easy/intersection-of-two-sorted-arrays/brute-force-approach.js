// Given two sorted arrays arrOne and arrTwo of size n and m, find the intersection of the arrays. Each element in the result must be unique.

function intersectionOfSortedArrays(arrOne, arrTwo) {
  const intersectionArr = [];

  for (let i = 0; i < arrOne.length; i++) {
    if (arrTwo.includes(arrOne[i]) && !intersectionArr.includes(arrOne[i])) {
      intersectionArr.push(arrOne[i]);
    }
  }

  return intersectionArr;
}

const numArrOne = [1, 2, 3];
const numArrTwo = [3, 4, 5];

const result = intersectionOfSortedArrays(numArrOne, numArrTwo);

console.log(result);

// Time complexity: O(N^2)
// Space complexity: O(N)
