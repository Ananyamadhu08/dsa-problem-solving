// Given two sorted arrays of size m and n respectively, you are tasked with finding the element that would be at the kth position of the final sorted array.

function kthElementOfTwoSortedArrays(arrOne, arrTwo, k) {
  const n = arrOne.length;
  const m = arrTwo.length;

  let left = 0;
  let right = 0;

  let mergedArr = [];

  while (left < n && right < m) {
    if (arrOne[left] <= arrTwo[right]) {
      mergedArr.push(arrOne[left++]);
    } else {
      mergedArr.push(arrTwo[right++]);
    }
  }

  while (left < n) {
    mergedArr.push(arrOne[left++]);
  }

  while (right < m) {
    mergedArr.push(arrTwo[right++]);
  }

  const kthElement = mergedArr[k - 1];

  return kthElement;
}

const numArrOne = [2, 4, 6];

const numArrTwo = [1, 3, 5];

const k = 4;

const result = kthElementOfTwoSortedArrays(numArrOne, numArrTwo, k);

console.log(result);

// Time complexity: O(N + M)
// Space complexity: O(N + M)
