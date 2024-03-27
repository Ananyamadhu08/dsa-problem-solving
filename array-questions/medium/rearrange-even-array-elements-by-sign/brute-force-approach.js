// Given an integer array of even length consisting of an equal number of positive and negative integers. Return an array of the rearranged elements make sure to follow the conditions below -
// 1. Every consecutive pair of integers have opposite signs.
// 2. For all integers with the same sign, the order in which they were present is preserved.
// 3. The rearranged array begins with a positive integer.

function rearrangeArray(arr) {
  let positiveNums = arr.filter((num) => num > 0);
  let negativeNums = arr.filter((num) => num < 0);

  let rearrangedArr = [];

  for (let i = 0; i < positiveNums.length; i++) {
    rearrangedArr.push(positiveNums[i]);
    rearrangedArr.push(negativeNums[i]);
  }

  return rearrangedArr;
}

const numArr = [3, 1, -2, -5, 2, -4];

const result = rearrangeArray(numArr);

console.log(result);

// Time complexity: O(N)
// Space complexity: O(N)
