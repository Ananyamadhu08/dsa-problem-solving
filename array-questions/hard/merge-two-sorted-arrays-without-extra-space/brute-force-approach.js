// Given two sorted arrays of sizes n and m in non-decreasing order. Merge them in sorted order. Modify array one so that it contains the first n elements and modify array two so that it contains the last m elements.

function mergeSortedArrays(arrOne, arrTwo) {
  const n = arrOne.length;
  const m = arrTwo.length;

  let arrThree = new Array(n + m);

  let left = 0;
  let right = 0;

  let index = 0;

  while (left < n && right < m) {
    if (arrOne[left] <= arrTwo[right]) {
      arrThree[index] = arrOne[left];

      left++;
      index++;
    } else {
      arrThree[index] = arrTwo[right];

      right++;
      index++;
    }
  }

  while (left < n) {
    arrThree[index] = arrOne[left];

    left++;
    index++;
  }

  while (right < m) {
    arrThree[index] = arrTwo[right];

    right++;
    index++;
  }

  for (let i = 0; i < n + m; i++) {
    if (i < n) {
      arrOne[i] = arrThree[i];
    } else {
      arrTwo[i - n] = arrThree[i];
    }
  }

  return [arrOne, arrTwo];
}

const numArrOne = [1, 3, 5, 7];
const numArrTwo = [2, 4, 6, 8];

const result = mergeSortedArrays(numArrOne, numArrTwo);

console.log(result);

// Time complexity: O(n + m)
// Space complexity: O(n + m)
