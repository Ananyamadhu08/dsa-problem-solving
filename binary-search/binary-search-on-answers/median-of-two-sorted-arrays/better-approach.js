// Given two sorted arrays arr1 and arr2 of size m and n respectively, return the median of the two sorted arrays. The median is defined as the middle value of a sorted list of numbers. In case the length of the list is even, the median is the average of the two middle elements.

function medianOfTwoSortedArrays(arrOne, arrTwo) {
  const n = arrOne.length;
  const m = arrTwo.length;

  const totalLength = n + m;

  let indexTracker = 0;

  const medianIndexOne = Math.floor(totalLength / 2);
  const medianIndexTwo = medianIndexOne - 1;

  let medianElementOne = -1;
  let medianElementTwo = -1;

  let left = 0;
  let right = 0;

  while (left < n && right < m) {
    if (arrOne[left] <= arrTwo[right]) {
      if (indexTracker === medianIndexOne) medianElementOne = arrOne[left];
      if (indexTracker === medianIndexTwo) medianElementTwo = arrOne[left];

      indexTracker++;
      left++;
    } else {
      if (indexTracker === medianIndexOne) medianElementOne = arrTwo[right];
      if (indexTracker === medianIndexTwo) medianElementTwo = arrTwo[right];

      indexTracker++;
      right++;
    }
  }

  while (left < n) {
    if (indexTracker === medianIndexOne) medianElementOne = arrOne[left];
    if (indexTracker === medianIndexTwo) medianElementTwo = arrOne[left];

    indexTracker++;
    left++;
  }

  while (right < m) {
    if (indexTracker === medianIndexOne) medianElementOne = arrTwo[right];
    if (indexTracker === medianIndexTwo) medianElementTwo = arrTwo[right];

    indexTracker++;
    right++;
  }

  if (totalLength % 2 === 1) {
    return medianElementOne;
  }

  const median = (medianElementOne + medianElementTwo) / 2;

  return median;
}

const numArrOne = [2, 4, 6];

const numArrTwo = [1, 3, 5];

const result = medianOfTwoSortedArrays(numArrOne, numArrTwo);

console.log(result);

// Time complexity: O(N + M)
// Space complexity: O(1)
