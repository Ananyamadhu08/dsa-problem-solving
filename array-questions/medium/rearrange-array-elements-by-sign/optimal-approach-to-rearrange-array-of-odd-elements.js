// Given an array of positive and negative elements, not necessarily equal. Without altering the relative order of positive and negative elements, you must return an array of alternately positive and negative values. The leftover elements should be placed at the very end in the same order as in the original array.

function rearrangeArray(arr) {
  let positiveNums = arr.filter((num) => num > 0);
  let negativeNums = arr.filter((num) => num < 0);

  let positiveIndex = 0;
  let negativeIndex = 0;

  let rearrangedArr = [];

  while (
    positiveIndex < positiveNums.length &&
    negativeIndex < negativeNums.length
  ) {
    rearrangedArr.push(positiveNums[positiveIndex++]);
    rearrangedArr.push(negativeNums[negativeIndex++]);
  }

  while (positiveIndex < positiveNums.length) {
    rearrangedArr.push(positiveNums[positiveIndex++]);
  }

  while (negativeIndex < negativeNums.length) {
    rearrangedArr.push(negativeNums[negativeIndex++]);
  }

  return rearrangedArr;
}

const numArr = [3, 1, -2, -5, 2, 6, 9, -4];

const result = rearrangeArray(numArr);

console.log(result);

// Time complexity: O(N)
// Space complexity: O(N)
