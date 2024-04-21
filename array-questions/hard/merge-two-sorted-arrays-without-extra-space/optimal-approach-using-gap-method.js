// Given two sorted arrays of sizes n and m in non-decreasing order. Merge them in sorted order. Modify array one so that it contains the first n elements and modify array two so that it contains the last m elements.

function swapElementsIfGreater(arrOne, arrTwo, indexOne, indexTwo) {
  if (arrOne[indexOne] > arrTwo[indexTwo]) {
    [arrOne[indexOne], arrTwo[indexTwo]] = [arrTwo[indexTwo], arrOne[indexOne]];
  }
}

function mergeSortedArrays(arrOne, arrTwo) {
  const n = arrOne.length;
  const m = arrTwo.length;

  const length = n + m;

  let gap = Math.ceil(length / 2);

  while (gap > 0) {
    let left = 0;
    let right = left + gap;

    while (right < length) {
      if (left < n && right >= n) {
        swapElementsIfGreater(arrOne, arrTwo, left, right - n);
      } else if (left >= n) {
        swapElementsIfGreater(arrTwo, arrTwo, left - n, right - n);
      } else {
        swapElementsIfGreater(arrOne, arrOne, left, right);
      }

      left++;
      right++;
    }

    if (gap === 1) break;

    gap = Math.ceil(gap / 2);
  }

  return [arrOne, arrTwo];
}

const numArrOne = [1, 3, 5, 7];
const numArrTwo = [2, 4, 6, 8];

const result = mergeSortedArrays(numArrOne, numArrTwo);

console.log(result);

// Time complexity: O((N + M) * log(N + M))
// Space complexity: O(1)
