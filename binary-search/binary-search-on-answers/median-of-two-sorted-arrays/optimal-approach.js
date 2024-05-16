// Given two sorted arrays arr1 and arr2 of size m and n respectively, return the median of the two sorted arrays. The median is defined as the middle value of a sorted list of numbers. In case the length of the list is even, the median is the average of the two middle elements.

function medianOfTwoSortedArrays(arrOne, arrTwo) {
  const n = arrOne.length;
  const m = arrTwo.length;

  if (n > m) return medianOfTwoSortedArrays(arrTwo, arrOne);

  const totalLength = n + m;

  const numOfLeftElements = Math.floor((totalLength + 1) / 2);

  let low = 0;
  let high = n;

  while (low <= high) {
    const midOne = Math.floor((low + high) / 2);
    const midTwo = numOfLeftElements - midOne;

    let l1 = -Infinity;
    let l2 = -Infinity;

    let r1 = Infinity;
    let r2 = Infinity;

    if (midOne - 1 >= 0) l1 = arrOne[midOne - 1];
    if (midTwo - 1 >= 0) l2 = arrTwo[midTwo - 1];

    if (midOne < n) r1 = arrOne[midOne];
    if (midTwo < m) r2 = arrTwo[midTwo];

    if (l1 <= r2 && l2 <= r1) {
      if (totalLength % 2 === 1) {
        const median = Math.max(l1, l2);

        return median;
      } else {
        const sumOfMedianElements = Math.max(l1, l2) + Math.min(r1, r2);
        const median = sumOfMedianElements / 2;

        return median;
      }
    } else if (l1 > r2) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return 0;
}

const numArrOne = [2, 4, 6];

const numArrTwo = [1, 3, 5];

const result = medianOfTwoSortedArrays(numArrOne, numArrTwo);

console.log(result);

// Time complexity: O(log(min(n, m)))
// Space complexity: O(1)
