// Given two sorted arrays arrOne and arrTwo of size n and m, find the union of the arrays. The union of two arrays can be defined as the common and distinct elements of the arrays.

function unionOfSortedArrays(arrOne, arrTwo) {
  let i = 0;
  let j = 0;

  const unionArray = [];

  while (i < arrOne.length && j < arrTwo.length) {
    if (arrOne[i] === arrTwo[j]) {
      if (unionArray[unionArray.length - 1] !== arrOne[i]) {
        unionArray.push(arrOne[i]);
      }

      i++;
      j++;
    } else if (arrOne[i] < arrTwo[j]) {
      if (unionArray[unionArray.length - 1] !== arrOne[i]) {
        unionArray.push(arrOne[i]);
      }

      i++;
    } else {
      if (unionArray[unionArray.length - 1] !== arrTwo[j]) {
        unionArray.push(arrTwo[j]);
      }

      j++;
    }
  }

  while (i < arrOne.length) {
    if (unionArray[unionArray.length - 1] !== arrOne[i]) {
      unionArray.push(arrOne[i]);
    }

    i++;
  }

  while (j < arrTwo.length) {
    if (unionArray[unionArray.length - 1] !== arrTwo[j]) {
      unionArray.push(arrTwo[j]);
    }

    j++;
  }

  return unionArray;
}

const numArrOne = [1, 2, 3];
const numArrTwo = [3, 4, 5];

const result = unionOfSortedArrays(numArrOne, numArrTwo);

console.log(result);

// Time complexity: O(N + M)
// Space complexity: O(N + M)
