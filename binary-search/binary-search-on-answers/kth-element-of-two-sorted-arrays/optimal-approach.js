// Given two sorted arrays of size m and n respectively, you are tasked with finding the element that would be at the kth position of the final sorted array.

function kthElementOfTwoSortedArrays(arrOne, arrTwo, k) {
  const n = arrOne.length;
  const m = arrTwo.length;

  if (n > m) return kthElementOfTwoSortedArrays(arrTwo, arrOne);

  const numOfLeftElements = k;

  let low = Math.max(0, k - m);
  let high = Math.min(k, n);

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
      const kthElement = Math.max(l1, l2);

      return kthElement;
    } else if (l1 > r2) {
      high = midOne - 1;
    } else {
      low = midOne + 1;
    }
  }

  return 0;
}

const numArrOne = [2, 4, 6];

const numArrTwo = [1, 3, 5];

const k = 4;

const result = kthElementOfTwoSortedArrays(numArrOne, numArrTwo, k);

console.log(result);

// Time complexity: O(log(min(n, m)))
// Space complexity: O(1)
