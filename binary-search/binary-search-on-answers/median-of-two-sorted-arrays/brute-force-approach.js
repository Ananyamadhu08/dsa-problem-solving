// Given two sorted arrays arr1 and arr2 of size m and n respectively, return the median of the two sorted arrays. The median is defined as the middle value of a sorted list of numbers. In case the length of the list is even, the median is the average of the two middle elements.

function medianOfTwoSortedArrays(arrOne, arrTwo) {
  const n = arrOne.length;
  const m = arrTwo.length;

  const totalLength = n + m;

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

  if (totalLength % 2 == 1) {
    const median = mergedArr[Math.floor(totalLength / 2)];

    return median;
  }

  const medianIndexOne = totalLength / 2;
  const medianIndexTwo = totalLength / 2 - 1;

  const sumOfMedianElements =
    mergedArr[medianIndexOne] + mergedArr[medianIndexTwo];

  const median = sumOfMedianElements / 2;

  return median;
}

const numArrOne = [2, 4, 6];

const numArrTwo = [1, 3, 5];

const result = medianOfTwoSortedArrays(numArrOne, numArrTwo);

console.log(result);

// Time complexity: O(N + M)
// Space complexity: O(N + M)
