// Given two sorted arrays of sizes n and m in non-decreasing order. Merge them in sorted order. Modify array one so that it contains the first n elements and modify array two so that it contains the last m elements.

function mergeSortedArrays(arrOne, arrTwo) {
  const n = arrOne.length;
  const m = arrTwo.length;

  let left = n - 1;
  let right = 0;

  while (left >= 0 && right < m) {
    if (arrOne[left] > arrTwo[right]) {
      [arrOne[left], arrTwo[right]] = [arrTwo[right], arrOne[left]];

      left--;
      right++;
    } else {
      break;
    }
  }

  arrOne.sort((a, b) => a - b);
  arrTwo.sort((a, b) => a - b);

  return [arrOne, arrTwo];
}

const numArrOne = [1, 3, 5, 7];
const numArrTwo = [2, 4, 6, 8];

const result = mergeSortedArrays(numArrOne, numArrTwo);

console.log(result);

// Time complexity: O(min(N, M)) + O(N log N) + O(M log M)
// Space complexity: O(1)
