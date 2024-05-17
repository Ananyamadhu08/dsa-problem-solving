// Given two sorted arrays of size m and n respectively, you are tasked with finding the element that would be at the kth position of the final sorted array.

function kthElementOfTwoSortedArrays(arrOne, arrTwo, k) {
  const n = arrOne.length;
  const m = arrTwo.length;

  let indexTracker = 0;

  let kthElement = 0;

  let left = 0;
  let right = 0;

  while (left < n && right < m) {
    if (indexTracker === k) break;

    if (arrOne[left] <= arrTwo[right]) {
      kthElement = arrOne[left++];
    } else {
      kthElement = arrTwo[right++];
    }

    indexTracker++;
  }

  while (indexTracker < k) {
    if (left < n) {
      kthElement = arrOne[left++];
    } else if (right < m) {
      kthElement = arrTwo[right++];
    }

    indexTracker++;
  }

  return kthElement;
}

const numArrOne = [2, 4, 6];

const numArrTwo = [1, 3, 5];

const k = 4;

const result = kthElementOfTwoSortedArrays(numArrOne, numArrTwo, k);

console.log(result);

// Time complexity: O(K)
// Space complexity: O(1)
